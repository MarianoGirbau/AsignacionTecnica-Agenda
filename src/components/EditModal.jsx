import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const EditContactModal = ({ show, handleClose, contact, onSave, provincias }) => {
  const [editedContact, setEditedContact] = useState({ ...contact });

  useEffect(() => {
    setEditedContact({ ...contact });
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedContact);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              value={editedContact.nombre}
              onChange={handleChange}
              required
              maxLength={30}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="apellido"
              value={editedContact.apellido}
              onChange={handleChange}
              required
              maxLength={30}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Provincia</Form.Label>
            <Form.Select
              name="provincia"
              value={editedContact.provincia}
              onChange={handleChange}
              required
            >
              <option value="">Seleccioná una provincia</option>
              {provincias.map((provincia, index) => (
                <option key={index} value={provincia}>
                  {provincia}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              name="telefono"
              type="number"
              value={editedContact.telefono}
              onChange={handleChange}
              required
              maxLength={10}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>



  );
};

export default EditContactModal;
