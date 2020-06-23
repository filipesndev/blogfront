import styles from './Sidebar.module.css'
import Link from 'next/link'

export default (props) => {
    return (
        <div className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <button onClick={props.toogleSidebar} className={styles["btnclose"]}> <img id={styles["iconclose"]} src="./assets/icons/fechar.svg"/> </button>
            <div><Link href="/index"><a id={styles["linkhome"]}>Home</a></Link></div>
            <hr id={styles["linha"]}></hr>
            <div id={styles["busca"]}>
                <input className="input is-medium" id={styles["inputbusca"]} type="text" placeholder="Buscar..."/>
                <button id={styles["btnsearch"]} className="button"><img id={styles["iconlupa"]} src="./assets/icons/lupa2.svg"/></button>
            </div>
            <Link href="/login"><a className={styles["btnlogin"]}><img id={styles["iconlock"]} src="./assets/icons/cadeado.svg" /></a></Link>
        </div>
    )
}