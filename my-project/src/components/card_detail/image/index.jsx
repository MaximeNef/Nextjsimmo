import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
import Image from "next/image";
import BackArrow from "./backArrow";

const HeroImg = () => {
  return (
    <Container className='!text-white mx-4 my-4 p-8 h-[450px] rounded-[30px] shadow-2xl relative'>
      <Image
        src='/assets/card/villa.png'
        quality={100}
        layout={"fill"}
        className=' mx-10 bg-black max-h-[300px] my-10  rounded-[30px]'
      />

      <Flex type='col' justify='center'>
        <BackArrow />

        <Flex className='relative '>
          <Flex className='min-w-[280px] items-end text-3xl font-extrabold leading-10'>
            {"  Black Modern House"}
          </Flex>
          <Flex className='items-end justify-end'></Flex>
        </Flex>
        <Container className='relative mt-5 text-slate-200 text-base'>
          {"  Broadway street, New York"}
        </Container>
      </Flex>
    </Container>
  );
};
export default HeroImg;
