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