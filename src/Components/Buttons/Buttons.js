
import './Buttons.css'

export default function Buttons({user,handleDelete,userClick}){

 
    return(
      <div className='container-buttons'>
            
              <button className='button-delete' onClick={() => handleDelete(user.id)}>Eliminar</button>
              <button className='button-select-card' onClick={()=> userClick(user.id)}>Ver</button>
              </div>
    )
  }