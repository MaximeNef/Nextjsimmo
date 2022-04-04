import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Popup = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className="text-2xl font-light	 m-auto space-y-5 tracking-wide">
      <Flex justify="center" className="text-[42px] font-semibold mb-12">
        Archybald
      </Flex>
      {link.map((link) => {
        return (
          <Link href={link.href} key={link.page}>
            <a className="text-2xl font-light	 m-auto space-y-5 tracking-wide">
              {link.page}
            </a>
          </Link>
        );
      })}
      <Flex className="mx-auto">
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          width={40}
          height={40}
        />
      </Flex>
      <Flex justify="center" className="space-x-3">
        <Container>
          <Image
            className="px-2"
            src="/assets/favorite.svg"
            alt="Picture of the author"
            width={16}
            height={16}
          />
        </Container>
        <Container>
          <Image
            src="/assets/favorite.svg"
            alt="Picture of the author"
            width={16}
            height={16}
          />
        </Container>
      </Flex>
      <Flex className="text-base mx-auto">EN | FR | NL</Flex>
    </Container>
  );
};
export default Popup;
