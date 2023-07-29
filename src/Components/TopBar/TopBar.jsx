// import React from 'react'
import Logo from '../../assets/logo-modified.png'

const TopBar = () => {
  return (
    <div className="py-3 w-2/3 drop-shadow-xl flex flex-row justify-center items-center bg-[color:var(--primary-color)] rounded-2xl">
      <img className="px-4 h-10" src={Logo} alt="Logo.png"/>

      <h1 className="text-3xl text-[color:vara(--text-color)]">
        Restaurant Finder
      </h1>
    </div>
  )
}

export default TopBar