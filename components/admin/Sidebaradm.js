import styles from './Sidebaradm.module.css'
import Link from 'next/link'

export default (props) => {
    return (
        <div className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <button onClick={props.toogleSidebar} className={styles["btnclose"]}>
                <img id={styles["btncloseicon"]} src="../assets/icons/fechar.svg" />
            </button>
            <ul className={styles["links"]}>
                <Link href="/"><a><li>Home</li></a></Link>
                    <hr/>
                <Link href="/admin"><a><li>Gerenciar</li></a></Link>
                    <hr/>
                <Link href="/admin/postar"><a><li>Postar</li></a></Link>
                    <hr/>
                <Link href="/admin/register"><a><li>Registrar</li></a></Link>
            </ul>
        </div>
    )
}