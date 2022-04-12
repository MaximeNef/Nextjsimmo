import Container from "../shared/composers/container";
import Flex from "../shared/composers/Flex";
import Image from "next/image";
import FavoriteCard from "./FavoriteCard";
const Card = () => {
  return (
    <Container className=' mx-10  my-10 p-8 h-[600px]  rounded-[30px] shadow-2xl relative'>
      <Image
        src='/assets/card/villa.png'
        quality={100}
        layout={"fill"}
        className=' mx-10 bg-black h-[600px] my-10  rounded-[30px] '
      />

      <Flex type='col' justify='center'>
        <Flex
          className='relative ml-auto items-center shadow-black shadow-2xl
            
          bg-gray-600 rounded-full px-3 py-2 text-center max-h-[50px] w-[118px]'
        >
          <Flex
            type='col'
            align='center'
            justify='center'
            className='m-auto pt-1'
          >
            <Container className=' rounded-full h-3 w-3 bg-red-700 m-auto '></Container>{" "}
            <Container className='h-[10px] w-[1px] bg-white mx-auto mb-2'></Container>
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
