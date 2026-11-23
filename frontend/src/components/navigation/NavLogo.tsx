"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLogoProps {
  className?: string;
}

export function NavLogo({ className = "" }: NavLogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg transition-opacity hover:opacity-90 ${className}`}
      aria-label="WebNote Technologies Private Limited"
    >
      <div className="relative h-10 sm:h-12 w-36 sm:w-44 lg:w-48 flex items-center justify-start overflow-hidden select-none">
        <Image
          src="/webnotelogo.png"
          alt="WebNote Technologies Private Limited"
          width={1024}
          height={1024}
          className="h-28 sm:h-36 w-auto object-contain max-w-none"
          priority
        />
      </div>
    </Link>
  );
}
