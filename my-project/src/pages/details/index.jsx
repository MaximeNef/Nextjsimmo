import Container from "../../components/shared/composers/container";
import Image from "next/image";
import Card from "../../components/card";
import Flex from "../../components/shared/composers/Flex";
import Description from "../../components/card_detail/description";
import Données from "../../components/card_detail/données";
import About from "../../components/card_detail/About";
import Surface from "../../components/card_detail/surface";
import Energy from "../../components/card_detail/energy";
import HeroImg from "../../components/card_detail/image";
import FooterDetails from "../../components/card_detail/FooterDetails";

const Details = () => {
  return (
    <Container className=''>
      <HeroImg />
      <Container className='bg-white space-y-4 m-4 mb-28'>
        <Description />
        <Données />
        <About />
        <Surface />
        <Energy />
      </Container>{" "}
      <FooterDetails />
    </Container>
  );
};
export default Details;

// un grand container
// une image qui ne bouge pas
// un container ( bg-rouge ) qui bouge
// l'image doit passer deriere le bg

//  <Container className='bg-red-600 rounded-t-[30px] absolute bottom-0 w-full h-1/4 pt-2 px-6 space-y-2'></Container>
