import React from 'react'
import { Offline as SvgOffline } from '../../icons'
import styles from './unavailable.module.css'

function Unavailable({ children }) {
	return <div className={styles.wrapper}>
		<SvgOffline className={styles.icon} />
		<p className={styles.text}>This page is unavailable now.</p>
	</div>
}

export default Unavailable
