import React, { useContext } from 'react'
import TeamContext from "../../context/TeamContext"
import { useHistory } from "react-router-dom"
import './IndividualPage.css'
import { characterAlignment } from '../../helpers'


const IndividualPage = ({ superhero }) => {
  const [team, setTeam] = useContext(TeamContext)
  const history = useHistory()

  const deleteSuperhero = (id) => {
    const confirmacion = window.confirm("Seguro de quitar a este personaje?")
    if (confirmacion) {
      setTeam( team.filter((superhero) => superhero.id !== id)) 
      
    }
  }
  const handleClick = (id) => {
    history.push(`/details/${id}`)
  }

    const addFallbackImg = (event) => {
    event.target.src = process.env.PUBLIC_URL
  }



  return (

    <div className="individual-card">
      <div>
        <img className="character-img" src={superhero.image.url} alt={superhero.name} onError={addFallbackImg} />
      </div>
      <h3>{superhero.name}</h3>
      <p>{ characterAlignment(superhero)}</p>
      <div className="stats">
        <div className="container mod_container">
          <span><strong>Combate</strong>: {Number(superhero.powerstats.combat) || 0} </span>
          <span><strong>Durabilidad</strong>: {Number(superhero.powerstats.durability) || 0} </span>
          <span><strong>Inteligencia</strong>: {Number(superhero.powerstats.intelligence) || 0} </span>
        </div>
        <div className="container mod_container">
          <span><strong>Poder</strong>: {Number(superhero.powerstats.power) || 0} </span>
          <span><strong>Rapidez</strong>: {Number(superhero.powerstats.speed) || 0} </span>
          <span><strong>Fuerza</strong>: {Number(superhero.powerstats.strength) || 0} </span>
        </div>
      </div>

        <div className="action-options">
        <button className="btn" onClick={() => deleteSuperhero(superhero.id)}>
          Borrar
        </button>
        <button className="btn" onClick={() => handleClick(superhero.id)}>mas info
        </button>
        </div>

    </div>

  )
}

export default IndividualPage
