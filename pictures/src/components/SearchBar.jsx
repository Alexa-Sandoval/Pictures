import { use, useState } from "react";
import './SearchBar.css'

const SearchBar = ({ onsubmit}) => {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('Necesito decirle al componente papa sobre los datos')
        onsubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    console.log('term', term)
    
  return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Termino de la busqueda:</label>
            <input onChange={handleChange} value={term}/>
        </form>
    </div>
  )      
}

export default SearchBar