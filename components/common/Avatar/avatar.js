import React from "react"
import cn from "classnames"
import randomGradient from "../../../helpers/randomGradient"
import styles from "./avatar.module.css"

function Avatar({
	src = null,
	alt, size = 47
}) {
	let img = [];

	if (!src) {
		img = <div className={styles.fakePhoto}
			style={{ background: randomGradient() }}>
		</div >;
	} else {
		img = <img src={src} alt={alt} className={styles.img} />
	}

	return <div className={cn(styles.avatar)}
		style={{ width: size, height: size }}>
		{img}
	</div>
}

export default Avatar