import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from '../Home/home';
import ListingApi from '../RestaurantListing/listingApi';
import RestaurantDetailsApi from '../RestaurantDetails/RestaurantDetailsApi';

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path='/list/:id' component={ListingApi}/>
            <Route exact path="/restaurantdetails/:id" component={RestaurantDetailsApi}/>
        </BrowserRouter>
    )
}
export default Routing;