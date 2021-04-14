import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const durl = 'https://zomato-like-rest.herokuapp.com/restaurantdetails/';
const purl = 'https://zomato-like-rest.herokuapp.com/placeorder';

class Forms extends Component{
    constructor(props){
        super(props)
        this.state = {
            order_id:Math.floor(Math.random()*10000),
            restName:'',
            name:'',
            phone:'',
            address:'',
            email:'',
            noOfPerson:''

        }
    }
    handleName = (event) =>{
        this.setState({name:event.target.value})

    }
    handlePhone = (event) =>{
        this.setState({phone:event.target.value})

    }
    handleAddress = (event) =>{
        this.setState({address:event.target.value})

    }
    handlePersons = (event) =>{
        this.setState({noOfPerson:event.target.value})

    }
    handleEmail = (event) =>{
        this.setState({email:event.target.value})
    }

    handleSubmit = () =>{
        var data = {
            '_id' : this.state.order_id,
            "rest_id": this.state.restName,
            'name': this.state.name,
            'phone': this.state.phone,
            'address': this.state.address,
            'email':this.state.email,
            'persons': this.state.noOfPerson
        }
        
        fetch(purl, 
            {method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        
    })
    .then(this.props.history.push('/vieworder'))    
}

    componentDidMount(){
        var restId = this.props.match.params.id;
        axios.get(`${durl}${restId}`)
        .then((response) =>{this.setState({restName:response.data[0].name})})
    }
    render(){
        return(
            
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        Restaurant Booking
                    </div>
                    <div className="panel-body">
                        <form>
                        <div className='form-group'>
                            <label className='control-lable'> Order Id </label>
                            <input className='form-control' type='text' name='orderId' value={this.state.order_id} readOnly />
                        </div> 

                        
                        <div className='form-group'>   
                            <label className='control-label'> Restaurant Name </label>
                            <input className='form-control' type='text' name='restName' readOnly value={this.state.restName} />
                        </div>
                        

                        <div className='form-group'>   
                            <label className='control-label'> Name </label>
                            <input type='text' name='user_name' required className='form-control' placeholder='Name' onChange={this.handleName} value={this.state.name}></input>
                        </div>

                        <div className='form-group'>   
                            <label className='control-label'> Phone </label>
                            <input type='number' name='phone' className='form-control' placeholder='phone' onChange={this.handlePhone}  value={this.state.phone}></input>
                        </div>

                        <div className='form-group'>   
                            <label className='control-label'> Address </label>
                            <input type='text' name='address' placeholder='Address' className='form-control' onChange={this.handleAddress} value={this.state.address}></input>
                        </div>
                        <div className='form-group'>   
                            <label className='control-label'> E-mail </label>
                            <input type='email' name='address' className='form-control' placeholder='E-mail' onChange={this.handleEmail} value={this.state.email}></input>
                        </div>

                        <div className='form-group'>   
                            <select className='form-group' name='noOfPersons' onChange={this.handlePersons} value={this.state.noOfPerson}>
                                <option>Persons</option>
                                <option>1</option>
                                <option>2</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </div>

                        <Link to={`/rest/${this.props.match.params.id}`} className='btn btn-danger '>Cancel</Link>
                        &nbsp;
                        &nbsp;
                        <div className='btn btn-success' onClick={this.handleSubmit} >
                            Book
                        </div>
                        </form>
                    </div>
                        
                        
                        
                        
                </div>
            </div>
        
        )
    }
}

export default Forms;