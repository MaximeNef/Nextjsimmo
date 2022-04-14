import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";
const Surface = () => {
  return (
    <Container className="p-5 bg-white rounded-xl shadow-2xl shadow-slate-300 ">
      <Flex className="text-base font-bold leading-6">Surface</Flex>
      <Flex justify="between" className="mt-4">
        <Container className="text-sm">Surface terrain</Container>
        <Container className="text-sm font-bold">1334 m²</Container>
      </Flex>
      <Flex justify="between" className="mt-3">
        <Container className="text-sm">Surface habitable</Container>
        <Container className="text-sm font-bold">291 m²</Container>
      </Flex>
      <Flex justify="between" className="mt-3">
        <Container className="text-sm">Surface jardin</Container>
        <Container className="text-sm font-bold">900 m²</Container>
      </Flex>
      <Flex justify="between" className="mt-3">
        <Container className="text-sm">Surface terrasse</Container>
        <Container className="text-sm font-bold">900 m²</Container>
      </Flex>
    </Container>
  );
};
export default Surface;
