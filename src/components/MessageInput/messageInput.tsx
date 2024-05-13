import styles from './messageInput.module.css';

export default function MessageInput() {
	return (
		<div className={styles.input_main}>
			<input type="text" id='message_input' placeholder='Digite uma mensagem' className={styles.message_input}/>
			<button className={styles.message_button}>Send</button>
		</div>
	);
}
