import Container from "../shared/composers/container";
import Image from "next/image";
import Infocard from "./infoCard";
const Card = () => {
  return (
    <Container className=' text-black mx-10 my-4 rounded-xl shadow-2xl bg-white '>
      <Container className='my-4 mx-1'>
        <Container className=' ml-4 mb-[-40px] z-10 bg-white rounded-[250px] mr-auto shadow-2xl px-3 py-1'>
          {" "}
          897.945€
        </Container>
        <Image
          src='/assets/card/villa.png'
          width={"100vw"}
          height={300}
          className='rounded-t-xl p-1'
        />
      </Container>

      <Infocard />
    </Container>
  );
};
export default Card;
