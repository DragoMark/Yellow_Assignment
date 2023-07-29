// import React from 'react'
import SearchButton from '../SearchButton/SearchButton'


const Display = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-10">
      <h1 className="text-2xl text-[color:vara(--text-color1)]">
        Find Restaurants Near You!
      </h1>

      <div>
        <SearchButton />
      </div>

      <div className="flex flex-row justify-around items-start">
        <div className="List">
          
        </div>
        <div className="googleMaps">

        </div>
      </div>
    </div>
  )
}

export default Display