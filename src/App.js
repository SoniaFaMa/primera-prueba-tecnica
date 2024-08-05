import { useEffect, useState } from 'react';
import SelectCard from './Components/SelectCard';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  function UserClick(id) {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then((users) => {
        setSelectedCard(users);
        
      });
  }

  function HandleDelete(id) {
    
    setList(prevList => prevList.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      
      <div className={`card-container ${selectedCard ? 'hidden' : ''}`}>
        {list.map((user) => (
          <div key={user.id} className="card">
            <div className="card-header">
              {user.title}
            </div>
            <div className="card-body">
              Haz click para obtener más información.
              <div className='container-buttons'>
            
              <button className='button-delete' onClick={() => HandleDelete(user.id)}>Eliminar</button>
              <button className='button-select-card' onClick={()=> UserClick(user.id)}>Ver</button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      {selectedCard && (
        <SelectCard selectedCard={selectedCard}
         setSelectedCard={setSelectedCard}/>
        
      )}
    </div>
  );
}




export default App;
