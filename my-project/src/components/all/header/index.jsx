import Link from "next/link";
import Flex from "../../shared/composers/flex";
import Container from "../../shared/composers/container";
import Menuburger from "../menuBurger";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container className='flex justify-center'>
      <Menuburger />
      <Container>
        <Flex justify='center'>{t("title")}</Flex>
        <Flex justify='center'>
          A &nbsp;
          <p className='font-bold'>vendre</p>
          &nbsp;et à<p className='font-bold'>&nbsp;louer</p>
        </Flex>
      </Container>
      <Flex justify='center' className='my-14'>
        <input
          className='bg-white border-black border rounded-3xl pl-4'
          placeholder='Par référence'
        />
      </Flex>
      <Flex justify='center' className='space-x-2.5'>
        <Link href='/'>Tous</Link>
        <p>|</p>
        <Link href='/maisons'>Maisons</Link>
        <Link href='/appartements'>Appartements</Link>
      </Flex>
      <Flex justify='center' className='mt-8'>
        <Link href='/contact'>Nous contacter</Link>
      </Flex>
    </Container>
  );
};
export default Header;
