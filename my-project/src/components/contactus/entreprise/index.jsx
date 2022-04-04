import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const Entreprise = () => {
  return (
    <Container>
      <Flex justify="center" className="text-sm mt-20">
        Entreprise n° BE 0836 102 386
      </Flex>
      <Flex justify="center" className="text-sm mt-1">
        Agent immobilier agréé n° 505 226
      </Flex>
      <Container className="text-xs mt-8 mx-12">
        <p>
          Instance Officielle de Contrôle: IPI (Institut professionel des Agents
          immobilier)
        </p>
        <p>
          Rue de Luxembourg 16B, 1000 BRUXELLES Tél: 02/505 33 50 www.ipi be
        </p>
        <p>
          Soumis au code de déontologie conformément à l'arrêté royal du 27
          septembre 2006
        </p>
      </Container>
      <Flex className="border-b h-1 w-20 m-auto mt-36 mb-14" />
    </Container>
  );
};
export default Entreprise;
