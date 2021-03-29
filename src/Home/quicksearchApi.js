import React,{Component}from 'react';
import './quicksearch.css';
import QuickSearchDisplay from './quicksearchDisplay';
const murl = 'http://localhost:9900/mealtype';


class QuickSearch extends Component{
    constructor(){
        super()
        this.state = {
            mealtype:''
        }
    }

  
    render(){
        return(
           <QuickSearchDisplay mealData = {this.state.mealtype} />
        )
    }
    componentDidMount(){
        fetch(murl, {method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({mealtype:data})
        })
    }
}



export default QuickSearch;