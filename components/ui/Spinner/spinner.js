import React from "react"
import styles from "./spinner.module.css"

function Spinner({ children, className, ...props }) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 32 32"
			className={styles.spinner}>
			<circle
				cx="16"
				cy="16"
				r="14"
				fill="none"
				stroke="#1DA1F2"
				strokeWidth="4"
				opacity="0.2"
			></circle>
			<circle
				cx="16"
				cy="16"
				r="14"
				fill="none"
				stroke="#1DA1F2"
				strokeDasharray="80"
				strokeDashoffset="60"
				strokeWidth="4"
			></circle>
		</svg>
	);
}

export default Spinner