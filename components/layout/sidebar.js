import React, { Children } from "react"
import cn from "classnames"
import styles from "./sidebar.module.css"
import Navigation from '../navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'
import { Tweet } from "../icons"

function Sidebar({flat}) {
    return <div className = {cn(styles.sidebar)} >
      <Navigation flat = {flat}/>

      <div className={styles.tweet}>
        <ThemeButton big full = { !flat }>{
          flat ? <Tweet/> :"Tweet"
        }</ThemeButton>
      </div>

      <div className = {styles.profile}>
        <ProfileBox flat = {flat}/>
      </div>
    </div>
}

export default Sidebar