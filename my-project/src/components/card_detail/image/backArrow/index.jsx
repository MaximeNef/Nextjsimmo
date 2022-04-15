import Image from "next/image";
import Container from "../../../shared/composers/container";
import Link from "next/link";
const BackArrow = ({ onClick }) => {
  return (
    <Link href='/'>
      <Container className='w-16 h-16 rounded-3xl bg-gray-300 shadow-black shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
        <Container className='w-14 h-14 bg-white rounded-[20px] m-auto items-center justify-center shadow-white shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90'>
          <Image
            src='/assets/details/ArrowBack.svg'
            alt='Picture of the author'
            width={30}
            height={30}
          />
        </Container>
      </Container>
    </Link>
  );
};
export default BackArrow;
