import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import { characterAlignment } from '../../helpers'




const DetailsCharacter = () => {
  const [character, setCharacter] = useState(null)
  const [, setError] = useState(false)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    axios.get(`https://superheroapi.com/api.php/268297981650026/${id}`)
      .then(({ data }) => {
        if (data.response !== "error") {
          setCharacter(data)
          setError(false)
  
          
        } else {
          setError(true)
          
        }
      })
      .catch((err) => {
        setError(true)
    })
    

  }, [id])

  


  const goHome = () => {
    history.push("/home")
  }
     const addFallbackImg = (event) => {
    event.target.src = process.env.PUBLIC_URL
  }


  return (character ? (
      
      <div className="container">
        <div className="container_row details-container_mod">
          <img className="details-image" src={character.image.url} alt={character.name} onError={addFallbackImg} />
          <div className="container details-container">
            <h2 className="title">{character.name}</h2>
            <ul className="details-powerstats">
              <li> <span className="bold"> Nombre completo: </span>  { character.biography["full-name"]}.</li>
              <li> <span className="bold"> Peso: </span> { character.appearance.weight[1]}.</li>
              <li> <span className="bold"> Altura: </span> {character.appearance.height[1]}.</li>
              <li> <span className="bold"> Alias: </span>{character.biography.aliases.map(alias => <span key={ alias }>{alias} </span>)}.</li>
              <li> <span className="bold"> Alineación: </span> { characterAlignment(character) }.</li> 
              <li> <span className="bold"> Lugar de trabajo: </span> { character.work.base}.</li> 
              <li> <span className="bold"> Color  de ojos: </span> { character.appearance["eye-color"]}.</li>
              <li> <span className="bold"> Cabello: </span> {character.appearance["hair-color"]}.</li>

            </ul>


          </div>
        </div>
        
      </div>
     
     ) : (
      <div className="container">
         <p> Volve a intentarlo</p>
        <button className="btn" onClick={ goHome }>Inicio</button>


      </div>
    )
  )
}

export default DetailsCharacter