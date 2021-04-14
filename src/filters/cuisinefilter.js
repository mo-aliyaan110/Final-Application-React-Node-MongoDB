import React, {Component} from 'react';
import axios from 'axios';
const baseUrl = 'https://zomato-like-rest.herokuapp.com/restaurantlist'

class CuisineFilter extends Component{
    constructor(){
        super()
        this.state = {
            cuisine:''
        }
    }
    cuisineHandle = (event) =>{
        let cuisineType = event.target.value;
        let mealtype = sessionStorage.getItem('address')
        let curl;
        if(cuisineType === ''){
            curl=`${baseUrl}/${mealtype}`
        }
        else{
            curl = `${baseUrl}/${mealtype}?cuisine=${cuisineType}`
        }
        axios.get(curl)
        .then((response) => {this.props.result(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center> <h4>Cuisine Filter</h4> </center>
                <div onChange = {this.cuisineHandle}>
                    <label className='radio'>
                        <input type='radio' value='' name='cuisine'/> All 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='1' name='cuisine'/> North Indian 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='2' name='cuisine'/> South Indian 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='3' name='cuisine'/> Chinese 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='4' name='cuisine'/> Fast Food 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='5' name='cuisine'/> Street Food 
                    </label>
                </div>
            </React.Fragment>
        )
    }
}
export default CuisineFilter;