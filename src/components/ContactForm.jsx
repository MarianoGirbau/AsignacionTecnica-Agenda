import { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Swal from "sweetalert2";

function ContactForm({ onAddContact }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [provincia, setProvincia] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !provincia || !telefono) {
            Swal.fire({
                icon: "error",
                title: "Completa todos los campos!",
            });
            return;
        }

        const nuevoContacto = {
            id: Date.now(), //ID basado en timestamp
            nombre,
            apellido,
            provincia,
            telefono,
        };

        onAddContact(nuevoContacto);

        Swal.fire({
            icon: "success",
            title: "Contacto agregado!",
        });

        //Limpiar campos
        setNombre("");
        setApellido("");
        setProvincia("");
        setTelefono("");
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Agregar Nuevo Contacto</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formApellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="formProvincia">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={provincia}
                                    onChange={(e) => setProvincia(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formTelefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Agregar Contacto
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ContactForm;