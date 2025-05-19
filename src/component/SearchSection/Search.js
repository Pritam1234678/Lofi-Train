import React, { useState, useEffect } from 'react'
import '../SearchSection/search.scss'
import ListDisplay from '../ListDisplay/ListDisplay'
import audioFiles from '../../utils/audioData'

const Search = ({setPress, setSelectedSong, selectedSong}) => {
  const [audioData, setAudioData] = useState()
  const [search, setSearch] = useState('')

  useEffect(function() {
    if (search === '') {
      setAudioData(audioFiles)
    }
  }, [])

  function handleSearch(e) {
      setAudioData(audioFiles.filter(audio => {
        return audio.title.toLowerCase().includes(e.target.value.toLowerCase()) || audio.artist.toLowerCase().includes(e.target.value.toLowerCase())
      }))  
  }

  return (
    <div className='search-content'>
      <input type='text' placeholder='Search' onChange={handleSearch}/>
      <ListDisplay setPress={setPress} audioData={audioData} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>
    </div>
    
  )
}

export default Search