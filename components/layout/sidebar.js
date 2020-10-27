import React, { Children } from "react"
import cn from "classnames"
import styles from "./sidebar.module.css"
import Navigation from '../navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'
import { Tweet } from "../icons"

function Sidebar({flat}) {
    return <div className={cn(styles.sidebar)}>
      <Navigation flat = {flat}/>
      <ThemeButton big full={!flat}>{flat ?<Tweet/> :"Tweet"}</ThemeButton>
      <ProfileBox/>
    </div>
}

export default Sidebar