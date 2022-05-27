import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [albums, setAlbums] = useState(0);
  const{id, album, name, image, source, description} = data[albums];
 

  const previousAlbum = () => {
    setAlbums ((albums => {
      albums--;
      if(albums < 0) {
        return data.length -1;
      }
      return albums;
    }))
  }

  const nextAlbum = () => {
    setAlbums ((albums => {
     albums++;
     if (albums > data.length -1){
     albums = 0;
    }
     return albums;
    }))
  }
  
  return (<div>
    <div className='container'>
     <h1>Лучшие альбомы по моей версии</h1>
    </div>
    <div className='container'>
      <h2> {album}</h2>
    </div>
    <div className='container'>
      <h2>{name}</h2>
    </div>
    <div className='container'>
      <img src={image} width = "300px" alt="album"/>
    </div>
    <div className='container btn'>
      <button onClick={previousAlbum}>назад</button>
      <button onClick={nextAlbum}>вперед</button>
    </div>
    <div className='container'>
     <p className='source'>{source}</p>
    </div>
    <div className='container'>
     <p className='description'>{description}</p>
    </div>
    
       <div>
         <p>Источник: <a href="https://music.yandex.ru/" target="_blank">Яндекс.Музыка</a></p>
       </div>
    </div>
  );
}

export default App;
