const JsxExamples = () => {
    const UserName = "William";

    const user = {
        name: "William",
        lastName: "Barbosa",
        age: 33,
        };

        function showFullName(user) {
            return `${user.name} ${user.lastName}`;
        }

        const userIsLoggedIn = false;

        const userRole = "admin";

        const users = [{id: 1, name: "William"},
            {id: 2, name: "João"},
            {id: 3, name: "Maria"},
        ];

  return (
    <div>
        {/* basico */}
        <h2>Conteudo que o usuário vai ver</h2>
        {/* Comentário JSX */}
        <p>Olá, {UserName}.</p>
        <p>Olá, {user.name} {user.lastName}.</p>

        <p>Olá, {user.name} {user.lastName} você tem {user.age} anos.</p>

        <p>{2+2}</p>

        <p>{showFullName(user)}</p>

        {/* diferenças do HTML */}
        <div className="test">ok</div>

        <label htmlFor="name">Nome</label>

        <button onClick={() => alert('Botão clicado')}>Clique aqui</button>

        <input type="text" onChange={(e) => console.log(e.target.value)} />

        {/* renderização condicional */}
        {userIsLoggedIn ? <p>Usuário logado</p> : <p>Usuário não logado</p>}

        {userRole === "admin" && <p>Usuário é admin</p>}

        {/* renderização de listas */}

        <div>
            <ul>
                {users.map((user) => (
                <li key={user.id}>
                    {user.id} - {user.name}
                </li>
                ))}    
            </ul>
        </div>

    </div>
  )
}

export default JsxExamples