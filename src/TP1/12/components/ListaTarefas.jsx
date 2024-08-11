const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];

export default function ListaTarefas() {
    return (
        <ol>
            {tarefas.map(tarefa => (
                <li>{tarefa}</li>
            ))}
        </ol>
    )
}