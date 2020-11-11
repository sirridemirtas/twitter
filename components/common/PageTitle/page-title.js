import React from 'react'
import TextTitle from '../../ui/TextTitle'
import styles from './page-title.module.css'

function PageTitle({ children }) {
	return <div className={styles.pageTitle}>
		<TextTitle>{children}</TextTitle>
	</div>
}

export default PageTitle