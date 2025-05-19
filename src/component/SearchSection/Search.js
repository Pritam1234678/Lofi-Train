// import React, { useState, useEffect } from 'react'
// import '../SearchSection/search.scss'
// import ListDisplay from '../ListDisplay/ListDisplay'
// import audioFiles from '../../utils/audioData'

// const Search = ({setPress, setSelectedSong, selectedSong}) => {
//   const [audioData, setAudioData] = useState()
//   const [search, setSearch] = useState('')

//   useEffect(function() {
//     if (search === '') {
//       setAudioData(audioFiles)
//     }
//   }, [])

//   function handleSearch(e) {
//       setAudioData(audioFiles.filter(audio => {
//         return audio.title.toLowerCase().includes(e.target.value.toLowerCase()) || audio.artist.toLowerCase().includes(e.target.value.toLowerCase())
//       }))  
//   }

//   return (
//     <div className='search-content'>
//       <input type='text' placeholder='Search' onChange={handleSearch}/>
//       <ListDisplay setPress={setPress} audioData={audioData} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>
//     </div>
    
//   )
// }

// export default Search
import React, { useState, useEffect } from 'react';
import '../SearchSection/search.scss';
import ListDisplay from '../ListDisplay/ListDisplay';
import audioFiles from '../../utils/audioData';

const Search = ({ setPress, setSelectedSong, selectedSong, isFavorite, setIsFavorite }) => {
  const [audioData, setAudioData] = useState(audioFiles);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      setAudioData(audioFiles);
    }
  }, [search]);

  function handleSearch(e) {
    const input = e.target.value;
    setSearch(input);

    const filtered = audioFiles.filter(audio =>
      audio.title.toLowerCase().includes(input.toLowerCase()) ||
      audio.artist.toLowerCase().includes(input.toLowerCase())
    );

    setAudioData(filtered);
  }

  return (
    <div className='search-content'>
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={handleSearch}
      />
      <ListDisplay
        setPress={setPress}
        audioData={audioData}
        setSelectedSong={setSelectedSong}
        selectedSong={selectedSong}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
      />
    </div>
  );
};

export default Search;
