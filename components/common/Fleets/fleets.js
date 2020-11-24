import React from "react"
import useSWR from "swr"
import fetcher from "../../../helpers/fetcher"
import Context from "../../../store/FleetContext"
import Spinner from "../../ui/Spinner"
import Fleet from "../Fleet"
import styles from './fleets.module.css'

function Fleets() {
	const { data, error } = useSWR("/api/fleets?limit=8", fetcher)

	return <div className={styles.wrapper}>
		{!data && <Spinner /> /* feature: skeleton loader */}

		{data && data?.map(fleet =>
			<Context.Provider key={fleet.id} value={fleet}>
				<Fleet />
			</Context.Provider>
		)}
	</div>
}

export default Fleets