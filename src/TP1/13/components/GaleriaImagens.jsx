import './GaleriaImagens.css'

const imagens = [ 
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' }, 
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' }, 
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' } 
];

export default function GaleriaImagens() {
    return (
        <div className="galeria">
            {imagens.map(img => (
                <div className="imagem-card">
                    <img src={img.url}/>
                    <p>{img.legenda}</p>
                </div>
            ))}
        </div>
    )
}