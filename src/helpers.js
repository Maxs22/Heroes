  export function characterAlignment (character){
    if (character.biography.alignment === "good") {
      return "Heroe"
    }
    if (character.biography.alignment === "bad") {
      return "Villano"
    }
    return "-"
}
  
