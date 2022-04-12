import Link from "next/link";
import Flex from "../../shared/composers/flex";
import Container from "../../shared/composers/container";
import Menuburger from "../menuBurger";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container className="flex justify-center">
      <Menuburger />
      <Container>
        <Flex justify="center">{t("header_description")}</Flex>
        <Flex justify="center">
          {t("header_word1")}&nbsp;
          <p className="font-bold">{t("header_vendre")}</p>
          &nbsp;{t("header_word2")}
          <p className="font-bold"> &nbsp;{t("header_louer")}</p>
        </Flex>
      </Container>
      <Flex justify="center" className="my-14">
        <input
          className="bg-white border-black border rounded-3xl pl-4"
          placeholder={t("header_référence")}
        />
      </Flex>
      <Flex justify="center" className="space-x-2.5">
        <Link href="/">{t("header_tous")}</Link>
        <p>|</p>
        <Link href="/maisons">{t("header_maisons")}</Link>
        <Link href="/appartements">{t("header_appartements")}</Link>
      </Flex>
      <Flex justify="center" className="mt-8 text-[#ef2323]">
        <Link href="/contact">{t("header_contact")}</Link>
      </Flex>
    </Container>
  );
};
export default Header;
