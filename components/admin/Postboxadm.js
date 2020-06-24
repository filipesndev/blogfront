import styles from './Postboxadm.module.css'
import Link from 'next/link'

export default (props) => {
    return (
        <div className="box" id={styles["box"]}>
            <Link href="/index">
                <a className={styles["link"]}>

                    <div className={styles["content"]}>

                        <div className={styles["resultimg"]}>
                            <img className={styles["minibanner"]} src={props.src}/>
                        </div>

                        <div className={styles["text"]}>
                            <div>
                                <h1 className={styles["titulo"]}>{props.title}</h1>
                                <p>
                                    {props.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </a>
            </Link>

            <button id={styles["btndelete"]} className="button is-danger"><img id={styles["iconlixo"]} src="./assets/icons/lixo.svg"/></button>
        </div>
    )
}