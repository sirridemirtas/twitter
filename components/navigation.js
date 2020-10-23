import React from "react"
import NavButton from "./nav-button.js"
import { 
	Twitter, Home, Explore, 
	Notification, Messages, Bookmark, 
	Lists, More, Profile 
} from "../components/icons"
import styles from "./navigation.module.css"
import TitleBold from "./title-bold"

function Navigation({selectedKey}) {
   
	return <nav className={styles.nav}>
		<NavButton>
			<Twitter/>
		</NavButton>

		<NavButton Selected = {String(selectedKey == "home")}>
			<Home/>
			<TitleBold>Home</TitleBold>
		</NavButton>

		<NavButton Selected = {selectedKey === "explore"}>
			<Explore/>
			<TitleBold>Explore</TitleBold>
		</NavButton>

		<NavButton Selected = {selectedKey === "notification"} notify="13">
			<Notification/>
			<TitleBold>Notification</TitleBold>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "messages"} notify="28">
			<Messages/>
			<TitleBold>Messages</TitleBold>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "bookmarks"}>
			<Bookmark/>
			<TitleBold>Bookmarks</TitleBold>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "lists"}>
			<Lists/>
			<TitleBold>Lists</TitleBold>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "profile"}>
			<Profile/>
			<TitleBold>Profile</TitleBold>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "more"}>
			<More/>
			<TitleBold>More</TitleBold>
		</NavButton>
	</nav>
}

export default Navigation