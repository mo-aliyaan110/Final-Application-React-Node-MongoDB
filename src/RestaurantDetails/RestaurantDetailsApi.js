import React,{Component} from 'react';
import './RestaurantDetails.css';
import axios from 'axios';
import RestaurantDetailsDisplay from './RestaurantDetailsDisplay'
const RDUrl = 'http://localhost:9900/restaurantdetails/'


class RestaurantDetailsApi extends Component{
    constructor(props){
        super(props)
        this.state ={
            restDetails:''
        }
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <RestaurantDetailsDisplay detailsdata = {this.state.restDetails}/>
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount(){
        var restDetailsID = this.props.match.params.id;
        axios.get(`${RDUrl}${restDetailsID}`)
        .then((res) => {this.setState({restDetails:res.data})})
    }
}
export default RestaurantDetailsApi