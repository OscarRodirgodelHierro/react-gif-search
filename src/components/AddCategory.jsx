import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target } ) => setInputValue(target.value);

    const onSubmit = ( event ) => {
        const inputTrim = inputValue.trim();
        event.preventDefault();

        if ( inputTrim.length <= 1 ) return;

        // setCategories((categories) =>  [...categories, inputValue ]);
        onNewCategory( inputTrim );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value = { inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
