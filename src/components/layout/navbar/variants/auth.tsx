import { Button } from "@/components"
import Link from "next/link"
import Image from "next/image"

export default function AuthNavbar ()
{
    return (
        <header className="absolute my-7 flex items-center justify-between w-full h-navbar-height px-content-padding-x lg:p-0">
            <nav className="flex items-center justify-center mx-auto max-w-content-width w-full py-2">
                <div className="flex items-center">
                    <Link href={"/"} className="flex items-center flex-shrink-0">
                        <Image src={'/brand/transit-logo-solid.svg'} alt={'logo'} width={35} height={35}
                        />
                       
                    </Link>

                   
                </div>
            </nav>
        </header>
    )
}