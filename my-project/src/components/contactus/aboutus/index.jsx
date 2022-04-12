import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import useTranslation from "next-translate/useTranslation";

const Aboutus = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Flex justify="center" className="text-sm space-x-20 mb-14">
      <Container className="">
        <p>Avenue Capouillet 58A</p>
        <p>1410 Waterloo</p>
        <p>+32 (0)475 244348</p>
      </Container>
      <Container>
        <a href="/fr/mailto:info@archybald.be">info@archybald.be</a>
        <p>{t("contact_aboutus_mentions")}</p>
        <p>Antartica 2019</p>
      </Container>
    </Flex>
  );
};
export default Aboutus;
