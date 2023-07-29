// import React from 'react'

const SearchButton = () => {

  const getRestaurants = () => {
    console.log("Hi!")
  }

  return (
    <div>
      <button onClick = {getRestaurants} className="py-3 px-6 rounded-xl bg-[color:var(--primary-color)] text-[color:var(--text-color2)] text-xl hover:drop-shadow-xl">
        <span>Scan</span>
      </button>
    </div>
  )
}

export default SearchButton