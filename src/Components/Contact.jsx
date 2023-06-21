import React from "react";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <section id="contact" >
            <Container>
                <h2>Ready to scale up?</h2>
                <center><p>Experience the Incubyte advantage today. Let us help you navigate the challenges and scale up your operations smoothly and efficiently.</p></center>
                <Button size="lg" className="mx-auto d-block btn-light">
                    Contact Us
                </Button>
            </Container>
        </section>
    );
}

export default Contact;