import styles from './Resultbox.module.css'
import Link from 'next/link'

export default (props) => {
    return (
        <div className="box" id={styles["box"]}>
            <Link href={props.link}>
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
        </div>
    )
}