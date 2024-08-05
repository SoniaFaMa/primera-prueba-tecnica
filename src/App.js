import { useEffect, useState } from 'react';
import SelectCard from './Components/SelectCard/SelectCard';
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
      
     <CardList
      list={list} 
      HandleDelete={HandleDelete} 
      UserClick={UserClick} 
      selectedCard={selectedCard}/>

     
      {selectedCard && (
        <SelectCard selectedCard={selectedCard}
         setSelectedCard={setSelectedCard}/>
        
      )}
    </div>
  );

  

}






export default App;
