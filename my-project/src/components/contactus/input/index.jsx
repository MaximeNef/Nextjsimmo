import { useState } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const Input =() => {
    const [email, setEmail] = useState ("")
    const [objet,setObjet] = useState ("")
    const [ref, setRef] = useState ("")
    const [message, setMessage] = useState ("")
    return (
        <Container className ="mt-16">
            <Container className="mt-10 border-b-2">
                <input placeholder="E-mail" type="input" value={email} onChange={e=>{setEmail(e.currentTarget.value)}} className="bg-[#3B3C3E]"/>
            </Container>
            <Container className="mt-10 border-b-2">
                <input placeholder="Objet" type="input" value={objet} onChange={e=>{setObjet(e.currentTarget.value)}} className="bg-[#3B3C3E]"/>
            </Container>
            <Container className="mt-10 border-b-2">
                <input placeholder="Référence du bien" type="input" value={ref} onChange={e=>{setRef(e.currentTarget.value)}} className="bg-[#3B3C3E]"/>
            </Container>
            <Container className="mt-10 border-b-2">
                <input placeholder="Ecrivez votre message" type="input" value={message} onChange={e=>{setMessage(e.currentTarget.value)}} className="bg-[#3B3C3E]"/>
            </Container>
            <Flex>
                Je déclare accepter que les informations ci dessus 
                mentionnées soient conservées et utilisées par 
                www.archybald.be, aux fins de reprendre contact avec
                moi et de répondre à mes demandes.
            </Flex>
            <Flex>
                ENVOYER
            </Flex>
        </Container>
    );
};
export default Input;