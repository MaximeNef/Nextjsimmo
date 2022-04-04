import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const Input = () => {
  //Attributs
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [ref, setRef] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [isActive, setActive] = useState(false);
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  //Functions
  function handleClick() {
    setChecked((prevChecked) => !prevChecked);
  }
  //Conditions
  useEffect(() => {
    setActive(
      email.match(emailRegex) &&
        objet !== "" &&
        ref !== "" &&
        message !== "" &&
        checked !== false
    ),
      [email, objet, ref, message, checked];
  });
  return (
    <Container className="mt-16 mx-7">
      <Container className="mt-11 border-b-2 py-2">
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          className="bg-[#3B3C3E] outline-0"
        />
      </Container>
      <Container className="mt-11 border-b-2 py-2">
        <input
          placeholder="Objet"
          type="input"
          value={objet}
          onChange={(e) => {
            setObjet(e.currentTarget.value);
          }}
          className="bg-[#3B3C3E] outline-0"
        />
      </Container>
      <Container className="mt-11 border-b-2 py-2">
        <input
          placeholder="Référence du bien"
          type="input"
          value={ref}
          onChange={(e) => {
            setRef(e.currentTarget.value);
          }}
          className="bg-[#3B3C3E] outline-0"
        />
      </Container>
      <Container className="mt-11 border-b-2">
        <textarea
          placeholder="Ecrivez votre message"
          value={message}
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
          className="bg-[#3B3C3E] outline-0 h-36"
        />
      </Container>
      <input
        type="checkbox"
        className="m-auto
        w-4 h-4
        mt-11"
        onChange={handleClick}
        checked={checked}
      />
      <Flex className="mt-2 mx-3 text-center">
        Je déclare accepter que les informations ci dessus mentionnées soient
        conservées et utilisées par www.archybald.be, aux fins de reprendre
        contact avec moi et de répondre à mes demandes.
      </Flex>
      <button
        className={
          isActive
            ? "bg-[#3B3C3E] text-white border-2 border-white rounded-md py-3 px-5 mx-36 mt-24"
            : "disabled bg-[#3B3C3E] text-white border-2 border-white rounded-md py-3 px-5 mx-36 mt-24"
        }
      >
        ENVOYER
      </button>
    </Container>
  );
};
export default Input;
