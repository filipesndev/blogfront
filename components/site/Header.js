import styles from './Header.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default () => {

    const [sidebarShow, setSidebar] = useState(false)

    function toogleSidebar(e) {
        setSidebar(!sidebarShow)
    }

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>TecAtlas Blog</title>
            </Head>
            <div className={styles["header"]}>
                <div className={styles["esquerda"]}>
                    <img id={styles["logoblog"]} src="./assets/logo/logo.png"/>
                    <h1>"TecAtlas, o seu mapa de tecnologia"</h1>
                </div>
                <div className={styles["direita"]}>
                    <Link href="/index"><a id={styles["linkhome"]}>Home</a></Link>
                    <div id={styles["busca"]}>
                        <input className="input is-medium" id={styles["inputbusca"]} type="text" placeholder="Buscar..."/>
                        <button id={styles["btnsearch"]} className="button"><img id={styles["iconlupa"]} src="./assets/icons/lupa2.svg"/></button>
                    </div>
                    <Link href="/login"><a className={styles["btnlogin"]}><img id={styles["iconlock"]} src="./assets/icons/cadeado.svg" /></a></Link>
                </div>

                <button onClick={toogleSidebar} className={styles["btnmenu"]}><img id={styles["iconmenu"]} src="./assets/icons/menu.svg"/></button>
                <Sidebar show={sidebarShow} toogleSidebar={toogleSidebar}/>
            </div>
        </>
    )
}