import { Button, H1, H3, H4, Input } from "@/components"
import Link from "next/link"
import Image from "next/image"

const navbarElements = [
    {
        label: 'Home',
        href: 'http://localhost:3000'
    },
    {
        label: 'About us',
        href: '#'
    }
]
export default function MainNavbar ()
{
    return (
        <header className="w-full fixed mt-7 flex items-center justify-between h-navbar-height">
            <nav className="mx-auto flex items-center justify-between rounded bg-white border border-secondary drop-shadow-md p-2 py-1">
                <ul className="flex items-center justify-start">
                    
                    <Link href={"/"} className="px-3 flex items-center flex-shrink-0">
                        <Image src={'/brand/transit-logo-solid.svg'} alt={'logo'} width={25} height={25}
                        className={'w-[25px] h-[25px]'}
                        />
                       <H4
                       className={'ml-3'}
                       >
                        Blog
                       </H4>
                    </Link>

                    <Input 
                    placeholder={'Search'}
                    className={'bg-white hover:bg-transparent mx-3 hidden md:block'}
                    />
                    
                    {
                        navbarElements.map((value, index) => (
                            <li
                            key={index}
                            >
                                <Button
                                variant={'ghost'}
                                className={'transition-colors  hover:translate-y-0'}
                                href={value.href}
                                >
                                    { value.label }
                                </Button>
                            </li>
                        ))
                    }
                </ul> 
            </nav>
        </header>
    )
}