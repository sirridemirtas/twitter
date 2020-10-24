import React from "react"
import cn from "classnames"
import styles from "./avatar.module.css"

function Avatar({
    src= "https://vercel.com/api/www/avatar/55ed9f33b2933e09f3aabb57b21ddf289a49d5ea?s=204",
    alt}) {
    return <div className={cn(styles.avatar)}>
        <img src={src} alt={alt} />
    </div>
}

export default Avatar