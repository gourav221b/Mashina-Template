import React from 'react'
import './featured.css'
import Heading from '../heading/Heading'
import Car from '../../data/cars.json';
import {Link} from 'react-router-dom';
import * as Icon from 'react-icons/gi'
function Featured() {
    return (
        <div className="FeaturedDiv">
            <Heading title="Featured Cars" details="Lorem ipsum dolor sit amet consectetur."/>
           <div className="row carWrapper">
        {Car.length ? Car.map(car => (
      <div className="filterDiv col-md-4" key={car.id} data-category={car.category}>
        <div className="blogImage">
            <img src={car.image} alt={car.name}/>
            {car.tag=="Featured"?   <span className="tag featured">{car.tag}</span>: 
            car.tag=="Sale"?<span className="tag Sale">{car.tag}</span> :<span className="tag Special">{car.tag}</span>
            
            }
          
      
        </div>
        <div className="carDetails">
            <div className="carName">{car.name}</div>
            <div className="address"><Icon.GiPositionMarker />&nbsp;{car.location}</div>
            <span className="price"><span>{car.price}</span>/{car.per}</span>
            <div className="carIconWrapper row">
                <div className="col-md-4 carIcon distance">
                    <Icon.GiRoad /> &nbsp; {car.distance}
                </div>

                <div className="col-md-4 carIcon transmission">
                    <Icon.GiGears /> &nbsp; {car.transmission}
                </div>

                <div className="col-md-4 carIcon date">
                    <Icon.GiCalendar /> &nbsp; {car.year}
                </div>
                
                <div className="col-md-4 carIcon fuel">
                    <Icon.GiFuelTank /> &nbsp; {car.fuel}
                </div>
             
                <div className="col-md-4 carIcon make">
                    <Icon.GiCarWheel /> &nbsp; {car.make}
                </div>
                <div className="col-md-4 carIcon color">
                    <Icon.GiDrop /> &nbsp; {car.color}
                </div>
            </div>
        
        </div>
        </div>
        
   
        )) :<div> Blog Section is currently empty. Check back in a few days <br/><br/></div>}   
        </div> 
        </div>
    )
}

export default Featured
