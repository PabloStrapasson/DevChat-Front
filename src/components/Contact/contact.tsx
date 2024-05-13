import styles from './contact.module.css';

interface Props{
  name: string
}

export default function Contact({ name }: Props) {
	return (
		<div className={styles.contact_content}>
			<p>{name}</p>
		</div>
	);
}
