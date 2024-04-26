//Importa el módulo PropTypes de la biblioteca prop-types.
import PropTypes from 'prop-types'

//Define una función de componente funcional llamada InputFilter que recibe tres propiedades: types, value, y onChange
function InputFilter({ types, value, onChange }) {

    //etorna un fragmento (<>...</>) que contiene un div con la clase "form-field".
    return <>
       <div className="form-field" >
        <label htmlFor="">Filter by type</label>
        <select id="pokemonSelect" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">All types</option>
            {types.map((type, index) => {
                return <option key={index} value={type}>{type}</option>
            })}
        </select>
       </div>
    </>
}
//Define los tipos de propiedades esperadas para el componente InputFilter utilizando PropTypes.
InputFilter.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default InputFilter