const EventHandlingExample = () => {

    const handleClick = () => {
        alert('Test button clicked');
    }
  return (
    <div>
        <button onClick={() => alert('Hello World!')}>Click me!</button>
        <button onClick={handleClick}>Click me 2!</button>
    </div>
  )
}

export default EventHandlingExample