import React from "react";
import "./Content.css";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoMdRadioButtonOff } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { PiTicketFill } from "react-icons/pi";
import { IoIosCalendar } from "react-icons/io";
import {  IoTime } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";



import images from "../data/images";
import CustomCarousel from "./custom.slider";

const Content = () => {
  return (
    <div className="Main">
      <div className="right-container">
        <h1 id="confirmpay">Confirm & pay</h1>
        <div className="cancellation">
        <IoMdInformationCircleOutline className="info" />
          <h5>Free cancellation</h5>
          <p>Tickets can be cancelled by 13th December, 2022.</p>
        </div>
        <div className="Details">
          <h1>Enter your details</h1>
          <p>
            We'll be sending your tickets to the deatils below. Booking for a
            friend? Add their deatils.
          </p>
          <input id="name" type="text" placeholder="Full name"></input>
          <input
            className="input1"
            type="tel"
            placeholder="Country code"
          ></input>
          <input
            className="input1"
            type="tel"
            placeholder="Phone number"
          ></input>
          <input className="input1" type="email" placeholder="Email"></input>
          <input
            className="input1"
            type="email"
            placeholder="Confirm email"
          ></input>
        </div>
        <p className="underline"></p>
        <div className="Additionalinfo">
          <h1>Additional information</h1>
          <p>We need a few more deatils to complete your reservation</p>
          <input
            className="input1"
            type="email"
            placeholder="Input label"
          ></input>
          <input className="input1" type="email" placeholder="Select"></input>
          <input id="multi" type="text" placeholder="Multiselect"></input>
        </div>
        <p className="underline"></p>

        <div className="paymentcomp">
          <h1>Additional information</h1>
          <p>We need a few more deatils to complete your reservation</p>
          <div id="payment-input">
          
            <div id="creditanddebit">
           
              <p>Credit & Debit card</p>
              <IoMdRadioButtonOn size={25} style={{marginTop:'-1rem'}} />
              <div className="images" style={{position:'absolute', marginTop:'1.5rem',marginLeft:"2rem", padding:'10px', width:'10vw',left:"6.9%"}}>
                <img id="img1" style={{position:'absolute', top:'35%', left:'5%' }} src="visa.png" alt="nothing to show"></img>
                <img id="img2" style={{padding:" 0 10px", position:'absolute',left:'20%',top:'10%'}} src="mastercard.png" alt="nothing to show"></img>
                <img id="img3" style={{ position:'absolute',left:'50%', top:'10%'}} src="diners-club.png" alt="nothing to show"></img>
              </div>
            </div>
            <div id="carddetails"></div>
            <input
              className="input1"
              type="email"
              placeholder="Name on Card"
              
            ></input>
            <input
              className="input1"
              type="email"
              placeholder="Card Number"
            ></input>
            <input
              className="input1"
              type="email"
              placeholder="Expiry date"
            ></input>
            <input
              className="input1"
              type="email"
              placeholder="<CVV/CVC>"
            ></input>
            <p
              className="underline"
              style={{
                width: "90%",
                marginLeft: "2.5rem",
                marginTop: "0.2rem",
              }}
            ></p>


            <div className="paymentdetails2">
              <div className="total-payment">
                <div> <h1>Total payable $XXXX</h1>
                </div>
               <div> 
                <h4 id="saved">You saved price</h4>
                </div>
              </div>
              <h3 id="charged">You will be charged in AED</h3>
              <h5 id="confirm-pay">
          {" "}
          By clicking "confirm & pay", you agree to{" "}
          <span> Tickete's general terms and condition</span> and{" "}
          <span> Cancellation policy.</span>
        </h5>
        <button className="button-right"><MdLock size={20} className="lock1"/>Confirm & pay</button>
            </div>
          </div>
        </div>
        <div id="commingsoon">
           <img style={{position:'absolute'}} src="apple-pay.png"></img>
            <p >Coming soon</p>
            <IoMdRadioButtonOff size={25} />
        </div>
        <div id="commingsoon">
        <img style={{position:'absolute'}}  src="google-pay.png"></img>
            <p>Coming soon</p>
            <IoMdRadioButtonOff size={25}   />
        </div>
        <p style={{marginTop:"2rem"}} className="underline"></p>

        <h4 id="saved1">You saved price</h4>
        <h1 id="totalamount">Total payable:$XXX</h1>
        <div className="charedinAED">
          <h5>You will be charged in AED</h5>
          <p>The price shown here is in US Dollar (USD) as per the current concersion rate. You will be charged in united Arb Emirates Dirham(AED).</p>
        </div>
        <p style={{marginTop:'2rem', width:"87vw"}}  className="underline"></p>

      </div>




      <div className="left-container">
        <div>
          <CustomCarousel>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomCarousel>
        </div>
        <div className="left-components">
          <p id="category">
          <img src="Rating star.png"></img> 4.9<span> (4.5k) category</span>
          </p>
          <h1 id="title">
            Amsterdam open boat canal cruise - live Guiye - from Anne Frank
            House
          </h1>
          <h2 id="details"><PiTicketFill size={20} className="logos"/>ticket type - varient</h2>
          <h2 id="details"><IoIosCalendar size={20}  className="logos"/>day, month date</h2>
          <h6 id="extras">Duration:duration</h6>
          <h2 id="details"><IoTime size={20}  className="logos"/>time</h2>
          <h6 id="extras">operating hours: time to time</h6>
          <h2 id="details"><IoPeopleSharp size={20}  className="logos"/>5 guests</h2>
        </div>
        <p className="dasshed">
          --------------------------------------------------
        </p>
        <div id="summary">
          <h4>View payment summary</h4>
          <p>+</p>
        </div>
        <div className="total-payment">
          <h1>Total payable</h1>
          <h1>$XXXX</h1>
        </div>
        <h4 id="saved">You saved price</h4>
        <h3 id="charged">You will be charged in AED</h3>

        <h5 id="confirm-pay">
          {" "}
          By clicking "cofirm & pay", you agree to{" "}
          <span> Tickete's general terms and condition</span> and{" "}
          <span> cencellation policy.</span>
        </h5>
        <button className="button-left"><MdLock size={20} className="lock" />Confirm & pay</button>
      </div>
    </div>
  );
};

export default Content;
