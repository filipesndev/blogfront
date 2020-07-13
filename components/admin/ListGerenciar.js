import Post from '../../components/admin/Postboxadm'
import styles from '../../components/admin/Gerenciar.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { URL_API } from '../../utils/config'

export default (props) => {

    const [list, setList] = useState([])

    async function loadPosts() {
        const resp = await axios.get(URL_API + '/posts')
        setList([...resp.data])
    }
    
    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <div className={styles["posts"]}>
            {
                list.map((post) => {
                    return(
                        <Post 
                            key={post.id}  
                            link={'/index/posts/' + post.id}
                            src={URL_API + '/posts/images/' + post.minibanner} 
                            title={post.title}
                            description={post.description}
                            id={post.id}
                            load={loadPosts}
                        />
                    )
                })
            }
        </div>
    )
}