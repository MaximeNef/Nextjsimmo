import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const HeaderCard = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container className='m-auto w-full px-4 mt-4'>
      <Flex className=' border-2 border-slate-300 rounded-xl p-6 flex-wrap shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  bg-gradient-to-r from-slate-200 to-gray-100'>
        <Flex justify='between' className='space-x-3'>
          <Container className='border-2 border-slate-300 rounded-xl p-2 text-sm '>
            <Flex className='space-x-1'>
              <Link href='/'>{t("header_tous")}</Link>{" "}
            </Flex>
          </Container>

          <Container className='border-2 border-slate-300 rounded-xl p-2 text-sm'>
            {" "}
            <Flex className='space-x-1'>
              <Image
                src='/assets/header/house.svg'
                alt='Picture of the author'
                width={20}
                height={20}
              />
              <Link href='/maisons'>{t("header_maisons")}</Link>{" "}
            </Flex>
          </Container>

          <Container className='border-2 border-slate-300 rounded-xl p-2 text-sm'>
            {" "}
            <Flex className='space-x-1'>
              <Image
                src='/assets/header/apartement.svg'
                alt='Picture of the author'
                width={20}
                height={20}
              />{" "}
              <Link href='/appartements'>{t("header_appartements")}</Link>{" "}
            </Flex>
          </Container>
        </Flex>

        <Container className=' w-full mt-3 '>
          <input
            placeholder='search'
            class='border-2 transition duration-500 placeholder-slate-400 focus:placeholder-transparent  border-slate-300 w-full py-2 text-center  bg-transparent rounded-xl focus:outline-none '
          />
        </Container>
      </Flex>
    </Container>
  );
};
export default HeaderCard;
