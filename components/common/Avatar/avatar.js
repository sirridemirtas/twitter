import React from "react"
import cn from "classnames"
import randomGradient from "../../../helpers/randomGradient"
import styles from "./avatar.module.css"

function Avatar({
	src = "https://vercel.com/api/www/avatar/55ed9f33b2933e09f3aabb57b21ddf289a49d5ea?s=204",
	alt, size = 47,
	randomPhoto = false
}) {
	let img = [];

	if (randomPhoto) {
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