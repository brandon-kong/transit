import { P } from "@/components";
import Image from "next/image";

const companies = [
    {
        name: 'CTA',
        logo: '/logos/cta.png'
    },
    {
        name: 'MTA',
        logo: '/logos/mta.png'
    },
    {
        name: 'MBTA',
        logo: '/logos/mbta.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/wmata.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/lamt.png'
    },
    {
        name: 'MTA',
        logo: '/logos/mta.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/lamt.png'
    },
    {
        name: 'CTA',
        logo: '/logos/cta.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/lamt.png'
    },
    {
        name: 'MTA',
        logo: '/logos/mta.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/lamt.png'
    },
    {
        name: 'MBTA',
        logo: '/logos/mbta.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/lamt.png'
    },
    {
        name: 'CTA',
        logo: '/logos/cta.png'
    },
    {
        name: 'WMATA',
        logo: '/logos/lamt.png'
    },
    {
        name: 'Uber',
        logo: '/logos/uber.png'
    },
]

export default function TrustedSection()
{
    return (
        <section
        className={'w-full text-secondary-900'}
        >
            <P
            className={'w-full text-center'}
            >
                Trusted by 54,000+ commuters and 1,000+ companies nationwide.
            </P>
            <ul
            className={'mt-8 flex flex-wrap items-center justify-center gap-12'}
            >
                {
                    companies.map((value, index) => (
                        <li
                        className={'relative w-16 h-16'}
                        key={index}
                        >
                            <Image src={value.logo} alt={value.name} fill={true}
                            className={'absolute inset-0 grayscale opacity-50 object-contain'}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}