import styles from './Sidebar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'

export default (props) => {

    const [search, setSearch] = useState('')

    function onChange(e) {
        setSearch(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        Router.push('/result?search=' + search)
    }

    return (
        <div className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <button onClick={props.toogleSidebar} className={styles["btnclose"]}> <img id={styles["iconclose"]} src="/assets/icons/fechar.svg"/> </button>
            <div><Link href="/index"><a id={styles["linkhome"]}>Home</a></Link></div>
            <hr id={styles["linha"]}></hr>
            <div id={styles["busca"]}>
                <form onSubmit={handleSubmit}>
                    <input className="input is-medium" onChange={onChange} id={styles["inputbusca"]} type="text" placeholder="Buscar..."/>
                    <button id={styles["btnsearch"]} className="button"><img id={styles["iconlupa"]} src="/assets/icons/lupa2.svg"/></button>
                </form>
            </div>
            <Link href="/login"><a className={styles["btnlogin"]}><img id={styles["iconlock"]} src="/assets/icons/cadeado.svg" /></a></Link>
        </div>
    )
}