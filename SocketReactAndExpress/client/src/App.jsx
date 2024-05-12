import io from 'socket.io-client'
import {useState} from 'react'


function App() {
  const [data,setData] = useState()
  const socket = io('/');
  socket.on('msg', (data) => {
    setData(data);
  })

  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default App
