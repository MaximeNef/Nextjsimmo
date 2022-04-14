import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import useTranslation from "next-translate/useTranslation";

const Input = () => {
  //Attributs
  const { t, lang } = useTranslation("common");
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
          className="bg-white outline-0"
        />
      </Container>
      <Container className="mt-11 border-b-2 py-2">
        <input
          placeholder={t("contact_input_object")}
          type="input"
          value={objet}
          onChange={(e) => {
            setObjet(e.currentTarget.value);
          }}
          className="bg-white outline-0"
        />
      </Container>
      <Container className="mt-11 border-b-2 py-2">
        <input
          placeholder={t("contact_input_refbien")}
          type="input"
          value={ref}
          onChange={(e) => {
            setRef(e.currentTarget.value);
          }}
          className="bg-white outline-0"
        />
      </Container>
      <Container className="mt-11 border-b-2">
        <textarea
          placeholder={t("contact_input_message")}
          value={message}
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
          className="bg-white outline-0 h-36"
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
        {t("contact_input_declaration")}
      </Flex>
      <button
        className={
          isActive
            ? "bg-white text-black border-2 border-black rounded-md py-3 px-5 mx-36 mt-24"
            : "disabled bg-white text-black border-2 border-black rounded-md py-3 px-5 mx-36 mt-24"
        }
      >
        {t("contact_input_bouton")}
      </button>
    </Container>
  );
};
export default Input;
