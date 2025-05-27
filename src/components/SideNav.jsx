import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"
export default function SideNav(props){
    const {selectedPokemon, setSelectedPokemon, handleToggleMenu, showSideMenu} = props
    const [searchValue, setSearchValue] = useState('')
    const filteredPokemon = first151Pokemon.filter((ele, eleIndex)=>{
        if ((getFullPokedexNumber(eleIndex)).includes(searchValue)){
            return true
        }
        if (ele.toLowerCase().includes(searchValue.toLowerCase())){
            return true
        }

        return false
    })
    return (
        <nav className={''+ (!showSideMenu ?  "open": '')}>
            <div className={"header"+ (!showSideMenu ?  "open": '')}>
                <button onClick={handleToggleMenu} className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            <input placeholder={'E.g. 001 or Bulba...'} value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                return (<button onClick={()=>{
                    setSelectedPokemon(first151Pokemon.indexOf(pokemon)), handleToggleMenu()
                }} key ={pokemon} className={'nav-card' + (pokemonIndex === selectedPokemon ?'nav-card-selected':' ')}>
                    <p>{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
                    <p>{pokemon}</p>
                </button>)
            })}
        </nav>
        )
    
}