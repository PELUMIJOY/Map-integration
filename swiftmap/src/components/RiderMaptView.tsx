import React, {useState, useRef, useEffect} from 'react'
import Mastercard from '../asset/Mastercard.svg'
import mapview from "./Mapview.module.css" 
import Ridermap from './Ridermaps/Ridermap'
import {Autocomplete, DirectionsRenderer } from "@react-google-maps/api"

const RiderMapView = () => {
  // const [enter, setEnter] = useState(false)
  const [directionResponse, setDirectionResponse] = useState<any | null>(null)
 const [distance, setDistance] = useState<any | null>("");
 const [duration, setDuration] = useState<any | null>("");

const pickupLocationRef = useRef<any | null>();
 const deliveryLocationRef = useRef<any | null>();

async function calculatorRoute() {
  if(pickupLocationRef.current.value === "" || deliveryLocationRef.current.value === "") {
    return
  }

  const directionsService = new google.maps.DirectionsService();
  const result = await directionsService.route({
    origin: pickupLocationRef.current.value,
    destination: deliveryLocationRef.current.value,
    travelMode: google.maps.TravelMode.DRIVING
  })

  setDirectionResponse(result);
  // setDistance(result.routes[0].legs[0].distance.text);
  // setDuration(result.routes[0].legs[0].duration.text);

}



  return (
    <div className={mapview.mapContainer}>
      <div className={mapview.details}>
        <h3>Request details</h3>
        <form action="" className={mapview.formCtn}>
          <div className={mapview.divInputCtn}>
            <label className={mapview.divInputCtnLbl}>Pickup Location</label>
            <Autocomplete>
              <input type="text" placeholder='pickup location' ref={pickupLocationRef}/>
            </Autocomplete>
          </div>
          <div className={mapview.divInputCtn}>
            <label className={mapview.divInputCtnLbl}>Delivery Location</label>
            <Autocomplete>
              <input type="text" placeholder='pickup location' ref={deliveryLocationRef}/>
            </Autocomplete>
          </div>
          <div className={mapview.divInputCtn}>
            <label className={mapview.divInputCtnLbl}>Package details</label>
            <p>Package details</p>
          </div>
          <div className={mapview.divInputCtn}>
            <label className={mapview.divInputCtnLbl}>Drop off contact</label>
            <p>Drop off  Drop off contactDrop off </p>
          </div>
          <div className={mapview.divInputCtn}>
            <label className={mapview.divInputCtnLbl}>Payment method</label>
            <p>Payment method</p>
          </div>

          <div className={mapview.PymtCard}>
            <div>
              <input type="radio" />
              <label htmlFor="">Card payment</label>
            </div>

            <div>
              <img src={Mastercard} alt="Mastercard logo" />
            </div>
            
          </div>

          <div className={mapview.btnGroup}>
            <button onClick={calculatorRoute}>Accept Request</button>
            <button>Decline Request</button>
          </div>

        </form>
      </div>
      
      <div className={mapview.mapV}>
        <Ridermap/>
      </div>
      
    </div>
  )
}

export default RiderMapView