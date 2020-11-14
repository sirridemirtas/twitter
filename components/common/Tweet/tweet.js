import { formatDistanceToNowStrict } from "date-fns"
import Avatar from '../Avatar'
import styles from './tweet.module.css'
import TweetFooter from '../TweetFooter'

function Tweet({ ...props }) {

	return <article className={styles.tweet}>
		<div className={styles.avatar}>
			<Avatar src={props.src} />
		</div>
		<div className={styles.body}>
			<header className={styles.header}>
				<span className={styles.name}>{props.name} </span>
				<span>{`@`}{props.slug} {`·`} </span>
				<span>{formatDistanceToNowStrict(props.datetime)}</span>
			</header>

			<div className={styles.content}>{props.tweet}</div>

			<TweetFooter {...props} />
		</div>
	</article >
}

export default Tweet