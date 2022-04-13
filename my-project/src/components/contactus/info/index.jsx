import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Info = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container>
      <Container className="text-2xl m-auto">
        {t("contact_info_title")}
        <Flex className="border-b h-1 w-20 m-auto mt-4" />
      </Container>
      <Container className="mt-28">
        <Flex justify="center">
          <Image src="/assets/contact/phone.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          <a href="/fr/tel:+3227314999">00 32 (0)2 731 49 99</a>
        </Flex>
        <Flex justify="center" className="text-sm">
          <a href="/fr/tel:+3275244348">00 32 (0)475 24 43 48</a>
        </Flex>
        <Flex justify="center" className="text-sm mt-5">
          <Image src="/assets/contact/envelope.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          <a href="/fr/mailto:info@archybald.be">info@archybald.be</a>
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
          <a href="https://www.google.be/maps/place/Av.+Capouillet+58,+1410+Waterloo/@50.7126918,4.3784138,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3ce2f35de54e3:0xd9d594b999079fb3!8m2!3d50.7126884!4d4.3806025">
            {t("contact_info_map")}
          </a>
        </Flex>
        <Flex justify="center" className="text-sm mt-5">
          <Image src="/assets/contact/facebook.svg" height={16} width={16} />
        </Flex>
        <Flex justify="center" className="text-sm">
          <a href="https://www.facebook.com">{t("contact_info_facebook")}</a>
        </Flex>
      </Container>
    </Container>
  );
};
export default Info;
