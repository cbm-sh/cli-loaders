"use client";

import { IconGroup } from "@/components/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

export const Header = memo(() => (
  <header className="z-50 flex h-16 items-center justify-between border-b border-b-neutral-800 p-6">
    <Link
      href="/"
      aria-label="Cli Loaders Logo"
      aria-hidden="false"
      className="inline-flex items-center space-x-2"
    >
      <Image
        role="img"
        className="z-50"
        alt="cli-loaders logo"
        src="/icon.svg"
        width={24}
        height={24}
      />
      <span className="text-md sm:text-lg">cli-loaders</span>
    </Link>
    <IconGroup className="flex space-x-6" />
  </header>
));

Header.displayName = "Header";
