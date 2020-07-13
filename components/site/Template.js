import styles from './Template.module.css'

export default (props) => {
    return (
        <div className={styles["content"]}>
            <h1>{props.titulo}</h1>
            <div 
                className={styles["conteudomateria"]}
                dangerouslySetInnerHTML={{
                    __html: props.conteudo
                }}
            />
        </div>
    )
}