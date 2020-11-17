import React from "react"
import useSWR from "swr"
import fetcher from "../../../helpers/fetcher"
import Context from "../../../store/TweetContext"
import styles from './tweets.module.css'
import Tweet from "../Tweet"
import Spinner from "../../ui/Spinner"

function Tweets() {

	const { data, error } = useSWR("/api/tweets", fetcher)

	return <div className={styles.tweets}>
		{!data && <Spinner />}

		{data && data?.map(tweet => {
			return <Context.Provider key={tweet.id} value={tweet}>
				<Tweet />
			</Context.Provider>
		})}
	</div>
}

export default Tweets