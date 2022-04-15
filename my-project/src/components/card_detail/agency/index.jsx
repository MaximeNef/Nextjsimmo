import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
import Image from "next/image";

const Agency = () => {
  return (
    <Container className="p-5 bg-white rounded-xl  shadow-2xl shadow-slate-300">
      <Container className="text-base font-semibold mb-4">
        À propos de l'agence
      </Container>
      <Container className="text-base font-semibold">C21 Everone</Container>
      <Container className="text-[10px] text-gray-400">
        n° de licence:
      </Container>
      <Container className="text-[10px] text-gray-400">n° IPI</Container>
      <Flex className="mb-4 mt-3">
        <Image src="/assets/contact/location.svg" height={16} width={16} />

        <Container className="text-sm font-semibold ml-3">
          Avenue Henri Conscience 74 1040
        </Container>
      </Flex>
      <Flex className="mb-4">
        <Image src="/assets/contact/envelope.svg" height={16} width={16} />

        <Container className="text-sm font-semibold ml-3">
          maxime@nightborn.be
        </Container>
      </Flex>
      <Flex className="mb-4">
        <Image src="/assets/contact/phone.svg" height={16} width={16} />
        <Container className="text-sm font-semibold ml-3">0494903665</Container>
      </Flex>
    </Container>
  );
};
export default Agency;
