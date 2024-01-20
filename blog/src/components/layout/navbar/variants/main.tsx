'use client';

import { useState, useEffect, useRef } from "react";

import { Button, H1, H3, H4, Input } from "@/components"
import Link from "next/link"
import Image from "next/image"
import cn from "@/util/cn";

import { Search } from 'react-feather';

const navbarElements = [
    {
        label: 'Home',
        href: process.env.NEXT_PUBLIC_BASE_URL as string || '#',
        className: 'hidden md:flex'
    },
    {
        label: 'About us',
        href: '#',
        className: 'hidden md:flex'
    },
    {
        label: 'Contact us',
        href: '#',
        className: 'hidden md:flex'
    },

]

const navbarScrollMargin = 500;
export default function MainNavbar ()
{
    const [scrollY, setScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // when scrolling down, hide navbar

            if (window.scrollY < (prevScrollY.current)) {
                // when scrolling up, show navbar
                setShowNavbar(true);
            } else if (window.scrollY > navbarScrollMargin) {
                // when scrolling down and past the margin, hide navbar
                setShowNavbar(false);
            }

            prevScrollY.current = window.scrollY;
        }
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <header className={cn("w-full fixed transition-all flex items-center justify-between duration-300", showNavbar ? 'top-0 md:top-7' : '-top-navbar-height')}>
            <nav className={cn("mx-auto w-full max-w-content-width flex items-center justify-between rounded-b-lg md:rounded bg-white border-transparent px-4 h-navbar-height transition-all", scrollY > 0 && 'border border-secondary drop-shadow-md')}>
                <ul className="w-full flex items-center justify-between">
                    
                    <Link href={"/"} className="px-3 flex items-center flex-shrink-0">
                        <Image src={'/brand/transit-logo-solid.svg'} alt={'logo'} width={45} height={45}
                        className={'w-[45px] h-[45px]'}
                        />
                       <H3
                       className={'ml-3 '}
                       >
                        Blog
                       </H3>
                    </Link>
                    
                    <div
                    className={'px-4 group flex-1 flex items-center group-focus:bg-secondary'}
                    >

                   <Search 
                   size={20}
                   />
                    <Input 
                    variant={'unstyled'}
                    placeholder={'Search'}
                    className={'w-full px-2 mx-2 hidden md:block h-full text-lg rounded-none border-0 border-b-2 border-transparent focus-within:border-black'}
                    />
                     </div>
                    <div className="flex items-center">
                    {
                        navbarElements.map((value, index) => (
                            <li
                            key={index}
                            >
                                <Button
                                variant={'ghost'}
                                size={'lg'}
                                className={cn('transition-colors hover:translate-y-0', value.className)}
                                href={value.href}
                                >
                                    { value.label }
                                </Button>
                            </li>
                        ))
                    }
                    </div>
                </ul> 
            </nav>
        </header>
    )
}