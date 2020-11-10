import React, { Children } from "react"
import cn from "classnames"
import styles from "./index.module.css"

import Sidebar from './cols/sidebar'
import Main from './cols/main'
import Extra from './cols/extra'
import useWindowSize from "../../hooks/useWindowSize"
import CONSTS from '../../constants/index'


function Layout({ children }) {
	const size = useWindowSize();
	return <div className={cn(styles.layout)}>
		<Sidebar flat={size.width < CONSTS.DESKTOP_SIZE}></Sidebar>
		<Main>{children}</Main>
		{size.width > CONSTS.TABLET_SIZE && <Extra>extra</Extra>}
	</div>
}

export default Layout