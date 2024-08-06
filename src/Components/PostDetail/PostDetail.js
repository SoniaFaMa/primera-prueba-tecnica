import './PostDetail.css'


export default function SelectCard({selectedCard,setSelectedCard}){

    
    return(
    
    <div className="selected-card">
    <h2 className='title-card'>{selectedCard.title}</h2>
    <p className='body-card'>{selectedCard.body}</p>
    <button className='button-back' onClick={() => setSelectedCard(null)}>Volver</button>
    </div>
  
  
  )
  
  
  
  }
  