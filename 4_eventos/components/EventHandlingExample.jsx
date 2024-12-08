import {useState} from 'react'

const EventHandlingExample = () => {

    const handleClick = () => {
        alert('Test button clicked');
    };

    const handleGreetings = (name) => {
        alert(`Hello ${name}.`);
    };

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted! ${name}`);
    };

  return (
    <div>
        <button onClick={() => alert('Hello World!')}>Click me!</button>
        <button onClick={handleClick}>Click me 2!</button>
        <br />
        <button onClick={() => handleGreetings("Ana")}> Dizer Olá Ana</button>
        <button onClick={()=> handleGreetings("Pedro")}> Dizer Olá Pedro</button>
        <br />
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} placeholder="Digite seu nome:"
          />
          <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default EventHandlingExample