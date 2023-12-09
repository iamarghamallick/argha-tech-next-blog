import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>HelloArgha</title>
        <link rel="shortcut icon" href="logo.png" type="image/png" />
      </Head>
      <div className="w-full flex flex-col items-center justify-center text-3xl gap-2 min-h-screen">
        <p className='text-2xl md:text-3xl'>Welcome to HelloArgha</p>
        <Link href="/blog" className='text-xl bg-slate-300 dark:bg-slate-700 hover:opacity-95 px-2 py-1 rounded-lg'>
          <button type="button">Explore Blog</button>
        </Link>
      </div>
    </>
  );
}
