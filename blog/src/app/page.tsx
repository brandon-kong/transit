import { getPublishedEntries } from '@/util/retrieve';

const Page = async () => {  
  
  const entries = await getPublishedEntries();
  

  return (
  <main
  className={'p-content-padding py-hero-pt max-w-content-width mx-auto'}
  >
    {
      entries.items.map((item, index) => {
        return (
          <div
          key={index}
          className={'flex flex-col gap-5 border shadow-md rounded-lg p-4 max-w-sm'}
          >
            <img src={(item.fields.featuredImage as any).fields.file.url as any} alt={item.fields.title as string} 
            className={'rounded-lg max-w-sm'}
            />

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
              className={'flex gap-5'}
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
  </main>
  )
};



export default Page;
