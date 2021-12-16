import { useContacts } from '../contexts/ContactsProvider';
import { ListGroup } from 'react-bootstrap';

const Contact = () => {
	const { contacts } = useContacts();

	// console.log('Contact', contacts);

	return (
		<ListGroup variant='flush'>
			{contacts?.map((contact) => {
				return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
			})}
		</ListGroup>
	);
};

export default Contact;
