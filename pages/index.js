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
        <p className='text-2xl md:text-3xl'>Welcome to ArghaTech</p>
        <p className='text-sm'>A open source edition of my original production deployment, HelloArgha.</p>
        <Link href="https://helloargha.vercel.app/" className='text-xl bg-slate-300 dark:bg-slate-700 hover:opacity-95 px-2 py-1 rounded-lg'>
          <button type="button">Visit HelloArgha</button>
        </Link>
      </div>
    </>
  );
}
