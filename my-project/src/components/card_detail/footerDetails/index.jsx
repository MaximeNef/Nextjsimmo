import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
import BtnContact from "./BtnContact";

const FooterDetails = () => {
  return (
    <Flex
      justify='between'
      className='fixed bottom-0 bg-white w-full py-4 px-5 rounded-t-2xl'
    >
      <Container>
        <Container className='text-gray-400 text-sm'>Price</Container>
        <Container className='font-semibold text-xl'>852 000 €</Container>
      </Container>

      <Container>
        <BtnContact />
      </Container>
    </Flex>
  );
};
export default FooterDetails;
