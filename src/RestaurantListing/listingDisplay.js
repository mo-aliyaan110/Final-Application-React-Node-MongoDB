import React from 'react';
import { Link } from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) =>{
    const renderList = ({restListData}) =>{
        if(restListData){
            if(restListData.length>0){



                return restListData.map((item)=>{
                    return(
                        <div className='Item' id={item._id}>
                            <div className='row'>
                               
                                <div className='col-md-3'>
                                    <img className='Image' alt='Picture_of_restaurant'  src={item.thumb}/>
                                </div>
                                 
                                <div className='col-md-9'>
                                    <div className='rest_name'>
                                        <Link to={`/rest/${item._id}`}>{item.name}</Link>
                                        <div className="city_name"> {item.city_name} </div>
                                        <div className="address-text">{item.locality} </div>
                                        <div className="address-text">{item.address} </div>
    
                                    </div>
                                  
                                </div>
                                
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='CUISINES-COST-FOR-TWO'> Cuisine Type:</div>
                                    <div className='CUISINES-COST-FOR-TWO'> Cost For Two:</div>
                                </div>
                                <div className='col-md-9'>
                                    <div className='Bakery-700'>{item.Cuisine[0].name}, {item.Cuisine[1].name}</div>
                                    <div className='Bakery-700'> {item.cost} </div>
                                </div>
    
                            </div>
    
                        </div>
                    )
                })


                
            }
            else{
                return(
                    <div>
                        <center> <h4> No Data Present </h4> </center>    
                    </div>
                )
            }
            
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