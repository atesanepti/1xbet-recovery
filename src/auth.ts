import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "./lib/db";
import { findUserById } from "./data/user";

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { name: "email", type: "email" },
        password: { name: "password", type: "password" },
      },

      async authorize(credentials) {
        const user: string = (credentials!.email as string) || "";
        const password: string = (credentials!.password as string) || "";

        if (!user || !password) {
          throw new Error("Invalid Credentials");
        }

        const account = await db.users.findUnique({
          where: { email: user },
        });

        if (!account) {
          throw new Error("Account not found");
        }

        const passwordIsMatch = await bcrypt.compare(
          password,
          account.password
        );

        if (!passwordIsMatch) {
          throw new Error("Invalid Password");
        }
        return account;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async jwt({ token }) {
      const user = await findUserById(token.sub!);
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        const user = await db.users.findUnique({
          where: { id: token.sub },
          include: { wallet: true },
        });

        if (user?.password) {
          user.password = "";
        }

        if (user) {
          session.user = user;
        }
      }
      return session;
    },
  },
});
