import { H1, H2, H3, H4, P } from "@/components";
import Image from "next/image";

export default function Page ()
{
    return (
        <main
        className={'p-content-padding py-hero-pt'}
        >

            <div className={'max-w-content-width mx-auto'}>
                <Image src={'/images/test.jpg'} alt={'Image cover'} width={1000} height={500}
                className={'object-cover w-full max-h-[500px] rounded-lg'}
                />
                <H1
                className={'mt-10'}
                >
                    How to Use Public Transportation to Go Places
                </H1>

                <div
                className={'mt-5 flex flex-col items-end'}
                >
                    <H4
                    className={'text-primary'}
                    >
                        Written by John Doe
                    </H4>

                    <P
                    className={'text-xl'}
                    >
                        June 5th, 2024
                    </P>
                </div>
            </div>
            
            <div className={'mt-20 mx-auto max-w-blog-content-width'}>
               

                <div
                >
                    <H2
                    className={'my-4'}
                    >
                        Main
                    </H2>
                    <P
                    className={'my-8'}
                    >
                        Do sunt ut excepteur ad reprehenderit proident nisi laborum dolor excepteur. Sit veniam cillum est cillum. Excepteur aliqua veniam sit adipisicing amet anim consequat id exercitation. Dolore non elit ad ipsum dolor dolore. Ea ipsum mollit qui nulla proident amet incididunt. Eu aliqua cupidatat cupidatat tempor deserunt voluptate velit minim aliqua dolore excepteur culpa.
                        <br/><br/>
                        Mollit enim labore fugiat ullamco pariatur ut duis pariatur non incididunt officia sit. Mollit proident tempor eu Lorem aliquip Lorem eu eu exercitation. Occaecat elit excepteur laborum laborum quis labore. Commodo nulla duis non excepteur officia magna consectetur sint mollit labore. Fugiat ad anim nostrud duis commodo tempor veniam duis magna laboris dolore exercitation anim consequat.
                        <br/><br/>
                        Aliquip nulla eu reprehenderit dolore dolor culpa sunt eu eiusmod mollit sunt mollit culpa. Magna duis esse et pariatur sunt tempor quis anim enim dolor et labore aliquip. Fugiat voluptate eu sint enim ipsum.
                        <br/><br/>
                        Ullamco cillum aute ex aute sit occaecat. Proident enim aliquip aliquip duis aute occaecat id cupidatat sunt ea adipisicing nisi. Cupidatat ex velit do nulla.
                        <br/><br/>
                        Aliqua irure pariatur id esse ad voluptate Lorem velit. Ea ad ullamco irure commodo laboris laboris. Dolor esse sit id tempor esse qui occaecat velit.
                    </P>

                    <H4
                    className={'my-4'}
                    >
                        Section 1
                    </H4>
                    <P
                    className={'my-8'}
                    >
                        Do sunt ut excepteur ad reprehenderit proident nisi laborum dolor excepteur. Sit veniam cillum est cillum. Excepteur aliqua veniam sit adipisicing amet anim consequat id exercitation. Dolore non elit ad ipsum dolor dolore. Ea ipsum mollit qui nulla proident amet incididunt. Eu aliqua cupidatat cupidatat tempor deserunt voluptate velit minim aliqua dolore excepteur culpa.
                        <br/><br/>
                        Mollit enim labore fugiat ullamco pariatur ut duis pariatur non incididunt officia sit. Mollit proident tempor eu Lorem aliquip Lorem eu eu exercitation. Occaecat elit excepteur laborum laborum quis labore. Commodo nulla duis non excepteur officia magna consectetur sint mollit labore. Fugiat ad anim nostrud duis commodo tempor veniam duis magna laboris dolore exercitation anim consequat.
                        <br/><br/>
                        Aliquip nulla eu reprehenderit dolore dolor culpa sunt eu eiusmod mollit sunt mollit culpa. Magna duis esse et pariatur sunt tempor quis anim enim dolor et labore aliquip. Fugiat voluptate eu sint enim ipsum.
                        <br/><br/>
                        Ullamco cillum aute ex aute sit occaecat. Proident enim aliquip aliquip duis aute occaecat id cupidatat sunt ea adipisicing nisi. Cupidatat ex velit do nulla.
                        <br/><br/>
                        Aliqua irure pariatur id esse ad voluptate Lorem velit. Ea ad ullamco irure commodo laboris laboris. Dolor esse sit id tempor esse qui occaecat velit.
                    </P>

                    <Image src={'/images/train.jpg'} alt={'Image cover'} width={1000} height={500}
                    className={'object-cover w-full rounded-lg'}
                    />
                    <P
                    className={'text-secondary-900 text-center mt-2'}
                    >
                        Train full of people
                    </P>
                </div>
            </div>
        </main>
    )
}