import { getPublishedEntries } from '@/util/retrieve';
import { H2, P, Button } from '@/components';
const Page = async () => {  
  
  const entries = await getPublishedEntries();
  

  return (
  <main
  className={'p-content-padding py-hero-pt max-w-content-width mx-auto'}
  >

    <div
    className={'flex flex-wrap gap-8 justify-center'}
    >

    
    {
      entries.items.map((item, index) => {
        return (
          <div
          key={index}
          className={'flex flex-col gap-5 border shadow-md rounded-lg p-4 w-full'}
          >
            <div
            className={'flex flex-col gap-5 justify-between'}
            >

              <div
              className={'flex flex-col gap-5'}
              >

              
                <H2
                >
                  {item.fields.title as string}
                </H2>
                <P>
                  {item.fields.description as string}
                </P>
              </div>

              <div
              className={'flex gap-5 self-start'}
              >
                <Button
                variant={'outline'}
                href={item.fields.slug as string}
                >
                  Read more
                </Button>
                <Button>
                  Share
                </Button>
              </div>
            </div>

          </div>
        )
      })
    }

    </div>
  </main>
  )
};



export default Page;
