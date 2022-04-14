import { useState } from "react/cjs/react.development";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/Flex";

const Description = () => {
  const [state, setState] = useState(true);
  function handleClick() {
    setState((prevstate) => !prevstate);
    console.log(state);
  }
  return (
    <Container className='p-5 bg-white rounded-xl shadow-2xl shadow-slate-300'>
      <Container className='text-base font-semibold leading-6 mb-4'>
        Description
      </Container>

      <Container
        className={
          state ? "max-h-[66px] overflow-hidden" : "max-h-full overflow-auto"
        }
      >
        In het rustige Sint-Denijs werd deze alleenstaande woning gebouwd in
        1993 door de huidige bewoners. Jarenlang hebben ze deze stralende villa
        met liefde bewoond en onderhouden en willen dit ook zo verder zetten. De
        woning wordt verkocht via het Happy Lifetime systeem waarbij de eigenaar
        verder willen wonen als huurder. Op een mooi perceel pakt deze woning
        uit met heel veel woonplezier. De warme inkom zorgt voor een hartelijke
        welkom, er is een apart toilet en een verbinding naar leefruimte, keuken
        en bureau. Zalig zonnige leefruimte met zit- en eethoek in extra large
        afmetingen. De woonkeuken is goed voorzien en kijkt graag uit op de
        groen ingevulde tuin. Er zijn 3 mooie slaapkamers en een nette badkamer.
        Met grote garage en praktische tuinberging. Ook de mooi volgroeide tuin
        wordt dagelijks met liefde onderhouden. Top investering met 100%
        garantie op onderhoud en betaling.
      </Container>
      <Flex justify='end' className=''>
        <Container
          onClick={handleClick}
          className='text-[#3F8CFF] font-semibold mt-2'
        >
          {state ? "Lire plus" : "Lire moins"}
        </Container>
      </Flex>
    </Container>
  );
};
export default Description;
