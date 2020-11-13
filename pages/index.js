import React from "react"
import useSWR from "swr"
import fetcher from "../helpers/fetcher"

import Layout from "../components/layout/"
import Tweet from "../components/common/Tweet"

function HomePage() {
	const { data, error } = useSWR("/api/tweets", fetcher)

	return <Layout pageTitle={"Home"}>
		{!data && "Loading..."}

		{data?.map(tweet => {
			return <Tweet key={tweet.id} {...tweet} />
		})}

	</Layout>
}

export default HomePage