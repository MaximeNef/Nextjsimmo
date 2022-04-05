import Container from "../shared/composers/container";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-100vh",
    },
  };
  function handleClick() {
    setIsOpen((previsOpen) => !previsOpen);
  }

  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();

  const [state, setState] = useState({
    img: 0,
  });
  const imgarray = [
    "/assets/hero/home1.jpg",
    "/assets/hero/home2.jpg",
    "/assets/hero/home3.jpg",
    "/assets/hero/home4.jpg",
  ];
  const animationVariants = {
    visible: { opacity: 0.9 },
    hidden: { opacity: 0.3 },
  };

  //function

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (state.img === 3) {
          setState((prev) => ({
            ...prev,
            img: 0,
          }));
        } else {
          setState((prev) => ({
            ...prev,
            img: state.img + 1,
          }));
        }
      },

      2020
    );
    return () => clearInterval(interval);
  }, [state.img]);

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    } else {
      animationControls.start("hidden");
    }
  }, [loaded]);

  return (
    <motion.div
      initial={true}
      variants={menuVariants}
      animate={isOpen ? "opened" : "closed"}
      transition={{
        duration: 0.7,
        times: [0, 0.1, 0.9, 1],
        ease: [0.17, 0.17, 0.73, 0.99],
      }}
      className='bg-black absolute w-full h-full z-30 '
    >
      <Container className=''>
        <motion.div
          initial={"hidden"}
          animate={animationControls}
          variants={animationVariants}
          transition={{
            times: [0, 0.1, 0.9, 1],
            ease: "easeOut",
            repeat: Infinity,
            duration: 2,
          }}
        >
          <Image
            src={imgarray[state.img]}
            alt='Picture of the author'
            sizes='100%'
            layout='fill'
            objectFit='cover'
            quality={100}
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
        <Container className='relative  '>
          <Container className='absolute text-center'>
            <Image
              className='relative w-56 h-56 '
              src='/assets/logo.png'
              alt='Picture of the author'
              width={500}
              height={500}
            />{" "}
            <button
              onClick={handleClick}
              className='border-2  m-auto p-4 rounded-full font-bold animate-bounce  mt-20'
            >
              EXPLORE
            </button>
          </Container>
        </Container>
      </Container>

      <div> </div>
    </motion.div>
  );
};
export default Hero;
