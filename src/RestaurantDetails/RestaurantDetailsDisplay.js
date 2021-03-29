import React from 'react';

const RestaurantDetailsDisplay = (props) =>{
    const renderDetails = ({detailsdata}) =>{
        if(detailsdata){
            return detailsdata.map((item) =>{
                return(
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                {item.thumb}
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else(
            <div>
            <img src="/img/Spinner-1s-200px.gif" alt='LoaderGif'></img>
            </div>
        )
    }
    return(
        <div>
            <div className="row">
                <div className='col-lg-1'>
                    {renderDetails(props)}
                </div>
            </div>
        </div>
    )
}
export default RestaurantDetailsDisplay;