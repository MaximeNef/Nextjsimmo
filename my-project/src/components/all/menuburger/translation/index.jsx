import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useState } from "react";
import { useRouter } from "next/router";

const Translation = () => {
  const router = useRouter();
  const [langs, setLangs] = useState([
    { trad: "EN", href: "/en" },
    { trad: "FR", href: "/fr" },
    { trad: "NL", href: "/nl" },
  ]);
  function handleClick(href) {
    router.push(href);
  }
  return (
    <Flex className="text-base mx-auto">
      {langs.map((lang) => {
        return (
          <Container
            className="border-r-2 px-1"
            onClick={() => handleClick(lang.href)}
          >
            {lang.trad}
          </Container>
        );
      })}
    </Flex>
  );
};
export default Translation;
