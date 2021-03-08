import React from 'react'
import {BiCheckShield } from 'react-icons/bi'
import {BsCheckCircle}  from 'react-icons/bs'
import {RiMoneyDollarCircleLine,RiCustomerService2Fill} from 'react-icons/ri'
import './advantage.css'
function Advantage() {
    return (
        <div className=" row advDiv">
           <div className="left col-md-3">
               <div className="advTitle">
                   <h2>Why Choose Us</h2>
                   </div>
                   <div className="advPara">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, deleniti. Praesentium nesciunt quaerat, necessitatibus distinctio possimus non dolores nisi error.
                   </div>
                   <div className="advBtn">
                       Contact Us
                   </div>
               </div>
           
           <div className="right col-md-6 row">
               <div className="advFeature col-md-5 row secure">
                   <div className="iconDiv col-xs-6">
                       <BiCheckShield/>
                   </div>
                   <div className="detailDiv col-xs-6">
                       <div className="detailTitle"> High Security </div>
                       <div className="detailPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, odit?</div>
                   </div>
               </div>
               <div className="advFeature col-md-5 row quality">
               <div className="iconDiv col-xs-6">
                       <BsCheckCircle/>
                   </div>
                   <div className="detailDiv col-xs-6">
                       <div className="detailTitle"> Quality Assurance</div>
                       <div className="detailPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, odit?</div>
                   </div>
               </div>
               <div className="advFeature col-md-5 row offer">
               <div className="iconDiv col-xs-6">
                       <RiMoneyDollarCircleLine/>
                   </div>
                   <div className="detailDiv col-xs-6">
                       <div className="detailTitle"> Attractive Offers</div>
                       <div className="detailPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, odit?</div>
                   </div>
               </div>
               <div className="advFeature col-md-5 row support">
               <div className="iconDiv col-xs-6">
                       <RiCustomerService2Fill/>
                   </div>
                   <div className="detailDiv col-xs-6">
                       <div className="detailTitle">  Customer Support</div>
                       <div className="detailPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, odit?</div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Advantage
