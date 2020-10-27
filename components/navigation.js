import React from "react"
import NavButton from "./nav-button.js"
import { 
	Twitter, Home, Explore, 
	Notification, Messages, Bookmark, 
	Lists, More, Profile 
} from "../components/icons"
import styles from "./navigation.module.css"
import TextTitle from "./text-title"

function Navigation({flat = false, selectedKey}) {

	const MENU = [
		{icon: <Twitter/>},
		{key: "home", title: "Home", icon: <Home/>},
		{key: "explore", title: "Explore", icon: <Explore/>},
		{key: "notification", title: "Notification", icon: <Notification/>, notify: 22},
		{key: "messages", title: "Messages", icon: <Messages/>, notify: 38},
		{key: "bookrmarks", title: "Bookmarks", icon: <Bookmark/>},
		{key: "lists", title: "Lists", icon: <Lists/>},
		{key: "profile", title: "Profile", icon: <Profile/>},
		{key: "more", title: "More", icon: <More/>}
	]

	
	return <nav className={styles.nav}>
		{MENU.map(menu => (
			<NavButton Selected = {String(selectedKey == menu.key)}
			notify = {menu.notify && menu.notify} >
				{menu.icon}
				{(menu.title && !flat) && <TextTitle>{menu.title}</TextTitle>}
			</NavButton>
		))}
	</nav>
}

export default Navigation