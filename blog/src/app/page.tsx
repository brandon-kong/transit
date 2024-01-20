// pages/[slug].tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button, H1, H2, H3, H4, P } from '@/components';

import Image from 'next/image';
import Blog from '@/components/blog';

import readingTime from 'reading-time';
import { Metadata, ResolvingMetadata } from 'next';
import { getEntries, getEntry } from '@/util/retrieve';

import { Document } from '@contentful/rich-text-types';

// image type

const Page = async () => {  
  
  const entries = await getEntries();
  

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
            <img src={item.fields.featuredImage?.fields.file.url as any} alt={item.fields.title as string} 
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
