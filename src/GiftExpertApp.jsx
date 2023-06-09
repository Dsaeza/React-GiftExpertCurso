// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState(['One Punch']);
   
    const onAddCategory = (newCategory) => {
        // categories.push(elemento);
        // categories.push(newCategory);
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
        console.log(newCategory);
    };

    return (
        <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>
        {/* Input */}
        <AddCategory 
        onNewCategory = {event => onAddCategory(event)}
            // setCategories = {setCategories}
            />
        {/* <button onClick={
            onAddCategory
            }>
            <p>Agregar categoria</p>
        </button> */}

        {/* Listado de Gif             Ese <ol> no deberia estar, no se usa*/}
        {/* <ol>  */}
            {
            categories.map( ( category) => (
                <GifGrid key= {category} category={category}/>
                
                 ))
            }
            
        {/* </ol> */}
        {/* Gif Item */}
        </>

        
    );
};