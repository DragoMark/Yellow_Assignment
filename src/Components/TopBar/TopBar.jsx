// import React from 'react'
import Logo from '../../assets/logo-modified.png'

const TopBar = () => {
  return (
    <div className="w-full my-8  flex flex-row justify-center items-center">
      <img className="px-4 h-10" src={Logo} alt="Logo.png"/>

      <h1 className="text-3xl text-[color:vara(--text-color)]">
        Restaurant Finder
      </h1>
    </div>
  )
}

export default TopBar