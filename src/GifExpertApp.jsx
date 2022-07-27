import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp=()=>{

    const [categorias, setCategorias] = useState(['One Punch','Dragon Ball']);
    
    // var textvalue = ''

    // const handleChange = (e) => {

    //     textvalue = `${e.target.value}`
    //     };
     
    const onAddCategorias = (newCategory) => {

        if(categorias.includes (newCategory)) return;

        setCategorias ([newCategory, ...categorias])
    }
    console.log(categorias)
    return(
        <>
            <h1>GifExpertApp</h1>
            
            {/* <input type="text" onChange={handleChange}/> */}
            {/* <AddCategory setCategorias={setCategorias}/> */}
            <AddCategory onNewCategory = {onAddCategorias} />


            {/* <button onClick={ onAddCategorias }>Agregar</button> */}

        
            {categorias.map((category)=>(
                <GifGrid key={category} category={category}/>
                    )
                )
            }
       
               

        </>
    )
}