import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data' 
import {Link} from 'react-router-dom'




const TitleCards = ({title, category}) => {
  //we will store data in state variable
  



  const cardsRef = useRef();


  

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{



    cardsRef.current.addEventListener('wheel',handleWheel);
  
  },[])
// Now you can scroll this list
//Title condition what to show  line25
  return (
    <div className='title-cards'>
     <h2>{title?title:"Popular on Netflix"}</h2>         
     <div className="card-list" ref={cardsRef}>
      {cards_data.map((card, index)=>{
        return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={card.image} alt="" />
          <p>{card.name}</p>
        </Link>

      })}
      </div> 
    </div>
  )
}

export default TitleCards
