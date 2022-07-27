import { useState } from "react";
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue (target.value)

    }
    
    
    const onSubmit = (event) => {
        event.preventDefault()
        
        if(inputValue.trim().length <=1)return
        onNewCategory(inputValue.trim())
        // setCategorias (cat=> [inputValue,...cat])
        setInputValue('')
    }
    
    
    return (
        <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="buscar gifs"
            value={inputValue}
            onChange={onInputChange}
            />
            </form>
    )
}
