import styles from './Header.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Router from 'next/router'

export default (props) => {

    const [sidebarShow, setSidebar] = useState(false)
    const [search, setSearch] = useState('')

    function toogleSidebar(e) {
        setSidebar(!sidebarShow)
    }

    function onChange(e) {
        setSearch(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        Router.push('/result?search=' + search)
    }

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>TecAtlas Blog</title>
            </Head>
            <div className={styles["header"]}>
                <div className={styles["esquerda"]}>
                    <img id={styles["logoblog"]} src="/assets/logo/logo.png"/>
                    <h1>"TecAtlas, o seu mapa de tecnologia"</h1>
                </div>
                <div className={styles["direita"]}>
                    <Link href="/index"><a id={styles["linkhome"]}>Home</a></Link>
                    <div id={styles["busca"]}>
                        <form onSubmit={handleSubmit}>
                            <input className="input is-medium" onChange={onChange} value={search} id={styles["inputbusca"]} type="text" placeholder="Buscar..."/>
                            <button id={styles["btnsearch"]} type="submit" className="button"><img id={styles["iconlupa"]} src="/assets/icons/lupa2.svg"/></button>
                        </form>
                    </div>
                    <Link href="/login"><a className={styles["btnlogin"]}><img id={styles["iconlock"]} src="/assets/icons/cadeado.svg" /></a></Link>
                </div>

                <button onClick={toogleSidebar} className={styles["btnmenu"]}><img id={styles["iconmenu"]} src="/assets/icons/menu.svg"/></button>
                <Sidebar show={sidebarShow} toogleSidebar={toogleSidebar}/>
            </div>
        </>
    )
}