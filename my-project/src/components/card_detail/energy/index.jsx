import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";

const Energy = () => {
  return (
    <Container className='p-5 bg-white rounded-xl  shadow-2xl shadow-slate-300'>
      <Container className='text-base font-semibold mb-4'>Énérgie</Container>
      <Flex justify='between'>
        <Container className=' text-sm'>-1</Container>
        <Container className=' text-sm font-semibold'>0kWh/m²</Container>
      </Flex>
      <Flex justify='between' className='mt-3'>
        <Container className=' text-sm'>PEB</Container>
        <Container className=' text-sm font-semibold'>Unknown</Container>
      </Flex>
      <Flex justify='between' className='mt-3'>
        <Container className=' text-sm'>Numéro de certificat</Container>
        <Container className=' text-sm font-semibold'>0</Container>
      </Flex>
      <Flex justify='between' className='mt-3'>
        <Container className=' text-sm'>Emission de CO2</Container>
        <Container className=' text-sm font-semibold'>0 kg CO₂/m²</Container>
      </Flex>
    </Container>
  );
};
export default Energy;
