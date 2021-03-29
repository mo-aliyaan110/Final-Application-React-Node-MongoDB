import React from 'react';
import { Link } from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) =>{
    const renderList = ({restListData}) =>{
        if(restListData){
            return restListData.map((item)=>{
                return(
                    <div className='Item' id={item._id}>
                        <div className='row'>
                           
                            <div className='col-md-3'>
                                <img className='Image' src={item.thumb}/>
                            </div>
                            <Link to={`/restaurantdetails/:${item._id}`}>
                            <div className='col-md-9'>
                                {item.name}
                                <h4> {item.address} </h4>
                                <h4 className='textofcost'> Cost Per Person : {item.cost} </h4>
                                <h4> Contact: {item.contact_number} </h4>
                            </div>
                            </Link>
                        </div>

                    </div>
                )
            })
        }
        else{
            return(
                <div>
                    <img src="/img/Spinner-1s-200px.gif" alt='LoaderGif'></img>
                </div>
            )
        }
    }
    
    
    
    return(
        <div>
            <div className='container'>
                <div className='main-heading'>
                    <div className='row'>
                        <div className='col-md-1'>
                            {renderList(props)}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default ListingDisplay;