import Head from "next/head";
import Header from "../components/all/header";
import Card from "../components/card";
import Container from "../components/shared/composers/container";

export default function Home() {
  return (
    <div className='bg-[#3B3C3E] h-full !text-white'>
      <Head>
        <title>IMMO-WEB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
