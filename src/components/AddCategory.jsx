// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length >=1)

        onNewCategory(inputValue.trim());
            // setCategories(categories => [inputValue,...categories]);
        setInputValue('');
    };
    return (
        <form onSubmit={(event) => onSubmit(event)}>
             <input
        type="text"
        placeholder="Busqueda"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
        />
        </form>
       
    )
};