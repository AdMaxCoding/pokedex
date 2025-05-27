import { getFullPokedexNumber, pokemonTypeColors } from "../utils"

export default function TypeCard(props){
    const {type} = props
    return(
        <div>
            <p className='type-tile' style={{color: pokemonTypeColors?.[type]?.color, background: pokemonTypeColors?.[type]?.background}}>
                {
                    type
                }
            </p>
        </div>
    )
}