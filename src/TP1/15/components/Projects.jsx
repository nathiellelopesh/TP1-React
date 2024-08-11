import './Projects.css'

export default function Projects() {
    return (
        <div className="projects-card">
            <div className='projects-item'>
                <img src='https://miro.medium.com/v2/resize:fit:1400/1*LQtKmVt10K_R644y12jaVg.jpeg'/>
                <h4>Projeto 1</h4>
                <p>Desenvolvimento de uma E-commerce</p>
            </div>
            <div className='projects-item'>
                <img src='https://miro.medium.com/v2/resize:fit:1400/1*LQtKmVt10K_R644y12jaVg.jpeg'/>
                <h4>Projeto 2</h4>
                <p>Desenvolvimento de um aplicativo mobile</p>
            </div>
            <div className='projects-item'>
                <img src='https://miro.medium.com/v2/resize:fit:1400/1*LQtKmVt10K_R644y12jaVg.jpeg'/>
                <h4>Projeto 3</h4>
                <p>Desenvolvimento de um website responsivo</p>
            </div>
        </div>
    )
}