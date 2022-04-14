import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
const About = () => {
  return (
    <Container className='p-5 bg-white rounded-xl  shadow-2xl shadow-slate-300'>
      <Container className='text-base font-semibold mb-4'>
        À propos du bien
      </Container>
      <Flex justify='between'>
        <Container className=' text-sm'>Type de bien</Container>
        <Container className=' text-sm font-semibold'>Maison</Container>
      </Flex>
      <Flex justify='between mt-3'>
        <Container className=' text-sm'>Référence</Container>
        <Container className='text-sm font-semibold'>6900</Container>
      </Flex>
    </Container>
  );
};
export default About;
