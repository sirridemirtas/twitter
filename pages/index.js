import React from "react"
import Layout from "../components/layout/"
import Sidebar from '../components/layout/sidebar'
import Main from '../components/layout/main'
import Extra from '../components/layout/extra'
import useWindowSize from "../hooks/useWindowSize"
import CONSTS from '../constants/index'

function HomePage() {
    const size = useWindowSize();
    return <Layout>
        <Sidebar flat={size.width < CONSTS.DESKTOP_SIZE}>side barrr</Sidebar>
        <Main>{JSON.stringify(size)}</Main>
        {size.width > CONSTS.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
}

export default HomePage