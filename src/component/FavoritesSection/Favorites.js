import React, { useEffect, useState } from 'react'
import '../FavoritesSection/favorites.scss'
import ListDisplay from '../ListDisplay/ListDisplay'

const Favorites = ({setPress, setIsFavorite, isFavorite, setSelectedSong, selectedSong}) => {
  const [audioData, setAudioData] = useState()

  useEffect(function() {
    setAudioData(isFavorite)
  }, [])

  return (
    <div className='favorite-content'>
      <div className='favorite-title'>
        <p>All Favorites</p>
      </div>
      <ListDisplay setPress={setPress} setIsFavorite={setIsFavorite} isFavorite={isFavorite} audioData={audioData} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>
    </div>
  )
}

export default Favorites