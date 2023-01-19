import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setInputValue('');

    onNewCategory(inputValue.trim());
  }

  return (
    <form onSubmit={handleSubmit} className='text-2xl text-center mt-6 relative'>
      <input
        className="text-black bg-amber-200 rounded-xl text-center placeholder-black placeholder-opacity-20 dark:bg-slate-600 dark:placeholder-opacity-50"
        type="text"
        placeholder="Search Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
