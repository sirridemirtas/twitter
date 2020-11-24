import {
	Twitter, Home, Explore,
	Notification, Messages, Bookmark,
	Lists, More, Profile,
	HomeFill, ExplorerFill,
	NotificationFill, MessagesFill,
	BookmarkFill, ListsFill, ProfileFill
} from "../components/icons"

export const MENU =
	[
		{
			key: "twitter",
			icon: <Twitter style={{ fontSize: 30 }} />,
			path: "/"
		},
		{
			key: "home",
			path: "/",
			title: "Home",
			icon: <Home />,
			iconSelected: <HomeFill />,
		},
		{
			key: "explore",
			path: "/explore",
			title: "Explore",
			icon: <Explore />,
			iconSelected: <ExplorerFill />,
		},
		{
			key: "notification",
			path: "/notification",
			title: "Notifications",
			icon: <Notification />,
			notify: (new Date()).getDate() || "",
			iconSelected: <NotificationFill />,
		},
		{
			key: "messages",
			path: "/messages",
			title: "Messages",
			icon: <Messages />,
			notify: (new Date()).getMonth() + 1 || "",
			iconSelected: <MessagesFill />,
		},
		{
			key: "bookmarks",
			path: "/bookmarks",
			title: "Bookmarks",
			icon: <Bookmark />,
			iconSelected: <BookmarkFill />,
		},
		{
			key: "lists",
			path: "/lists",
			title: "Lists",
			icon: <Lists />,
			iconSelected: <ListsFill />,
		},
		{
			key: "profile",
			path: "/profile",
			title: "Profile",
			icon: <Profile />,
			iconSelected: <ProfileFill />,
		},
		{ key: "more", path: "/more", title: "More", icon: <More /> },
	]