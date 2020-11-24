import React from "react"
import Layout from "../components/layout/"
import Tweets from "../components/common/Tweets"
import Fleets from "../components/common/Fleets"

function HomePage() {
	return <Layout pageTitle={"Home"}>
		<Tweets>
			{/* <Fleets /> Coming soon...*/}
		</Tweets>
	</Layout>
}

export default HomePage