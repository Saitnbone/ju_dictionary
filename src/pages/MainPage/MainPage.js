/*
___________________________________________________________________________________________________________________

Данный компонент используется для объединения других компонентов, которые входят в тег <main>. Компоненты, которые 
используются в данном файле находят в папке components (src/pages/MainPage/components).

___________________________________________________________________________________________________________________

This component is used to combine other components that are included in the <main> tag. Components that
used in this file are found in the components folder (src/pages/MainPage/components).
___________________________________________________________________________________________________________________

*/ 

import React from 'react'
import './mainPage.css'
import GreetingsComponent from './components/GreetingsComponent';
import InformationComponent from './components/InformationComponent';
import SearchingComponent from './components/SearchingComponent';

export const MainPage = () => {
  return (
    <main>
      <div className='main_page_block'>
        <div  className='title_block'>
          <h1 className='title'>English World</h1>
        </div>
        <GreetingsComponent/>
        <InformationComponent/>
        <SearchingComponent />
      </div>
    </main>
  )
};

export default MainPage;