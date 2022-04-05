import Container from "../shared/composers/container";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const durations = 2000;
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const [isOpen, setIsOpen] = useState(true);
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
  function handleClick() {
    setIsOpen(!isOpen);
  }

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
    <Container>
      {isOpen ? (
        <Container className='bg-black absolute w-full h-full z-30'>
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

          <button onClick={handleClick} className='absolute'>
            click here
          </button>
        </Container>
      ) : (
        <div> </div>
      )}
    </Container>
  );
};
export default Hero;
