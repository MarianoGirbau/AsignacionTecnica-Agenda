import { Table, Button } from "react-bootstrap";

const ContactTable = ({ contacts, onDelete, onEdit }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Provincia</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center">
              No hay contactos cargados.
            </td>
          </tr>
        ) : (
          contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.nombre}</td>
              <td>{contact.apellido}</td>
              <td>{contact.provincia}</td>
              <td>{contact.telefono}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(index)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(index)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default ContactTable;
