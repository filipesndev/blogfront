import styles from './Bannerpost.module.css'

export default (props) => {
    return (
        <img id={styles["img"]} src={props.src}/>
    )
}