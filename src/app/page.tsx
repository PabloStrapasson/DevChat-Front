import styles from './page.module.css';
import Contact from '@/components/Contact/contact';
import MessageInput from '@/components/MessageInput/messageInput';
import Chat from '@/components/Chat/chat';

const contatos = ['Pablo', 'Renata', 'Sabrina', 'Guilherme', 'Alan'];
const mensagens = [
	{
		id: '1',
		content: 'primeira mensagem do user',
		role: 'user'
	},
	{
		id: '2',
		content: 'segunda mensagem do user',
		role: 'user'
	},
	{
		id: '3',
		content: 'primeira mensagem do contato',
		role: 'contact'
	},
	{
		id: '4',
		content: 'segunda mensagem do contato',
		role: 'contact'
	},
	{
		id: '5',
		content: 'terceira mensagem do user',
		role: 'user'
	}
];

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.contacts}>
				{contatos.map((contact) => (
					<Contact name={contact} key={contact}/>
				))}
			</div>

			<div className={styles.chat}>
				<Chat messages={mensagens}/>
				<MessageInput/>
			</div>
		</main>
	);
}
