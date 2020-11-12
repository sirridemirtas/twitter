import React, { Children } from "react"
import cn from "classnames"
import styles from "./index.module.css"

import Sidebar from './cols/sidebar'
import Main from './cols/main'
import Extra from './cols/extra'
import useWindowSize from "../../hooks/useWindowSize"
import CONSTS from '../../constants/index'
import PageTitle from "../common/PageTitle/page-title"
import TrendTopics from "../common/TrendTopics"
import SearchBox from "../common/SearchBox/search-box"

function Layout({ children, ...props }) {
	const size = useWindowSize();
	return <div className={cn(styles.layout)}>
		<Sidebar flat={size.width < CONSTS.DESKTOP_SIZE}></Sidebar>
		<Main>
			{props.pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
			{children}
		</Main>
		{size.width > CONSTS.TABLET_SIZE && <Extra>
			<SearchBox />
			<TrendTopics />
		</Extra>}
	</div>
}

export default Layout