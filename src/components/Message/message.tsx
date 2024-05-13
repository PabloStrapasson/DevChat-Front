import styles from './message.module.css';

interface Props{
    content: string,
	role: string
}

export default function Message({ content, role }: Props) {
	const message_style = `${role}_message`;
	return (
		<div className={`${styles.message_container} ${styles[role]}`}>
			<div className={`${styles.message} ${styles[message_style]}`}>
				{content}
			</div>

		</div>
	);
}
