import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import ResultBox from '../components/site/Resultbox'
import styles from '../components/site/Result.module.css'
import { URL_API } from '../utils/config'
import axios from 'axios'

export default (props) => {

    return (
        <>
            <Header/>
            <div className="container" id={styles["content"]}>
                <div className={styles["results"]}>
                    <div className={styles["titulo"]}>
                        <img className={styles["icontitle"]} src="./assets/icons/clip.svg"/>
                        <h1>Resultados:</h1>
                    </div>
                    
                    {
                        props.listPosts.map((item) => (
                            <ResultBox 
                                key={item.id}
                                link={'/posts/' + item.id}
                                src={URL_API + '/posts/images/' + item.minibanner}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }

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

export async function getServerSideProps(ctx) {

    const search = ctx.query.search.toLowerCase()

    const resp = await axios.get(URL_API + '/posts')
    const result = resp.data.filter((item) => (
        item.title.toLowerCase().includes(search)) || 
        item.description.toLowerCase().includes(search)
    )
    return {
        props: {
            listPosts: result
        }
    }
}