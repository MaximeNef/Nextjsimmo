import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import Image from "next/image";

const Info = () => {
  return (
    <Container>
      <Container className="text-2xl m-auto">
        NOUS CONTACTER
        <Flex className="border-b h-1 w-20 m-auto mt-4" />
      </Container>
      <Container className="mt-28">
        <Flex justify="center">
          <Image src="/assets/contact/phone.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          00 32 (0)2 731 49 99
        </Flex>
        <Flex justify="center" className="text-sm">
          00 32 (0)475 24 43 48
        </Flex>
        <Flex justify="center" className="text-sm mt-5">
          <Image src="/assets/contact/envelope.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          info@archybald.be
        </Flex>
        <Flex justify="center" className="text-sm mt-5">
          <Image src="/assets/contact/location.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          Avenue Capouillet, 58A
        </Flex>
        <Flex justify="center" className="text-sm">
          1410 Waterloo
        </Flex>
        <Flex justify="center" className="text-sm mt-5">
          [VOIR CARTE]
        </Flex>
        <Flex justify="center" className="text-sm mt-5">
          <Image src="/assets/contact/facebook.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          Notre page facebook
        </Flex>
      </Container>
    </Container>
  );
};
export default Info;
