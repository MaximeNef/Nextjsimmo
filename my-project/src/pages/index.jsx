import Head from "next/head";
import Image from "next/image";
import Header from "../components/all/header";

export default function Home() {
  return (
    <div className="bg-[#3B3C3E] h-screen">
      <Head>
        <title>IMMO-WEB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
    </div>
  );
}