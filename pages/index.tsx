import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';

export default function Home() {


  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="WeezKitchen website" />
        <title>WeezKitchen</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
