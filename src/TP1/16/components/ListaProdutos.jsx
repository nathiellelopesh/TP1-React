import './CartaoProduto.css'

const produtos = [ 
    {
   nome: "Tênis de Corrida", 
   descricao: "Tênis confortável para corridas diárias.", 
   preco: "R$ 299,90", 
   imagem: "https://via.placeholder.com/150" 
    },
    { 
   nome: "Camisa de Ciclismo", 
   descricao: "Camisa respirável para ciclistas.", 
   preco: "R$ 129,90", 
   imagem: "https://via.placeholder.com/150" 
   }, 
   { 
   nome: "Boné Esportivo", 
   descricao: "Boné ajustável para proteção solar.", 
   preco: "R$ 59,90", 
   imagem: "https://via.placeholder.com/150" 
   }
];

function CartaoProduto(props) {
    return (
        <div className='produtos-item'>
            <img src={props.imagem}/>
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
                <p className='item-price'>{props.preco}</p>
            </div>
        </div>
    )
}

export default function ListaProdutos() {
    return (
        <div className="produtos">
            {produtos.map(item => (
                <CartaoProduto imagem={item.imagem}
                nome={item.nome}
                descricao={item.descricao}
                preco={item.preco}
                />
            ))}
        </div>
    )
}