import React,{Component} from 'react'
import axios from 'axios'
import OrderDisplay from './orderDisplay'
const ourl = 'https://zomato-like-rest.herokuapp.com/orders'

class Orders extends Component{
    constructor(){
        super()
        this.state={
            order:''
        }
    }
    render(){
        return(
            <div>
                <OrderDisplay orderData={this.state.order} />
            </div>
        )
    } 
    // new and simpler form of calling the api
    async componentDidMount(){
        const response = await axios.get(`${ourl}`)
        this.setState({order:response.data})
    }
}
export default Orders