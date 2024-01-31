// pages/[slug].tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button, H1, H2, H3, H4, P } from '@/components';

import './syntax-highlighter.css';

import Image from 'next/image';
import Blog from '@/components/blog';

import readingTime from 'reading-time';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { getEntries, getEntry, getPublishedEntry } from '@/util/retrieve';

import { cache } from 'react';

// image type

const getPosts = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
      content,
      data
    }
  } catch (err) {
    return null;
  }
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const fromContentful = await getPublishedEntry(params.slug); 
  
  if (fromContentful.total === 0) {
    notFound();
  }

  const item = fromContentful.items[0]; 

  return {
    title: item.fields.title + ' | Transit',
    description: item.fields.description as string, 
  };
}

const Post = async ({ params }: { params: { slug: string}}) => {

  const fromContentful = await getEntry(params.slug);
  
  
  if (fromContentful.total === 0) {
    notFound(); 
  }

  // cache this

  cache(() => {
    return fromContentful.items[0];
  })

  const item = fromContentful.items[0];

  // turn file from
  const metadata = { 
    title: item.fields.title as string, 
    description: item.fields.description as string,
    image: item.fields.featuredImage as any,
    category: item.fields.category as string,
    tags: item.fields.tags as string[] | undefined,
    published: item.fields.published as boolean,
    publish_date: item.fields.publishDate as string | undefined,

    author: item.fields.author as string,
    author_website: item.fields.authorWebsite as string | undefined,

    slug: item.fields.slug,
  }

  const content = item.fields.content as string;


  
  return (
  <main
  className={'p-content-padding py-hero-pt'}
  >
     <div className={'max-w-content-width mx-auto'}>
      <img src={metadata.image.fields.file.url} alt={'Image cover'} width={1000} height={500}
      className={'object-cover w-full max-h-[500px] rounded-lg'}
      />
      <H1
      className={'mt-10 text-center md:text-left'}
      >
          { metadata.title }
      </H1>

      <div
      className={'mt-5 flex flex-col md:flex-row-reverse justify-center md:justify-between'}
      >

        <P
        className={'text-lg text-primary hidden md:block'}
        >
        {readingTime(content).text}
        </P>

        <div
        className={'flex flex-col items-center md:items-end'}
        >

          <P
          className={'text-primary text-xl'}
          >
              Written by <Button variant={'link'} className={'select-auto text-md transition-none text-current no-underline hover:underline hover:translate-y-0 font-normal'}
              href={metadata.author_website || undefined}
              >{ metadata.author }</Button>
          </P>

          <P
          className={''}
          >
            {
              metadata.publish_date ? (
                <span>Published: {new Date(metadata.publish_date).toLocaleDateString()}</span>
              ) : null
            }
            
          </P>
        </div>

      </div>
    </div>
    
    <div className={'mt-20 mx-auto max-w-blog-content-width w-full'}>

      <Blog source={content} />    


      <div
        className={'items-start mt-20 hidden md:flex'}
        >
          <P>Tags:</P>

          <div
          className={'flex flex-wrap items-center ml-8 gap-2'}
          >
            
          {
            metadata.tags?.map((value: string, index: number) => (
              <Button size={'sm'} variant={'primary-light'} key={index}>{value}</Button>
            ))
          }
          </div>

        </div>
    </div>
    
  </main>
  )
};



export default Post;
