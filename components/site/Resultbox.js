import styles from './Resultbox.module.css'
import Link from 'next/link'

export default (props) => {
    return (
        <div className="box" id={styles["box"]}>
            <div className="media">

                <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={props.src} alt="Image"/>
                    </figure>
                </div>

                <div className="media-content">
                    <div>
                        <h1 className={styles["titulo"]}>{props.title}</h1>
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}