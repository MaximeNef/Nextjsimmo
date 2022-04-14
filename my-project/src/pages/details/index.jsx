import Container from "../../components/shared/composers/container";
import Image from "next/image";
import Card from "../../components/card";
import Flex from "../../components/shared/composers/Flex";
import Description from "../../components/card_detail/description";
import Données from "../../components/card_detail/données";

const Details = () => {
  return (
    <Container className="">
      <Container className="w-full  fixed ">
        <Card />
      </Container>

      <Container className="bg-red-600 rounded-t-[30px] absolute bottom-0 w-full h-1/4 pt-2 px-6 ">
        <Description />
        <Données />
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
        <Container>DETAILS</Container>
      </Container>
    </Container>
  );
};
export default Details;

// un grand container
// une image qui ne bouge pas
// un container ( bg-rouge ) qui bouge
// l'image doit passer deriere le bg
