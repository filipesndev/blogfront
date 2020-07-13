import Link from 'next/link'
import ListPosts from '../components/site/ListPosts'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import Banner from '../components/site/Banner'
import Postbox from '../components/site/Postbox'
import styles from '../components/site/Index.module.css'

export default (props) => {

    return (
        <>
            <Header/>
            <Banner/>
            <div className="container" id={styles["content"]}>
                <div className={styles["posts"]}>
                    <div className={styles["titulo"]}>
                        <img className={styles["icontitlemobile"]} src="./assets/icons/mobile.svg"/>
                        <h1>Mobile - Últimas Postagens:</h1>
                    </div>
                    <ListPosts categoryId={1} />

                    <div className={styles["titulo"]}>
                        <img className={styles["icontitle"]} src="./assets/icons/laptop.svg"/>
                        <h1>Notebooks e PCs - Últimas Postagens:</h1>
                    </div>
                    <ListPosts categoryId={2} />

                    <div className={styles["titulo"]}>
                        <img className={styles["icontitle"]} src="./assets/icons/game.svg"/>
                        <h1>Games e Consoles - Últimas Postagens:</h1>
                    </div>
                    <ListPosts categoryId={3} />
                </div>

                <div className={styles["ads"]}>
                    <img src="./assets/img/imgads.png"/>
                    <img src="./assets/img/imgads.png"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}