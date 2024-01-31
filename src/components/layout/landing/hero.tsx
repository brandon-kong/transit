import { H1, Button, P } from "@/components"
import Image from "next/image"

export default function HeroSection()
{
    return (
        <section
      className={'py-24 pt-hero-pt flex flex-col lg:flex-row gap-16 md:gap-12 justify-center items-center'}
      >

      
        <div
        className={'flex flex-col gap-5'}
        >
            <H1
            className={'text-center md:text-left'}
            >
                Build safer communities
                <br />
                with <span className={'text-primary-500'}>transit</span>
            </H1>
            <P
            className={'text-secondary-900 max-w-md text-center md:text-left'}
            >
                Magna irure ad eiusmod non do et culpa commodo velit magna excepteur duis eu sunt. Labore nulla velit aliqua consectetur magna. Laboris anim occaecat in Lorem. 
            </P>

            <div
            className={'mt-5 flex flex-col md:flex-row items-center gap-4'}
            >
                <Button>
                Get started
                </Button>

                <Button
                variant={'outline'}
                >
                Learn more
                </Button>
            </div>
        </div>
        
        <div
        className={'relative select-none hidden md:block'}
        >
            <Image src={'/images/landing/map.gif'} quality={100} alt={'map'} width={600} height={600}
            className={'drop-shadow-lg shadow-primary rounded-lg border-4 border-white'}
            />

            <Image src={'/images/landing/phone-mockup.png'} quality={100} alt={'map'} width={270} height={600}
            className={'drop-shadow-lg absolute -top-10 -right-8'}
            />
        </div>
       
      </section>
    )
}