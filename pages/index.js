import React from "react"
import useSWR from "swr"
import fetcher from "../helpers/fetcher"

import Layout from "../components/layout/"
import Tweet from "../components/common/Tweet"
import Spinner from "../components/ui/Spinner"

import TweetContext from "../store/TweetContext"

function HomePage() {

	const { data, error } = useSWR("/api/tweets", fetcher)

	return <Layout pageTitle={"Home"}>
		{!data && <Spinner />}

		{data && data?.map(tweet => {
			return <TweetContext.Provider key={tweet.id} value={tweet}>
				<Tweet />
			</TweetContext.Provider>
		})}

	</Layout>
}

export default HomePage