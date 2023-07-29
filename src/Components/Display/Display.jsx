// import React from 'react'
import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const Display = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDBaA2IT13I7tOYSQcgzu3iXLi4rA-CfQA",
    libraries: ['places'],
  })

  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.006 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    })
  }, [])

  const getRestaurants = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 11,
    })
    const request = {
      location: location,
      radius: '50000',
      type: ['restaurant'],
    }
    const service = new window.google.maps.places.PlacesService(map)
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < (results.length < 1000 ? results.length : 1000) ; i++) {
          const place = results[i]
          createMarker(results[i])
        }
      }
    })
    const createMarker = (place) => {
      const marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location,
      })
      window.google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(place.name || '')
        infowindow.open(map)
      })
    } 

  }
  
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
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              zoom={15}
              center={location}
              id="map"
            >

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