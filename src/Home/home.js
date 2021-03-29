import React from 'react';
import Search from './Search';
import QuickSearch from './quicksearchApi'

const Home = () =>{
    return(
        <div>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home;