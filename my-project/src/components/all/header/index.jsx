import Link from "next/link";
import Flex from "../../shared/composers/flex";
import Container from "../../shared/composers/container";
import Menuburger from "../menuBurger";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import HeaderCard from "./HeaderCard";
const Header = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container className='flex justify-center'>
      <Menuburger />
      <Container>
        <Flex justify='center'>{t("header_description")}</Flex>
        <Flex justify='center'>
          {t("header_word1")}&nbsp;
          <p className='font-bold'>{t("header_vendre")}</p>
          &nbsp;{t("header_word2")}
          <p className='font-bold'> &nbsp;{t("header_louer")}</p>
        </Flex>
      </Container>
      <HeaderCard />
    </Container>
  );
};
export default Header;
