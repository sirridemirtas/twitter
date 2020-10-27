import React, { Children } from "react"
import cn from "classnames"
import styles from "./index.module.css"

function Layout({children}) {
    return <div className={cn(styles.layout)}>
       {children}
    </div>
}

export default Layout