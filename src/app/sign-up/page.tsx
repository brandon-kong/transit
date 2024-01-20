import { Button, Card, H1, H2, Input, P } from '@/components'
import HeroSection from '@/components/layout/landing/hero'
import TrustedSection from '@/components/layout/landing/trusted'
import Image from 'next/image'

export default function SignUp() {
  return (
    <main className="flex items-center w-full min-h-screen py-hero-pt">
      <div
        className={'max-w-sm mx-auto w-full'}
      >
        <H2
        >
            Sign up
        </H2>

        <P
        className={'mt-2'}
        >
            Create an account to continue.
        </P>

        <form
        className={'mt-4 flex flex-col gap-5'}
        >

            <div 
            className={'flex gap-5 w-full'}
            >
                <Input
                name={'first-name'}
                placeholder={'First name'}
                />

                <Input
                name={'last-name'}
                placeholder={'Last name'}
                />
            </div>

            <Input
            name={'email'}
            type={'email'}
            placeholder={'Email'}
            />

            <Input
            name={'password'}
            type={'password'}
            placeholder={'Password'}
            />

            <Input
            name={'confirm-password'}
            type={'password'}
            placeholder={'Confirm password'}
            />

            <Button
            >
                Create an account
            </Button>
        </form>

        <div
        className={'mt-4 flex gap-2 items-center justify-center'}
        >
            <P>
                Already have an account?
            </P>

            <Button
            href={'/sign-in'}
            variant={'link'}
            className={'text-md select-auto hover:translate-y-0 transition-none'}
            >
                Sign in
            </Button>
        </div>

        <div
        className={'mt-4 flex items-center gap-4'}
        >
            <hr className={'flex-1'} />
            <P>or</P>
            <hr className={'flex-1'} />
        </div>

        <div
        className={'mt-4 flex flex-col gap-5'}
        >
            <Button
            className={'relative'}
            variant={'outline'}
            >
                <Image src={'/brand/social/google.png'} alt={'google'} width={24} height={24} 
                className={'absolute top-1/2 left-3 transform -translate-y-1/2'}
                />
                <P className={'ml-2'}>Sign in with Google</P>
            </Button>

            <Button
            className={'relative'}
            variant={'outline'}
            >
                <Image src={'/brand/social/apple.png'} alt={'google'} width={24} height={24} 
                className={'absolute top-1/2 left-3 transform -translate-y-1/2'}
                />
                <P className={'ml-2'}>Sign in with Apple</P>
            </Button>
        </div>


      </div>

      
       
    </main>
  )
}
