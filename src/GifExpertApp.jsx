import { useState } from 'react'
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

    const onNewCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;

        setCategories([  newCategory, ...categories ]);

    }

  return (
    <> 
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ onNewCategory }  
        />

        { categories.map( ( category ) => ( 
            <GifGrid 
                key={ category } 
                category={category}
            /> 
            )   
        ) }
    </>
    
  )
}
