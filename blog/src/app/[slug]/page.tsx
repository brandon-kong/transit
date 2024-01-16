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
import { getEntries, getEntry } from '@/util/retrieve';

import { Document } from '@contentful/rich-text-types';
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
  const { slug } = params;

  const fromContentful = await getEntry(params.slug); 
  
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

  const postData = getPosts(params.slug); 

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
    tags: item.fields.tags as string[],
    published: item.fields.published as boolean,
    publish_date: item.fields.publishDate as string,

    author: item.fields.author as string,
    author_website: item.fields.authorWebsite as string,

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
      className={'mt-5 flex flex-col md:flex-row justify-center md:justify-between'}
      >

        <P
        className={'text-xl text-primary'}
        >
        Reading time: {readingTime(content).text}
        </P>

        <div
        className={'flex flex-col items-center md:items-end'}
        >

          <H4
          className={'text-primary'}
          >
              Written by <Button variant={'link'} className={'text-xl text-current no-underline hover:underline hover:underline-offset-4 hover:translate-y-0 font-semibold'}
              href={metadata.author_website || undefined}
              >{ metadata.author }</Button>
          </H4>

          <P
          className={'text-xl'}
          >
              { metadata.publish_date }
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
            metadata.tags.map((value: string, index: number) => (
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
