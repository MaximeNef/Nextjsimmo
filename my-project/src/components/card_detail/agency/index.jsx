import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
import Image from "next/image";

const Agency = () => {
  return (
    <Container className="p-5 bg-white rounded-xl  shadow-2xl shadow-slate-300">
      <Container className="text-base font-semibold mb-4">
        À propos de l'agence
      </Container>
      <Container>C21 Everone</Container>
      <Container>n° de licence:</Container>
      <Container>n° IPI</Container>
      <Flex>
        <Image src="/assets/contact/location.svg" height={16} width={16} />

        <Container>Avenue Henri Conscience 74 1040</Container>
      </Flex>
      <Flex>
        <Image src="/assets/contact/envelope.svg" height={16} width={16} />

        <Container>maxime@nightborn.be</Container>
      </Flex>
      <Flex align="center">
        <Image src="/assets/contact/phone.svg" height={16} width={16} />
        <Container>0494903665</Container>
      </Flex>
    </Container>
  );
};
export default Agency;
