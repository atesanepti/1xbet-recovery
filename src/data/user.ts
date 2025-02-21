import { db } from "@/lib/db";

export const findUserByEmail = async (email: string) =>
  await db.users.findUnique({ where: { email } });

export const findUserById = async (id: string) =>
  await db.users.findUnique({ where: { id } });
