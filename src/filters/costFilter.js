import axios from 'axios';
import React, {Component} from 'react';

const baseurl = 'https://zomato-like-rest.herokuapp.com/restaurantlist'
class CostFilter extends Component{
   
    handleCost = (event) =>{

        let mealtype = sessionStorage.getItem('address')
        let costType = (event.target.value).split(',');
        let lcost = costType[0];
        let hcost = costType[1];

        let cturl;
        if(event.target.value === " "|| event.target.value === ""){
            cturl = `${baseurl}/${mealtype}`
        }
        else{
            cturl = `${baseurl}/${mealtype}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(cturl)
        .then((response)=> {this.props.costData(response.data)})
        
        
    }
    render(){
        return(
            <React.Fragment>
                <center> <h4>Cost Filter</h4> </center>
                <div onChange={this.handleCost}>
                    <label className='radio'>
                        <input type='radio' value='' name='cuisine'/> All 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='100,200' name='cuisine'/> 100-200 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='201,300' name='cuisine'/> 201-300 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='301,400' name='cuisine'/> 301-400 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='401,500' name='cuisine'/> 401-500 
                    </label>
                    <label className='radio'>
                        <input type='radio' value='501,600' name='cuisine'/> 501-600 
                        
                    </label>
                </div>
            </React.Fragment>
        )
    }
}
export default CostFilter;