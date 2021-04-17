import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import axios from 'axios'
import CuisineFilter from '../filters/cuisinefilter';
import CostFilter from '../filters/costFilter';

const lurl = 'https://zomato-like-rest.herokuapp.com/restaurant?mealtype='

class ListingApi extends Component{
    constructor(props){
        super(props)
        this.state = {
            restaurantsLists:''
        }
    }
    setFilterPervalue(filtereddata){
        this.setState({restaurantsLists:filtereddata})
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        
                        <CuisineFilter result = {(data)=>{this.setFilterPervalue(data)}} />
                        <br/>
                        <hr/>
                        <br/>
                        {/* we are disabling the cost filter because its not working || fix it later */}
                        {/* <CostFilter costData = {(data)=>{this.setFilterPervalue(data)}} /> */}
                    </div>
                    <div className='col-md-10'>
                        <ListingDisplay restListData = {this.state.restaurantsLists}/>

                    </div>
                </div>

            </div>
        )
    }
    componentDidMount(){
        var mealId = this.props.match.params.id
        sessionStorage.setItem('address',mealId)
        axios.get(`${lurl}${mealId}`)
        .then((res)=> {this.setState({restaurantsLists:res.data})})
    }
}
export default ListingApi