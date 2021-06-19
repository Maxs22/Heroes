import axios from 'axios'
import React, { useState } from 'react'
import CardSearchCharacter from '../CardSearchCharacter/CardSearchCharacter'


const HeroSearch = () => {
  const [characterName, setCharacterName] = useState("")

  const [character, setCharacter] = useState([])
  const [errorAPI, setErrorAPI] = useState(false)
  const [errorSearch, setErrorSearch] = useState(false)
    
  function getCharacter(event, name) {
    event.preventDefault()
    axios.get(`https://www.superheroapi.com/api.php/268297981650026/search/${name}`)
      .then(({data}) => {
        if (data.response === "error") {
          setCharacter([])
          setErrorSearch(true)
          setErrorAPI(false)

          
        }
        if (data.response === "success") {
          setCharacter(data.results)
          setErrorSearch(false)
          setErrorAPI(false)
        }
      })
      .catch((err) => {
        setErrorAPI(true)
    })
    
  }

  return (
    <div className="container">

      <form className="form container" action="" onSubmit={(e) => getCharacter(e, characterName)}>
        <h2 className="title title_mod">Buscar Personaje</h2>
        <input className="input-text" type="text" onChange={(e) => setCharacterName(e.target.value)}
          placeholder="ej: Capitan America" required />
        { errorAPI && <p> Intente más tarde no disponible </p>}
        { errorSearch && <p> No se encontro personaje con ese nombre </p>}
        <input className="btn" type="submit" value="Buscar" />
      </form>
      {
        (!errorAPI & !errorSearch) ? (
          <div className="cards-container">{character.map(character => (
         
            <CardSearchCharacter key={character.id} character={character} />
          ))
          }
          </div>
        ) : <p></p>
      }
      
      </div>
  )
}

export default HeroSearch
