import Template from '../components/site/Template'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import Banner from '../components/site/Bannerpost'
import styles from '../components/site/Templatepost.module.css'

export default (props) => {
    return (
        <>
            <Header/>
            <Banner src="./assets/img/bannermateria.png"/>
            <div className={styles["pagina"]}>
                <div className="container" id={styles["indexdoconteudo"]}>

                    <div className="texto">
                        <Template/>
                    </div>

                    <div className={styles["ads"]}>
                        <img src="./assets/img/imgads.png"/>
                        <img src="./assets/img/imgads.png"/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}