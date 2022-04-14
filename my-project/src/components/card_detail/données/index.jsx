import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";

const Données = () => {
  return (
    <Container className="p-5 bg-white rounded-xl shadow-2xl shadow-slate-300 ">
      <Flex className="text-base font-semibold leading-6">
        Données financières
      </Flex>
      <Flex justify="between" className="mt-4">
        <Container className="text-sm">Prix</Container>
        <Container className="text-sm font-semibold">545000€</Container>
      </Flex>
      <Flex justify="between" className="mt-3">
        <Container className="text-sm">Loyer mensuel</Container>
        <Container className="text-sm font-semibold">995€/mois</Container>
      </Flex>
      <Flex justify="between" className="mt-3">
        <Container className="text-sm">Rendement</Container>
        <Container className="text-sm font-semibold">2%</Container>
      </Flex>
      <Flex justify="between" className="mt-3">
        <Container className="text-sm">Etat</Container>
        <Container className="text-sm font-semibold">Excellent</Container>
      </Flex>
    </Container>
  );
};
export default Données;
