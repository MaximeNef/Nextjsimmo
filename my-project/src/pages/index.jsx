import Head from "next/head";
import Image from "next/image";
import Header from "../components/all/header";
import Hero from "../components/hero";
import Container from "../components/shared/composers/container";
import { motion } from "framer-motion";
import { useState } from "react";
import I18nProvider from "next-translate/I18nProvider";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locales } = router;
  const { t, lang } = useTranslation();
  console.log(locales, "locale");
  const handleClick = () => {
    router.push("/en");
  };

  return (
    <div className='bg-white h-screen !text-black'>
      <Head>
        <title>IMMO-WEB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Header />
    </div>
  );
}
