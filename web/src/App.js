import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem';
import Form from './components/Form';


function App() {

  const [devs, setDevs] = useState([]);
  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);

    }
    loadDevs();
  }, [devs]);

  async function handleAddDev(data){
      const response = await api.post('/devs', data)
  }
  async function handleDeleteDev(id){
    const response = await api.delete(`${id}/devs`)
  }
  async function handleUpdateDev(data){
    console.log(data);
    const response = await api.put('/updatedev', data)
  }  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
         <Form onSubmit={handleAddDev}/>
        </aside>
      <main>
        <ul>
          {devs.map(dev =>(
            <DevItem key={dev._id} deletar={handleDeleteDev} dev={dev} atualizar={handleUpdateDev}/>

          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
