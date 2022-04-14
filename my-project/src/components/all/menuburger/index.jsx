import Lottie from "react-lottie";
import burgerMenu from "./../../../../public/assets/lotties/burgermenu.json";
import Container from "../../shared/composers/container";
import { useState } from "react";
import Popup from "./popup";
import { motion } from "framer-motion";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Menuburger = () => {
  //menu= valeur de la fonction ,   setMenu= valeur qui va être changé, useState= valeur initiale (pop-up burger menu )
  // attributs de la fonction
  const [pause, setPause] = useState(true);
  const [play, setPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useTranslation("common");
  const [link, setLink] = useState([
    { page: t("popup_acceuil"), href: "/", selected: false },
    { page: t("popup_biens"), href: "/", selected: false },
    { page: t("popup_about"), href: "/", selected: false },
    { page: t("popup_contact"), href: "/", selected: false },
  ]);
  const defaultOptions = {
    name: "menuBurger",
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-100vh",
    },
  };
  //function qui permet de changer la valeur de la fonction
  function handelClick() {
    if (pause) {
      setIsOpen((previsOpen) => !previsOpen);
      setTimeout(function () {
        setPause((prevPause) => !prevPause);
      }, 1500);
      setPause((prevPause) => !prevPause);
    } else {
    }
  }
  return (
    <Container className=''>
      <Container className='text-[42px] font-semibold m-auto mt-[-60px]'>
        <Link href='/'>
          <Image
            src='/assets/logo.png'
            alt='Picture of the author'
            width={300}
            height={200}
          />
        </Link>
      </Container>

      <Container onClick={handelClick} className=' right-3 z-20 fixed mt-3'>
        <Lottie
          options={defaultOptions}
          height={48}
          width={43}
          isPaused={pause}
          IsPlaying={play}
        />
      </Container>

      {/* pop-Up menu burger  */}
      <motion.div
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className='bg-white h-full w-full fixed z-10 flex '
        transition={{
          duration: 0.7,
          times: [0, 0.1, 0.9, 1],
          ease: [0.17, 0.17, 0.73, 0.99],
        }}
      >
        <Popup
          link={link}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          burgerClick={handelClick}
        />
      </motion.div>
    </Container>
  );
};
export default Menuburger;
