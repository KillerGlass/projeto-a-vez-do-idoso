import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App(props) {
  //atraves de props pode se passar tudo
  const [usuario, setUsuario] = useState("");

  function handlePesquisa(){
    axios.get('https://api.github.com/users/${usuario}/repos').then(Response =>console.log(Response.data))
   
  }
  return (//jsx
 
    <>34er34
      <input className='Usuario' placeholder='Usuario' value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}> Pesquisar </button>
    </>

  );
}

export default App;
