import Buttons from "../Buttons/Buttons.js";
import './CardList.css';

export default function CardList({ selectedCard, list, handleDelete, userClick}) {
  if (selectedCard) {
    return (
      !selectedCard && <CardList
        list={list} 
        handleDelete={handleDelete} 
        userClick={userClick} 
        selectedCard={selectedCard}/>
    )
    

  }

  

  return (
    <div className="card-container">
      {list.map((user) => (
        <div key={user.id} className="card">
          <div className="card-header">
            {user.title}
          </div>
          <div className="card-body">
            Haz clic para obtener más información.
            <Buttons 
              user={user}
              handleDelete={handleDelete}
              userClick={userClick}
            />
          </div>
        </div>
      ))}
    </div>
  );
}