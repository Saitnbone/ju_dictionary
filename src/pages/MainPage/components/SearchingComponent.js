/*
________________________________________________________________________________________________________________

Данный компонент используется для создания формы добавления новыйх слов в таблицу для последующего изученияю 
Если пользователь не авторизованБ то она по умолчанию будет направлять пользователя на страницу с регистрацией.

________________________________________________________________________________________________________________

This component is used to create a form for adding new words to the table for later study.
If the user is not authorized, then by default it will direct the user to the registration page.

________________________________________________________________________________________________________________

*/ 

import React from 'react'

export const SearchingComponent = () => {
  return (
    <div className='form_block'>
        <form>
            <input className='input_english_word' type='text' placeholder='Введите английское слово'></input>
            <input  className='input_dictionary' type='text' placeholder='Введите перевод'></input>
            <div>
              <button className='button_form'>Добавить слово в таблицу</button>
            </div>
        </form>
    </div>
  )
}

export default SearchingComponent;
