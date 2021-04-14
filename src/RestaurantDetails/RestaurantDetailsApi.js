import React,{Component} from 'react';
import './RestaurantDetails.css';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';


const url = 'https://zomato-like-rest.herokuapp.com/restaurantDetails/';


class RestaurantDetails extends Component{
    constructor(props){
        super(props)

        this.state ={
            rest:{
                "Cuisine":[
                    {
                        "name":''
                    },
                    {
                        "name":''
                    }
                ]
            }
        }
    }

    // function to navigate to previous page
    onBack = () =>{
        let mealId = sessionStorage.getItem('address')
        this.props.history.push(`/list/${mealId}`)
    }
     
    render(){
        console.log(this.props.match.params.id);
        
        
        
        
        
        
        var {rest} = this.state
        return(
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <h2>{rest.name}</h2>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-12">
                                <img className='img-responsive' src={rest.thumb} style={{height:430}} alt='restImage'></img>
                                
                            </div>
                        <div className='col-md-12'>
                            <h3> {rest.name} </h3>
                            <h4> {rest.locality} </h4>
                            <h4> {rest.address} </h4>
                            
                        </div>

                    </div>
                    </div>
                    <br/>
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="container">
                                    <div>About this Place</div>
                                    <div> {rest.Cuisine[0].name}, {rest.Cuisine[1].name} </div>
                                    <h5>Locality : {rest.locality} </h5>
                                    <h5>Cost for 2 : {rest.cost} </h5>
                                    <h5>Address: {rest.address} </h5>
            {/* How to do it?? How to add cuisine       <h5>Cuisine: {rest.Cuisine[0].name} </h5> */}
                                     
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="container">
                                    <h5>Contact Number : 7349337775 </h5>
                                    <h5>Locality : {rest.locality} </h5>
                                    <h5>E-mail: mohammed007aliyan@gmail.com </h5>
                                     
                                </div>
                            </TabPanel>
                        </Tabs>
                        <br/>
                        <br/>
                        <div>
                            <div className='btn btn-danger btn-lg' onClick={this.onBack}> Back </div>
                            &nbsp; &nbsp;
                                {/* start from here your development practise part...OK
                                 */}
                                <Link className='btn btn-success btn-lg' to={`/orders/${this.props.match.params.id}`}> Placeorder </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            )
}
    componentDidMount(){
    let restID = this.props.match.params.id;
    axios.get(`${url}${restID}`)
    .then((response) =>{this.setState({rest:response.data[0]})})
    }
}
export default RestaurantDetails;


                    


