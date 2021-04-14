import React,{Component} from 'react';
import './search.css';
const lurl = 'https://zomato-like-rest.herokuapp.com/location';
const rurl = 'https://zomato-like-rest.herokuapp.com/restaurant?city=';

class Search extends Component{
    constructor(){
        super()
        this.state = {
            location:'',
            restaurants:''

        }
    }   
    // function to display all cities
    renderCity = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}>
                        {item.city_name} - {item.name}
                    </option>
                )
            })
        }
    }

    // this function gets called every time the value of city changes, and url is called on basis of city.
    // and state gets updated.
    handleCity = (event) =>{
        console.log(event.target.value)
        fetch(`${rurl}${event.target.value}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({restaurants:data})
        })
        

    }
   
    // restaurantsShow = (event) =>{
    //     this.props.rid(event.target.value)
    // }

    // this function fetch the value of restaurants that is stored in state. After handling the event
    // renderRest = (data) =>{
    //     if(data){
    //         return data.map((item)=>{
    //             return(
    //                 <option value={item._id}>
    //                     {item.name}-{item.locality} 
    //                 </option>
    //             )
    //         })
    //     }

    // }
    restValue = (event) =>{
        this.props.rid(event.target.value)
    }
    renderRestaurant = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.name} - {item.locality}
                    </option>
                )
            })
        }
    }
    render(){
        return(
            <div>
            <div className="container">
                <div class="imageContainer">
            <div id="logo">
                <b>e!</b>
            </div>
            <div class="heading">
                Find the Best Restaurants, cafes, bars
            </div>
            <div class="locationSelector">
                <select class="locationDropDown" onChange={this.handleCity}>
                    {/* this onChange event calls handleCity function */}
                    
                    <option> ------Select City------- </option>
                    {/* Function to see all cities */}
                    {this.renderCity(this.state.location)}
                    
                </select>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;

                <select className='locationDropDown' onChange = {this.restValue} >
                    <option>-----Get The Restaurants-----</option>
                    {this.renderRestaurant(this.state.restaurants)}
                </select>
               
            </div>
        </div>
        </div>
        </div>

        )
    }


componentDidMount(){
        fetch(lurl, {method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({location:data})
        })
   
    }



}  


export default Search;