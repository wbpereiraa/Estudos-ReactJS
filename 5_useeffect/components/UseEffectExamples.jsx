import {useState, useEffect} from 'react'

const UseEffectExamples = () => {

    // sem dependências roda toda vez que algo disparar
    useEffect(() => {
        console.log('useEffect sem dependências')
    })

    // com dependências vazias / array de depend. vazias vai rodar sempre que a página for carregada
    useEffect(() => {
        console.log('useEffect com dependências vazias')
    }, []);

    // useState atva a re-renderização
    const [count, setCount] = useState(0);

     // com dependências que ativa baseado na mudança dos estados das dependências
     useEffect(() => {
        console.log('useEffect com dependências')
    }, [count]);

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
    </div>
  )
}

export default UseEffectExamples