import { Button } from "@/components"
import Link from "next/link"
import Image from "next/image"

const navbarElements = [
    {
        label: 'Blog',
        href: process.env.NEXT_PUBLIC_BLOG_URL as string || '#',
    },
    {
        label: 'About Us',
        href: '#'
    }
]
export default function MainNavbar ()
{
    return (
        <header className="absolute my-7 flex items-center justify-between w-full h-navbar-height px-content-padding-x lg:p-0">
            <nav className="flex items-center justify-between mx-auto max-w-content-width w-full py-2">
                <div className="flex items-center flex-1">
                    <Link href={"/"} className="flex items-center flex-shrink-0">
                        <Image src={'/brand/transit-logo-solid.svg'} alt={'logo'} width={35} height={35}
                        className="mr-2"
                        />
                        <Image src={'/brand/transit-logo.svg'} alt={'logo'} width={110} height={55} />
                       
                    </Link>

                   
                </div>

               
                <ul className="hidden md:flex items-center justify-start">
                        {
                            navbarElements.map((value, index) => (
                                <li
                                key={index}
                                >
                                    <Button
                                    variant={'ghost'}
                                    className={'hover:bg-primary-100'}
                                    href={value.href}
                                    >
                                        { value.label }
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                <Button
                href={'/sign-in'}
                className={'ml-2'}
                >Sign In</Button>
                
            </nav>
        </header>
    )
}