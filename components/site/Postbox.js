import styles from './Postbox.module.css'
import Link from 'next/link'

function Postbox (props) {
    return (
        <div id={styles["card"]}>
            <Link href={props.link}>
                <a>
                    <div className="card">

                        <div className="card-image" id={styles["image"]}>
                            <figure className="image is-4by3">
                                <img id={styles["minibanner"]} src={props.src}/>
                            </figure>
                        </div>

                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{props.title}</p>
                                    <p className="subtitle is-6">{props.description}</p>
                                </div>
                            </div>

                            <div className="content">
                                <time>1 Jan 2016</time>
                            </div>
                        </div>
                        
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Postbox