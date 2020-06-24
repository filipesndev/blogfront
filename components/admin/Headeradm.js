import styles from './Headeradm.module.css'
import Sidebar from './Sidebaradm'
import Head from 'next/head'
import { useState } from 'react'

export default (props) => {

    const [sidebarshow, setSidebar] = useState(0)

    function toogleSidebar (e) {
        setSidebar(!sidebarshow)
    }

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>TecAtlas ADM</title>
            </Head>
            <div className={styles["header"]}>
                <button onClick={toogleSidebar} className={styles["btnmenu"]}>
                    <img id={styles["btnmenuicon"]} src="./assets/icons/menu.svg" />
                </button>

                <Sidebar show={sidebarshow} toogleSidebar={toogleSidebar}/>
            </div>
        </>
    )
}