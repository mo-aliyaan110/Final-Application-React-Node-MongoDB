import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import axios from 'axios'

const lurl = 'http://localhost:9900/restaurant?mealtype='

class ListingApi extends Component{
    constructor(props){
        super(props)
        this.state = {
            restaurantsLists:''
        }
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        Filter Here
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
        axios.get(`${lurl}${mealId}`)
        .then((res)=> {this.setState({restaurantsLists:res.data})})
    }
}
export default ListingApi