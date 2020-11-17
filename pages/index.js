import React from "react"
import Layout from "../components/layout/"
import Tweets from "../components/common/Tweets"

function HomePage() {
	return <Layout pageTitle={"Home"}>
		<Tweets />
	</Layout>
}

export default HomePage