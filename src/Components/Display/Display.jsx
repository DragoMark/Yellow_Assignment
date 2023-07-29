// import React from 'react'
import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const Display = () => {

  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.006 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    })
  }, [])

  //Get 1000 restarants closest to location from google maps API
  const getRestaurants = () => {
    console.log("getRestaurants")
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+location.lat+","+location.lng+"&radius=1000&type=restaurant&key=AIzaSyB-9Q0RZfQk1bq8J4N1fUq8K7y0m5pYQ0I";
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDBaA2IT13I7tOYSQcgzu3iXLi4rA-CfQA",
  })

  
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <h1 className="text-2xl text-[color:vara(--text-color1)]">
        Find Restaurants Near You!
      </h1>

      <div>
        <button onClick = {getRestaurants} className="py-3 px-6 rounded-xl bg-[color:var(--primary-color)] text-[color:var(--text-color2)] text-xl hover:drop-shadow-xl">
        <span>Scan</span>
      </button>
      </div>

      <div className="w-full flex flex-row justify-around items-start">
        {/* <div className="List">
          List of Past Searches 
        </div> */}

        <div className="w-1/2 h-[25rem]">
          <h1>map</h1>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              zoom={15}
              center={location}
            >
              <Marker position={location} />
            </GoogleMap>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Display