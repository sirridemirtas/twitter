import React from "react"
import NavButton from "./nav-button.js"
import { 
	Twitter, Home, Explore, 
	Notification, Messages, Bookmark, 
	Lists, More, Profile 
} from "../components/icons"
import styles from "./navigation.module.css"
import TextTitle from "./text-title"

function Navigation({selectedKey}) {
   
	return <nav className={styles.nav}>
		<NavButton>
			<Twitter/>
		</NavButton>

		<NavButton Selected = {String(selectedKey == "home")}>
			<Home/>
			<TextTitle>Home</TextTitle>
		</NavButton>

		<NavButton Selected = {selectedKey === "explore"}>
			<Explore/>
			<TextTitle>Explore</TextTitle>
		</NavButton>

		<NavButton Selected = {selectedKey === "notification"} notify="13">
			<Notification/>
			<TextTitle>Notification</TextTitle>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "messages"} notify="28">
			<Messages/>
			<TextTitle>Messages</TextTitle>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "bookmarks"}>
			<Bookmark/>
			<TextTitle>Bookmarks</TextTitle>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "lists"}>
			<Lists/>
			<TextTitle>Lists</TextTitle>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "profile"}>
			<Profile/>
			<TextTitle>Profile</TextTitle>
		</NavButton>
		
		<NavButton Selected = {selectedKey === "more"}>
			<More/>
			<TextTitle>More</TextTitle>
		</NavButton>
	</nav>
}

export default Navigation