import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const Aboutus = () => {
  return (
    <Flex justify="center" className="text-sm space-x-20 mb-14">
      <Container className="">
        <p>Avenue Capouillet 58A</p>
        <p>1410 Waterloo</p>
        <p>+32 (0)475 244348</p>
      </Container>
      <Container>
        <a href="/fr/mailto:info@archybald.be">info@archybald.be</a>
        <p>Mentions Légales</p>
        <p>Antartica 2019</p>
      </Container>
    </Flex>
  );
};
export default Aboutus;
