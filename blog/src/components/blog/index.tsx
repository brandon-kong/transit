import { MDXRemote } from 'next-mdx-remote/rsc';
import { H1, H2, H3, H4, P } from '..';
import Image from 'next/image';


import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  }
}

interface BlogProps {
  source: any;
}

const Blog: React.FC<BlogProps> = ({ source }) => {
    return <MDXRemote source={source}
    components={{
      h1: ({ children }) => <H1 className={'my-6'}>{children}</H1>,
      h2: ({ children }) => <H2 className={'my-8'}>{children}</H2>,
      h3: ({ children }) => <H3 className={'my-6'}>{children}</H3>,
      h4: ({ children }) => <H4 className={'my-4'}>{children}</H4>,
      p: ({ children }) => <P className={'my-6'}>{children}</P>,
      img: ({ alt, src }) => <img className={'rounded-lg'} src={src || ''} alt={alt || 'image'} width={1000} height={500} />,
      pre: ({ children }) => <div className={'w-full'}><pre className={'bg-gray-50 border border-gray-200 p-1 rounded-lg w-full'}>{children}</pre></div>,
      code: ({ children }) => <div className={'p-2 px-4 rounded-lg w-full font-code'}><code>{children}</code></div>,
      blockquote: ({ children }) => <blockquote className={'border-l-4 border-primary pl-4 '}>{children}</blockquote>,
      ul: ({ children }) => <ul className={'list-disc list-inside'}>{children}</ul>,
      ol: ({ children }) => <ol className={'list-decimal list-inside'}>{children}</ol>,
      table: ({ children }) => <table className={'w-full rounded-lg'}>{children}</table>,
      thead: ({ children }) => <thead className={''}>{children}</thead>,
      tbody: ({ children }) => <tbody>{children}</tbody>,
      tr: ({ children }) => <tr className={'even:bg-gray-50'}>{children}</tr>,
      td: ({ children }) => <td className={' p-4 border-t'}>{children}</td>,
      th: ({ children }) => <th className={'p-4 text-left'}>{children}</th>,
      video: ({ src }) => <video className={'rounded-lg'} src={src} controls={true} />,
      iframe: ({ src }) => <div className={'rounded-lg overflow-hidden w-full'}><iframe className={'rounded-lg w-full'} src={src} /></div>,
      
    }}
    options={options}
    />;
};

export default Blog;
