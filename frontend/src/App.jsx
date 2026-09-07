import { useState } from "react";

function App() {
  const [ num, setNum ]  = useState(24);
  return (
    <>
     <h1>Hello chirag from react after long time</h1>
     <h2>usestate var value: {num}</h2>
    </>
  )
}

export default App;