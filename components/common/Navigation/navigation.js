import React from "react"
import { useRouter } from 'next/router'
import cn from "classnames"
import NavButton from "../../ui/NavigationButton/index.js"
import {
	Twitter, Home, Explore,
	Notification, Messages, Bookmark,
	Lists, More, Profile,
	HomeFill, ExplorerFill,
	NotificationFill, MessagesFill,
	BookmarkFill, ListsFill, ProfileFill
} from "../../icons"
import styles from "./navigation.module.css"
import TextTitle from "../../ui/TextTitle"

function Navigation({ flat = false, selectedKey }) {
	const MENU = [
		{ key: "twitter", icon: <Twitter style={{ fontSize: 30 }} />, path: "/" },
		{ key: "home", path: "/", title: "Home", icon: <Home />, iconSelected: <HomeFill /> },
		{ key: "explore", path: "/explore", title: "Explore", icon: <Explore />, iconSelected: <ExplorerFill /> },
		{ key: "notification", path: "/notification", title: "Notifications", icon: <Notification />, notify: 22, iconSelected: <NotificationFill /> },
		{ key: "messages", path: "/messages", title: "Messages", icon: <Messages />, notify: 38, iconSelected: <MessagesFill /> },
		{ key: "bookmarks", path: "/bookmarks", title: "Bookmarks", icon: <Bookmark />, iconSelected: <BookmarkFill /> },
		{ key: "lists", path: "/lists", title: "Lists", icon: <Lists />, iconSelected: <ListsFill /> },
		{ key: "profile", path: "/profile", title: "Profile", icon: <Profile />, iconSelected: <ProfileFill /> },
		{ key: "more", path: "/more", title: "More", icon: <More /> }
	]

	const router = useRouter()
	return <nav className={styles.nav}>
		{MENU.map(menu => (
			<NavButton Selected={String(router.pathname == menu.path)}
				href={menu.path}
				notify={menu.notify}
				className={cn(styles.navButton, menu.key)}>
				{router.pathname === menu.path ? (menu.iconSelected || menu.icon) : menu.icon}
				{(menu.title && !flat) && <TextTitle>{menu.title}</TextTitle>}
			</NavButton>
		))}
	</nav>
}

export default Navigation