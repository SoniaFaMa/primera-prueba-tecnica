import Buttons from "../Buttons/Buttons.js"
import './CardList.css'

export default function CardList({ selectedCard, list, HandleDelete, UserClick }){

    return(
    <div className={`card-container ${selectedCard ? 'hidden' : ''}`}>
          {list.map((user) => (
            <div key={user.id} className="card">
              <div className="card-header">
                {user.title}
              </div>
              <div className="card-body">
                Haz click para obtener más información.
                <Buttons 
                user={user}
                HandleDelete={HandleDelete}
                UserClick={UserClick}/>
                
              </div>
            </div>
          ))}
        </div>
    )
  }