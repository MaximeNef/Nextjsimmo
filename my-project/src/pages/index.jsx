import Head from "next/head";
import Image from "next/image";
import Header from "../components/all/header";
import Container from "../components/shared/composers/container";

export default function Home() {
  return (
    <div className='bg-[#3B3C3E] h-screen !text-white'>
      <Head>
        <title>IMMO-WEB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  );
}
