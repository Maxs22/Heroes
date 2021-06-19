import React, { useContext} from 'react'
import TeamContext from '../../context/TeamContext'
import './CardSearchCharacter.css'
import { useHistory } from "react-router-dom"
import { BsFillPersonPlusFill } from 'react-icons/bs'


const CardSearchCharacter = ({ character }) => {
  const [team, setTeam] = useContext(TeamContext)
  const history = useHistory()

  const isDisabled = (id) => {
    return team.find(item => item.id === id)
  }

  function addCharacterToTeam() {
    const teamSize = team.length;
    const amountBadCharacter = team.filter(character => character.biography.alignment ==="bad").length
    const amountGoodCharacter = team.filter(character => character.biography.alignment === "good").length

    if (teamSize < 6 & team.filter(item=> item.id === character.id).length === 0) {
      if (amountBadCharacter < 6 & character.biography.alignment === "bad" || amountGoodCharacter < 6 & character.biography.alignment === "good") {
        setTeam([...team, character])

        
  
      } else {
        if (amountBadCharacter === 6 ) {
          window.alert("Llegaste a 3 villanos malos")
        } else {
          window.alert("Llegaste a 3 heroes buenos")
          
        }

      }
      
    } else {
      if (team.length === 6) {
        window.alert("Llegaste al máximo de 6 personaje en tu equipo")
          
      } else {
        window.alert("Este personaje ya forma parte de tu equipo")
        
        }
    }
  }
  
    const handleClick = (id) => {
    history.push(`/details/${id}`)
  }

  const addFallbackImg = (event) => {
    event.target.src = process.env.PUBLIC_URL
  }


  return (
    <div className="character-card">
      {!isDisabled(character.id) &&
        <button className="btn btn_mod" onClick={addCharacterToTeam}  >
          <BsFillPersonPlusFill  />
        </button>
      
      }

      
      <img className="card-image" src={character.image.url} alt={character.name} onError={ addFallbackImg} />

      <h3 className="card-title">
        {character.name}
      </h3>
      <button className="btn" onClick={() =>handleClick(character.id)}> Mas info </button>
    </div>
  )
}

export default CardSearchCharacter
