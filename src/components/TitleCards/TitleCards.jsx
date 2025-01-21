import React, {useEffect, useRef, useState} from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'


const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTNkNmQxMmRmYzZiYzFkNDk0OTZkMzI5MjRkNjNkNSIsIm5iZiI6MTczNDI4Njg5Mi43NjYsInN1YiI6IjY3NWYxZTJjN2Y2YzgwOGU4ZTAxYzU3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6qhivO1cQ-FOc4miaenDFTkSyEJEri0YHgRKOh-7GE'
    }
  };
  
 



const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;
}



useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Streamio"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards