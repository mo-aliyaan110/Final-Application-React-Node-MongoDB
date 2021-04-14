import React from 'react';
import Search from './Search';
import QuickSearch from './quicksearchApi'

const Home = (props) =>{
   
    const chooseRest = (data) =>{
        props.history.push(`/rest/${data}`)
    }


    return(
        <div>
            <Search rid = {(data)=>{chooseRest(data)}}/>
            <QuickSearch/>
        </div>
    )
}

export default Home;