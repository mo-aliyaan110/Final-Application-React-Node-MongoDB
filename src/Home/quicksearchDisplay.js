import React from 'react';
import {Link} from 'react-router-dom';
 
const QuickSearchDisplay = (props) =>{
    const listMeals = ({mealData}) =>{
        if(mealData){
            return mealData.map((item)=>{
                return(
                    <Link to={`/list/${item.mealtype}`}>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3 ">
                            <div className="img mr-2">
                                <img className="bf img-responsive" src={`./img/${item.name}.jpg`} alt=""/>
                        
                            </div>
                                
                                <div className="imgcon p-3">
                                    
                                    <h5 className="heading" > {item.name} </h5>
                                    <p className="des"> Start your day with 
                                        exclusive breakfast 
                                        options </p>
                                </div> 
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="container">

                
                <h1 className="heading"> Quick Search </h1>
                <p className="des"> Discover restaurants by type of meal </p>
                
                <div className='row'>
                    {listMeals(props)}
                </div>    
                
                    
          
        </div>
       
            
           
    
)
    
}
export default QuickSearchDisplay;