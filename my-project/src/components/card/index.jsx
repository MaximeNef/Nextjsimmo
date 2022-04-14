import Container from "../shared/composers/container";
import Flex from "../shared/composers/Flex";
import Image from "next/image";
import FavoriteCard from "./FavoriteCard";
import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();
  const href = "/details";
  const handleClick = () => {
    router.push(href);
  };
  return (
    <Container
      onClick={handleClick}
      className='!text-white mx-4  my-10 p-8 h-[600px] rounded-[30px] shadow-2xl relative'
    >
      <Image
        src='/assets/card/villa.png'
        quality={100}
        layout={"fill"}
        className=' mx-10 bg-black h-[600px] my-10  rounded-[30px]'
      />

      <Flex type='col' justify='center'>
        <Flex
          className='relative ml-auto items-center shadow-black shadow-2xl
            
          bg-gray-600 rounded-full px-3 py-2 text-center max-h-[50px] w-[118px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'
        >
          <Flex type='col' align='center' justify='center' className='m-auto '>
            <Image
              src='/assets/card/loca.svg'
              alt='Picture of the author'
              width={25}
              height={25}
            />
          </Flex>
          <Flex className='font-semibold text-lg pr-4'> Maps</Flex>
        </Flex>{" "}
        <Flex className='relative '>
          <Flex className='min-w-[280px] items-end text-3xl font-extrabold leading-10'>
            {"  Black Modern House"}
          </Flex>
          <Flex className='items-end justify-end'>
            <FavoriteCard />
          </Flex>
        </Flex>
        <Container className='relative mt-5 text-slate-200 text-base'>
          {"  Broadway street, New York"}
        </Container>
      </Flex>
    </Container>
  );
};
export default Card;
