import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT as string,
  accessToken: process.env.CONTENTFUL_ACESS_TOKEN as string
});

export const getEntries = async () => {

  const entries = await client.getEntries();
  return entries;
};

export const getEntry = async (slug: string) => {
  const entry = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1
  });
  
  return entry;
};

export const getPublishedEntries = async () => {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.published': true
  });
  
  return entries;
};

export const getPublishedEntry = async (slug: string) => {
  const entry = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    'fields.published': true,
    limit: 1
  });
  
  return entry;
};