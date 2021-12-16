import { useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';

const NewContactModal = ({ closeModal }) => {
	const idRef = useRef();
	const nameRef = useRef();
	const { createContact } = useContacts();

	const handleSubmit = (e) => {
		e.preventDefault();

		createContact(idRef.current.value, nameRef.current.value);
		closeModal();
	};

	return (
		<>
			<Modal.Header closeButton>Create Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-2'>
						<Form.Label>Id</Form.Label>
						<Form.Control type='text' ref={idRef} required />
					</Form.Group>
					<Form.Group className='mb-2'>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' ref={nameRef} required />
					</Form.Group>
					<Button type='submit'>Create</Button>
				</Form>
			</Modal.Body>
		</>
	);
};

export default NewContactModal;
