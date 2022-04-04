import Header from "../../components/all/header";
import Aboutus from "../../components/contactus/aboutus";
import Entreprise from "../../components/contactus/entreprise";
import Info from "../../components/contactus/info";
import Input from "../../components/contactus/input";

const Contact = () => {
  return (
    <div className="bg-[#3B3C3E] h-full flex justify-center ">
      <div>
        <Header />
        <Info />
        <Input />
        <Entreprise />
        <Aboutus />
      </div>
    </div>
  );
};
export default Contact;
