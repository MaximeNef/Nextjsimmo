import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
const Outside = () => {
  return (
    <Container className="p-5 bg-white rounded-xl shadow-2xl shadow-slate-300 ">
      <Flex className="text-base font-bold leading-6">Détails extérieurs</Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/terrace.svg" height={16} width={16} />
          <Container className="ml-3">Terrasse</Container>
        </Flex>
        <Container className="text-sm">1</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/garage.svg" height={16} width={16} />
          <Container className="ml-3">Garage</Container>
        </Flex>
        <Container className="text-sm">4</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/parking.svg" height={16} width={16} />
          <Container className="ml-3">Parking</Container>
        </Flex>
        <Container className="text-sm">4</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/window.svg" height={16} width={16} />
          <Container className="ml-3">Châssis de fenêtre</Container>
        </Flex>
        <Container>
          <Image src="/assets/details/check.svg" height={16} width={16} />
        </Container>
      </Flex>
    </Container>
  );
};
export default Outside;
