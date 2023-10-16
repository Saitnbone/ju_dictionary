import React from 'react'

export const SearchingComponent = () => {
  return (
    <div>
        <form>
            <input type='text' placeholder='Введите английское слово'></input>
            <input type='text' placeholder='Введите перевод'></input>
            <button>Добавить слово в таблицу</button>
        </form>
    </div>
  )
}

export default SearchingComponent;
