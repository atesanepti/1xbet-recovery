import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameCardProps {
  label: string;
  redirect: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const GameCard = ({ label, image, redirect }: GameCardProps) => {
  return (
    <Link
      href={redirect}
      className="shadow-sm block rounded-sm overflow-hidden "
    >
      <Image
        src={image}
        alt={label}
        className="w-full aspect-video"
        placeholder="blur"
      />
      <span className="text-sm md:text-sm text-accent bg-[#E9EEF2] px-2 text-center !line-clamp-1 py-1">
        {label}
      </span>
    </Link>
  );
};

export default GameCard;
