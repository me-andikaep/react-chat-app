import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

const Conversations = () => {
	const { conversations, selectConversationIndex } = useConversations();

	console.log('conversations', conversations);

	return (
		<ListGroup variant='flush'>
			{conversations?.map((conversation, index) => {
				return (
					<ListGroup.Item
						key={index}
						action
						onClick={() => selectConversationIndex(index)}
						active={conversation.selected}
					>
						{conversation.recipients
							.map((recipient) => recipient.name)
							.join(', ')}
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
};

export default Conversations;
