import Container from "../shared/composers/container";
import Image from "next/image";
import Infocard from "./infoCard";
const Card = () => {
  return (
    <Container className="bg-white text-black mx-6 my-4 min-h-[400px] rounded-xl shadow-2xl">
      <Image
        src="/assets/card/villa.png"
        width={"100vw"}
        height={300}
        className="rounded-t-xl"
      />
      <Infocard />
    </Container>
  );
};
export default Card;
