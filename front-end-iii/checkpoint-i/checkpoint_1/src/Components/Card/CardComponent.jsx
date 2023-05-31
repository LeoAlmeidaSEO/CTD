import style from "./CardComponent.module.css";

function CardComponent(props) {

    const imgUrlDefault = "https://s3.static.brasilescola.uol.com.br/be/2021/11/bandeira-do-brasil.jpg";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{props.title ?? "Brasil"}</h2>
            <img className={style.img} src={props.imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;