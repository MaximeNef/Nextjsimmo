import Container from "../../shared/composers/container";
import Image from "next/image";
import Flex from "../../shared/composers/Flex";

const FavoriteCard = () => {
  return (
    <Container className='w-16 h-16 rounded-full shadow-black shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
      <Flex justify='center' align='center' className=''>
        <Image
          src='/assets/card/heart.svg'
          alt='Picture of the author'
          width={30}
          height={30}
        />
      </Flex>
    </Container>
  );
};
export default FavoriteCard;
