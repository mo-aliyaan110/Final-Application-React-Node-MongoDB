import React from 'react';


const OrderDisplay = (props) =>{
    const renderTable = ({orderData}) =>{
        if(orderData){
            return orderData.map((item)=>{
                return(
                    <tr>
                        <td> {item._id} </td>
                        <td> {item.rest_id} </td>
                        <td> {item.name} </td>
                        <td> {item.phone} </td>
                        <td> {item.persons} </td>
                        <td> {item.address} </td>
                        <td> {item.email} </td>
                        <td> Placed </td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className='container'>
            <center> <h3> Booking List </h3> </center>
            
                <div className='table '>
                    <thead>
                        <tr>
                            <th> Order ID </th>
                            <th> Rest Name </th>
                            <th> Name </th>
                            <th> Phone </th>
                            <th> Person </th>
                            <th> Address </th>
                            <th> E-mail </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                </div>
            
            
        </div>
    )
}
export default OrderDisplay;