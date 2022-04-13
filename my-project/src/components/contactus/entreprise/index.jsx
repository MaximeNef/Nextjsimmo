import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import useTranslation from "next-translate/useTranslation";

const Entreprise = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container>
      <Flex justify="center" className="text-sm mt-20">
        {t("contact_entrep_numentreprise")} n° BE 0836 102 386
      </Flex>
      <Flex justify="center" className="text-sm mt-1">
        {t("contact_entrep_numagent")} n° 505 226
      </Flex>
      <Container className="text-xs mt-8 mx-12 text-center">
        Instance Officielle de Contrôle: IPI (Institut professionel des Agents
        immobilier) Rue de Luxembourg 16B, 1000 BRUXELLES Tél: 02/505 33 50
        www.ipi be Soumis au code de déontologie conformément à l'arrêté royal
        du 27 septembre 2006
      </Container>
      <Flex className="border-b h-1 w-20 m-auto mt-36 mb-14" />
    </Container>
  );
};
export default Entreprise;
