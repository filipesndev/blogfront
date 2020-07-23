import Template from '../../components/site/Template'
import Header from '../../components/site/Header'
import Footer from '../../components/site/Footer'
import Banner from '../../components/site/Bannerpost'
import styles from '../../components/site/Templatepost.module.css'
import axios from 'axios'
import { URL_API } from '../../utils/config'

export default (props) => {

    const post = props.post
    console.log(props)

    return (
        <>
            <Header/>
            <Banner src={post.banner}/>
            <div className={styles["pagina"]}>
                <div className="container" id={styles["indexdoconteudo"]}>

                    <div className="texto">
                        <Template titulo={post.title} conteudo={post.content}/>

                    </div>

                    <div className={styles["ads"]}>
                        <img src="/assets/img/imgads.png"/>
                        <img src="/assets/img/imgads.png"/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const resp = await axios.get(URL_API + '/posts/' + ctx.params.id)
    return {
        props: {post: resp.data}
    }
}