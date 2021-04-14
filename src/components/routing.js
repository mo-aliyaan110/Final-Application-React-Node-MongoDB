import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from '../Home/home';
import ListingApi from '../RestaurantListing/listingApi';

import RestaurantDetails from '../RestaurantDetails/RestaurantDetailsApi';
import Forms from '../Orders/forms'
import Orders from '../Orders/orderApi'

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path='/list/:id' component={ListingApi}/>
            <Route exact path="/rest/:id" component={RestaurantDetails}/>
            <Route exact path='/orders/:id' component={Forms} ></Route>
            <Route exact path='/vieworder/' component={Orders}/>
        </BrowserRouter>
    )
}
export default Routing;