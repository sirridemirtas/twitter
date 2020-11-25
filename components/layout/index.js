import React, { Children } from "react"
import Head from "next/head"
import cn from "classnames"
import styles from "./index.module.css"

import Sidebar from './cols/sidebar'
import Main from './cols/main'
import Extra from './cols/extra'
import useWindowSize from "../../hooks/useWindowSize"
import CONSTS from '../../constants/index'
import PageTitle from "../common/PageTitle"
import TrendTopics from "../common/TrendTopics"
import SearchBox from "../common/SearchBox"
import FooterLinks from "../common/FooterLinks"

function Layout({ children, ...props }) {
	const size = useWindowSize();
	return <div className={cn(styles.layout)}>
		<Head>
			<title>{props.pageTitle} / Twitter</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="google" value="notranslate" />
			<meta name="description" content="Twitter Web App Clone With ReactJS & NextJS" />
			<meta name="robots" content="index, follow" />

			<meta property="og:image" content="/preview.png" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:creator" content="@sirridemirtas" />
			<meta property="twitter:image" content="/preview.png" />
		</Head>

		<Sidebar flat={size.width < CONSTS.DESKTOP_SIZE}></Sidebar>
		<Main>
			{props.pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
			{children}
		</Main>
		{size.width > CONSTS.TABLET_SIZE && <Extra>
			<SearchBox />
			<TrendTopics />
			<FooterLinks />
		</Extra>}
	</div>
}

export default Layout