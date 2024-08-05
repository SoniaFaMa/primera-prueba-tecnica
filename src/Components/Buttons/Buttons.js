
import './Buttons.css'

export default function Buttons({user,HandleDelete,UserClick}){

    return(
      <div className='container-buttons'>
            
              <button className='button-delete' onClick={() => HandleDelete(user.id)}>Eliminar</button>
              <button className='button-select-card' onClick={()=> UserClick(user.id)}>Ver</button>
              </div>
    )
  }