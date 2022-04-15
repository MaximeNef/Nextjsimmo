import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
const Inside = () => {
  return (
    <Container className="p-5 bg-white rounded-xl shadow-2xl shadow-slate-300 ">
      <Flex className="text-base font-bold leading-6">Détails intérieurs</Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/bed.svg" height={16} width={16} />
          <Container className="ml-3">Chambres</Container>
        </Flex>
        <Container className="text-sm">4</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/shower.svg" height={16} width={16} />
          <Container className="ml-3">Salle de bain</Container>
        </Flex>
        <Container className="text-sm">1</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/wc.svg" height={16} width={16} />
          <Container className="ml-3">WC</Container>
        </Flex>
        <Container className="text-sm">1</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/desk.svg" height={16} width={16} />
          <Container className="ml-3">Bureau</Container>
        </Flex>
        <Container className="text-sm">4</Container>
      </Flex>
      <Flex justify="between" className="mt-4">
        <Flex className="text-sm">
          <Image src="/assets/details/storage.svg" height={16} width={16} />
          <Container className="ml-3">Cave</Container>
        </Flex>
        <Container>
          <Image src="/assets/details/check.svg" height={16} width={16} />
        </Container>
      </Flex>
    </Container>
  );
};
export default Inside;
