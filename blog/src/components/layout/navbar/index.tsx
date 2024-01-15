'use client';

import MainNavbar from "./variants/main"

import { usePathname } from "next/navigation"

const Navbars = {
    '/': <MainNavbar />,
    '/sign-in': <></>,
    '/sign-up': <></>,
    '/authorize': <></>,
}

type NavbarKey = keyof typeof Navbars

export default function Navbar ()
{
    const pathname = usePathname()
    const PathNavbar = Navbars[pathname as NavbarKey]
    
    if (!Navbars[pathname as NavbarKey]) return <MainNavbar />
    return PathNavbar;
}