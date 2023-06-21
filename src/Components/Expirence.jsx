import React from "react";
import { Container, Card } from "react-bootstrap";

const Expirence = () => {
    return (
        <section id="experience">
            <Container>
                <center><h2>Our Experience</h2></center>
                <div className="card-deck">
                    <Card className='cardes' style={{ border: '5px solid white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Card.Body>
                            <center><Card.Title>Hiring</Card.Title></center>
                            <center><Card.Text>Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals.</Card.Text></center>
                        </Card.Body>
                    </Card>
                    <Card className='cardes' style={{ border: '5px solid white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Card.Body>
                            <center><Card.Title>Human Resources Management</Card.Title></center>
                            <center><Card.Text>We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup.</Card.Text></center>
                        </Card.Body>
                    </Card>
                    <Card className='cardes' style={{ border: '5px solid white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Card.Body>
                            <center><Card.Title>Taxation</Card.Title></center>
                            <center><Card.Text>Our team navigates through the complexities of the tax system, ensuring compliance while optimizing financial efficiency.</Card.Text></center>
                        </Card.Body>
                    </Card>
                    <Card className='cardes' style={{ border: '5px solid white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Card.Body>
                            <center><Card.Title>Regular Guidance</Card.Title></center>
                            <center>  <Card.Text>We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup's operations stay within legal boundaries.</Card.Text></center>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </section>
    );
}

export default Expirence;