import Link from "next/link";
import Container from "../../../shared/composers/container";

const BtnContact = () => {
  return (
    <Link href='/contact'>
      <Container className=' text-lg font-semibold bg-black text-white p-4 rounded-2xl'>
        reserve now
      </Container>
    </Link>
  );
};
export default BtnContact;
