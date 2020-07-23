import Postbox from './Postbox'
import styles from '../site/Index.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { URL_API } from '../../utils/config'

export default function ListPosts(props) {

    const [list, setList] = useState([])

    useEffect(() => {

        async function loadPosts() {
            const resp = await axios.get(URL_API + '/posts')
            const filterData = resp.data.filter((item) => {
                return item.category_id === props.categoryId
            }).slice(-3)

            setList([...filterData])
        }

        loadPosts()
    }, [])

    return (
        <div className={styles["mobile"]}>
            {
                list.map((item) => {
                    return (
                        <Postbox 
                            key={item.id}
                            link={'/posts/' + item.id} 
                            src={item.minibanner}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })
            }
        </div>
    )
}