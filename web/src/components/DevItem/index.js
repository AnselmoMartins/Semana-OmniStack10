import React from 'react';
import './styles.css';
function DevItem({atualizar, deletar, dev}){
    if(dev.bio == null){
        dev.bio = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys';
    }

    async function handleDeleteDev(){
        await deletar(dev._id);
    };

    async function handleUpdateDev(){
        atualizar({github_username: dev.github_username});
    }  

    return(
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name} />
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>
              {dev.techs.join(', ')}
            </span>
          </div>
        </header>
        <p>
          {dev.bio}
          <br/>
          <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no GitHub</a>
        </p>
        <footer className="buttons">
            <div className="x-button-header">
                <button  className="x-button-x" onClick={handleDeleteDev} type="button">Excluir</button>
                <button  className="x-button" type="button" onClick={handleUpdateDev}>Atualizar</button>
            </div>
        </footer>
      </li>
    );
}

export default DevItem;