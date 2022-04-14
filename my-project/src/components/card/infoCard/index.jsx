import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
const Infocard = () => {
  return (
    <Container className='mx-10   '>
      <Container className='shadow-xl mr-auto rounded-xl text-xl font-bold tracking-wide'>
        BRAINE-L'ALLEUD
      </Container>
      <Flex justify='between'>
        <Container className='shadow-xl mr-auto rounded-xl'>price</Container>
        <Container className='shadow-xl ml-auto rounded-xl'>peb</Container>
      </Flex>
    </Container>
  );
};
export default Infocard;
