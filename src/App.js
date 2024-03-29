import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);

  
  useEffect(() => {
    const onCustomEvent = function(){
      setCount(count+1)
    }
    logEvent('addEventListener')
    document.addEventListener('custom-event', onCustomEvent)

    return () => {
      logEvent('removeEventListener')
      document.removeEventListener('custom-event', onCustomEvent)
    }
  }, [count, setCount])


  function dispatchEvent(){
    document.dispatchEvent(new CustomEvent('custom-event'))
  }

  function logEvent(msg){
    console.log(msg)
    setLog([...log, msg])
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increase counter
      </button>
      <button onClick={() => dispatchEvent()}>
        Dispatch a Custom Event, for example from a WebSockets
      </button>
      <div>I need to update a variable, for example counter, from buttons and from WebSockets.
         How to do it in react? Currently I use "useEffect" hook, but I don't think it's a correct way, 
         because I'd like to avoid addEventListener and removeEventListener on every counter change.
        Does anyone know a solution? EDIT: @see solutions branch</div>
      <div>count value is {count}</div>
      <div>Log (see console also):</div>
      {log.map((msg, i) => <div key={i}>{msg}</div>)}
    </>
  );
}

export default App;
