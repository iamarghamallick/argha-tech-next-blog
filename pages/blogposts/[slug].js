import DisplayBlogs from '@/components/DisplayBlogs';
import { getAllPostsIds, getPostData, getSortedPostsData } from '@/lib/blogposts';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData
    }
  };
}

export default function Post({ postData, allPostsData }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 items-center justify-center">
      <Head>
        <title>{postData.title} - ArghaTech Blog</title>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </Head>

      <div className="sm:px-20 py-10 bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center min-w-screen shadow-lg shadow-gray-300/50 dark:shadow-gray-500/50 drop-shadow-2xl">
        <h1 className="text-3xl my-2 font-mono font-extrabold text-center">
          {postData.title}
        </h1>

        {/* blog header  */}
        <div className="text-sm text-gray-700 dark:text-gray-300 my-2">
          <ul className='flex'>
            {postData.tags.map((tag) => (
              <li key={tag} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm p-1 m-1'>{tag}</li>
            ))}
          </ul>
        </div>
        <p className="flex flex-col sm:flex-row justify-between w-full text-purple-900 dark:text-purple-400 items-center">
          <span>{postData.author}</span>
          <span>Posted on {postData.date}</span>
        </p>
      </div>

      {/* blog content   */}
      <article className="prose prose-neutral dark:prose-invert bg-gray-100 dark:bg-gray-900 px-2 py-10 sm:mx-[1vw] sm:px-0 md:mx-[5vw] md:px-0 lg:mx-[15vw] lg:px-0 xl:mx-[20vw] xl:px-0 2xl:mx-[25vw] 2xl:px-0">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className='sm:w-[98vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]' />
      </article>

      {/* blog footer  */}
      <div className='px-2 md:px-12 flex flex-col justify-center'>
        <h1 className='text-center font-semibold text-3xl'>Related Blog Posts</h1>
        <DisplayBlogs allPostsData={allPostsData} />
      </div>
    </div>
  );
}
