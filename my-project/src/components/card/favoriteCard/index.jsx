import Container from "../../shared/composers/container";
import Image from "next/image";

const FavoriteCard = () => {
  return (
    <Container className='w-16 h-16 rounded-full shadow-black shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
      <Container className='w-14 h-14 bg-gray-600 rounded-full m-auto items-center justify-center shadow-black shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
        <Image
          src='/assets/card/heart.svg'
          alt='Picture of the author'
          width={30}
          height={30}
        />
      </Container>
    </Container>
  );
};
export default FavoriteCard;
