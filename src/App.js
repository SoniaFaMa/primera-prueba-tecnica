import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Fetching data from the API and setting it in state
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  function Hagoclick(id) {
    // Fetching the selected card data from the API and setting it in state
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then((user) => {
        setSelectedCard(user);
        console.log(user); // Log selected card data to the console
      });
  }

  return (
    <div className="App">
      {/* Conditionally applying the 'hidden' class based on selectedCard state */}
      <div className={`card-container ${selectedCard ? 'hidden' : ''}`}>
        {list.map((usuario) => (
          <div key={usuario.id} className="card" onClick={() => Hagoclick(usuario.id)}>
            <div className="card-header">
              {usuario.title}
            </div>
            <div className="card-body">
              Haz click para obtener más información.
            </div>
          </div>
        ))}
      </div>

      {/* Render selected card details if selectedCard is not null */}
      {selectedCard && (
        <div className="selected-card">
          <h2 className='title-card'>{selectedCard.title}</h2>
          <p className='body-card'>{selectedCard.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
