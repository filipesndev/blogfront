import Link from 'next/link'
import styles from '../site/Login.module.css'

export default () => {
    return (
        <div className={styles["pagina"]}>
                <div className="box" id={styles["caixa2"]}>
                    <h1 className={styles["title"]}>Register:</h1>
                    <form className="has-icons-left">
                        <h2 className={styles["title2"]}>Nome:</h2>
                            <input className="input" type="text" placeholder="ex: Filipe Eduardo"/>
                        <h2 className={styles["title2"]}>Email:</h2>
                            <input className="input" type="email" placeholder="ex: filipedeveloper@gmail.com"/>
                        <h2 className={styles["title2"]}>Password:</h2>
                            <input className="input" type="password"/>
                        <button className="button is-info" id={styles["botao"]} type="submit" >Registrar</button>
                    </form>
                    <Link href="/index"><a className={styles["link"]}>Voltar para o inicio</a></Link>
                </div>
        </div>
    )
}