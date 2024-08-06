import { useEffect, useState } from 'react';
import PostDetail from './Components/PostDetail/PostDetail';
import CardList from './Components/CardList/CardList';
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

  function userClick(id) {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then((users) => {
        setSelectedCard(users);
        
      });
  }

  function handleDelete(id) {
    
    setList(prevList => prevList.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      
     <CardList
      list={list} 
      handleDelete={handleDelete} 
      userClick={userClick} 
      selectedCard={selectedCard}/>

     
      {selectedCard && (
        <PostDetail selectedCard={selectedCard}
         setSelectedCard={setSelectedCard}/>
        
      )}
    </div>
  );

  

}






export default App;
