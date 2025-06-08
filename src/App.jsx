import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import ContactForm from './components/ContactForm.jsx';
import ContactTable from "./components/ContactTable.jsx";
import EditContactModal from "./components/EditModal";
import Swal from 'sweetalert2';

function App() {
  const [contacts, setContacts] = useState(() => {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : [];
});
  const [editingIndex, setEditingIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contactToEdit, setContactToEdit] = useState({});


  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contacto) => {
    setContacts([...contacts, contacto]);
  };

  const handleDeleteContact = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el contacto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const newContacts = contacts.filter((contacto, i) => i !== index);
        setContacts(newContacts);

        Swal.fire('¡Eliminado!', 'El contacto ha sido eliminado.', 'success');
      }
    });
  };

  const handleEditContact = (index) => {
    setEditingIndex(index);
    setContactToEdit(contacts[index]);
    setShowModal(true);
  };

  const handleSaveEditedContact = (updatedContact) => {
  const updatedContacts = [...contacts];
  updatedContacts[editingIndex] = updatedContact;
  setContacts(updatedContacts);
  setShowModal(false);

  Swal.fire({
    icon: 'success',
    title: 'Contacto actualizado',
    text: 'Los datos fueron modificados correctamente.',
    timer: 2000,
    showConfirmButton: false,
  });
};


  return (
    <div className="App">
      <Container className="mt-4">
        <h1 className="mb-4">Agenda de Contactos</h1>
        <ContactForm onAddContact={handleAddContact} />
      </Container>
      <ContactTable
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />
      <EditContactModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        contact={contactToEdit}
        onSave={handleSaveEditedContact}
      />
    </div>
  );
}

export default App;
