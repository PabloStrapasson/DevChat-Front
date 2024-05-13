import styles from './chat.module.css';
import Message from '../Message/message';
import { TypeMessage } from '@/types/message';

interface Props{
	messages: TypeMessage[]
}

export default function Chat({ messages }: Props) {
	return (
		<div className={styles.chat_container}>
			<div className={styles.chat_content}>
				{messages.map((mes) => (
					<Message content={mes.content} role={mes.role} key={mes.id}/>
				))}
			</div>
		</div>
	);
}
