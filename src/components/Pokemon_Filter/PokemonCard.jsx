//Importa el módulo PropTypes de la biblioteca prop-types.
import PropTypes from 'prop-types'
//recibe un objeto data como propiedad, que representa la información de un Pokémon. Luego, extrae las propiedades relevantes 
function PokemonCard({ data }) {

    const { image_url, name, types } = data

    return <div className="card">
        <img src={image_url} alt="" />
        <h3 className="title">{name}</h3>
        <p className="description">({types.join(", ")})</p>
    </div>
}
//tiliza PropTypes para definir y validar los tipos de las propiedades esperadas en el componente. En este caso, se espera que data
PokemonCard.propTypes = {
    data: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default PokemonCard