import { useEffect, useState } from "react";
import Container from "../components/Container";
import ContactCard from "../components/ContactCard";

const HomePage = () => {
    const [contact, setContact] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <Container>
            <h1 className="font-bold text-xl pb-4">Contactos</h1>
            {contact.map((item, index) => (
                <ContactCard key={index} contact={item} />
            ))}
        </Container>
    );
};

export default HomePage;