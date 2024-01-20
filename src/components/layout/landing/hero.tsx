import { H1, Button, P } from "@/components"
import Image from "next/image"

export default function HeroSection()
{
    return (
        <section
      className={'py-24 pt-hero-pt flex flex-col lg:flex-row gap-8 justify-center items-center'}
      >

      
        <div
        className={'flex flex-col gap-5'}
        >
            <H1>
                Build safer communities
                <br />
                with <span className={'text-primary-500'}>transit</span>
            </H1>
            <P
            className={'text-secondary-900 max-w-md'}
            >
                Magna irure ad eiusmod non do et culpa commodo velit magna excepteur duis eu sunt. Labore nulla velit aliqua consectetur magna. Laboris anim occaecat in Lorem. 
            </P>

            <div
            className={'space-x-5 mt-5'}
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
        className={'relative select-none'}
        >
            <Image src={'/images/landing/map.gif'} quality={100} alt={'map'} width={600} height={600}
            className={'drop-shadow-lg shadow-primary rounded-lg border-4 border-primary-500'}
            />

            <Image src={'/images/landing/phone-mockup.png'} quality={100} alt={'map'} width={270} height={600}
            className={'drop-shadow-lg absolute -top-10 -right-8'}
            />
        </div>
       
      </section>
    )
}