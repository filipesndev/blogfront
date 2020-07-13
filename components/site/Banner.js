import styles from './Banner.module.css'
import { useState, useEffect } from 'react'

function Banner (props) {

    const style = styles.item + ' ' + styles.animation
    const path = './assets/imgbanner/'

    const images = [
        'banner1.png',
        'banner3.png',
        'banner2.png'
    ]

    const [index, setIndex] = useState(0)

    function changeImg (e) {
        if (index < images.length - 1) {
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            changeImg()
        }, 2000)
    })

    return (
        <div className={styles["banner"]}>
            <img className={style} src={path + images[index]}/>
        </div> 
    )
}

export default Banner