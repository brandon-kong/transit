'use client';

import AuthNavbar from "./variants/auth";
import MainNavbar from "./variants/main"

import { usePathname } from "next/navigation"

const Navbars = {
    '/': <MainNavbar />,
    '/sign-in': <AuthNavbar />,
    '/sign-up': <AuthNavbar />,
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