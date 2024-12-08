import { useState } from 'react';

// useState = hooks
// alterar o valor de algo => useState
// somente leitura => var, state

const UseStateComponent = () => {
  // variavel de consulta, e uma de alteração, inicio o hook
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  //setCount(count+1);
    console.log(count);
  };

  const [user, setUser] = useState({
    name: 'William',
    age: 33,
    hobbies: ['jogar', 'ler', 'programar'],
  });

  const updateUserAge = () => {
    setUser((prevUser) => ({ 
      ...prevUser, 
      age: prevUser.age + 1, }));
  };

  const updateUserAgeDec = () => {
    setUser((prevUser) => ({ 
      ...prevUser, 
      age: prevUser.age - 1, }));
  };

  return (
    <div>
      <h2>Contador:</h2>
      <p>Você clicou {count} vezes...</p>
      <button onClick={increment}>Incrementar</button>

      <p>Nome: {user.name}, idade: {user.age} e hobbies: {user.hobbies}</p>

      <button onClick={updateUserAge}> Incrementar idade</button>
      <button onClick={updateUserAgeDec}> Decrementar idade</button>

    </div>
  );
};

export default UseStateComponent;
