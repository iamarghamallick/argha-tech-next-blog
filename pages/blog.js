import DisplayBlogs from '@/components/DisplayBlogs';
import { getSortedPostsData } from '@/lib/blogposts';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const blogPageTitle = '<ARGHA TECH />';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

const blog = ({ allPostsData }) => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <Head>
        <title>ArghaTech - HelloArgha Blog</title>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </Head>
      <section className="bg-gray-100 dark:bg-gray-900 px-2 md:px-5 lg:px-20 py-5 flex flex-col items-center justify-center min-w-screen">
        <Image
          priority={true}
          src="/blog-logo.jpg"
          width={200}
          height={200}
          alt="author image"
          className="rounded-full border-1 border-purple-800 shadow-2xl shadow-purple-500/50 mt-2 mb-5"
        />
        <h1 className="text-2xl font-semibold my-5">{blogPageTitle}</h1>
        <p className="container text-xl text-center pb-10">
          Welcome to your go-to destination for all things technology! This blog
          is dedicated to keeping you informed and empowered in the fast-paced
          world of tech innovations. In this blog, I strive to provide
          insightful and engaging content that covers a wide range of topics.
          Whether you're a tech enthusiast, a casual user we've got you covered.
        </p>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 px-1 md:px-5 lg:px-20 py-10 flex flex-col justify-center items-center min-w-screen">
        <h2 className="text-mono text-xl mb-5">
          All Posts ({allPostsData.length})
        </h2>
        <DisplayBlogs allPostsData={allPostsData} />
      </section>
    </div>
  );
};

export default blog;
