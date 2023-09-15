import React from 'react'
import Flyer from '../components/Flyer'
import SearchBar from '../components/SearchBar'
import Popular from '../components/Popular'


function Home() {
  return (
    <div>
        <Flyer/>
        <SearchBar/>
        <Popular/>
    </div>
  )
}

export default Home