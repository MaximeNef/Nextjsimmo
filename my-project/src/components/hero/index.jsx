import Container from "../shared/composers/container";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  return (
    <Container>
      {isOpen ? (
        <Container className='bg-black absolute w-full h-full z-30'>
          <button onClick={handleClick}>click here</button>
          hero page
        </Container>
      ) : (
        <div> </div>
      )}
    </Container>
  );
};
export default Hero;
