import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header({ children, className }: HeaderProps) {
    return (
        <div className={cn("header", className)}>
            <Link href="/" className="md:flex-1">
                <Image
                    className="hidden md:block"
                    src="/assets/icons/logo.svg"
                    alt="Logo with name"
                    width={120}
                    height={32}
                />
                <Image className="mr-2 md:hidden" src="/assets/icons/logo-icon.svg" alt="Logo" width={32} height={32} />
            </Link>
            {children}
        </div>
    );
}
