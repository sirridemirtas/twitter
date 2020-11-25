import React from 'react'
import styles from './footer-links.module.css'

function FooterLinks({ children }) {

	const links = [
		{
			title: "Terms of Service",
			href: "#"
		},
		{
			title: "Privacy",
			href: "#"
		},
		{
			title: "Cookie Policy",
			href: "#"
		},
		{
			title: "View project on GitHub",
			href: "https://github.com/srrdmrts/twitter",
			target: "_blank"
		}
	]
	return <div className={styles.wrapper}>
		{links.map((link, i) =>
			<a key={i} href={link.href} className={styles.link} target={link.target && link.target}>
				{link.title}
			</a>
		)} <span>© {(new Date()).getFullYear()} Twitter, Inc.</span>
	</div>
}

export default FooterLinks
