"use client";
import { usePathname } from "next/navigation";
import Logo from "../app/assets/logo.svg";
import React from "react";
import Image from "next/image";
import links from "@/app/utils/links";
import { Button } from "./ui/button";
import Link from "next/link";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image
        src={Logo}
        alt="logo"
        width={100}
        height={100}
        className="mx-auto"
      />
      <div className="flex flex-col  mt-20 gap-y-4">
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon}
                <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
