import './style.css'

export default function CartaoPerfil(props) {
    return (
        <div className="personal-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.url}/>
        </div>
    )
}