// import React, { useState, useEffect } from 'react'
// import '../AnimatedContainer/animatedContainer.scss'
// import Search from '../SearchSection/Search'
// import Favorites from '../FavoritesSection/Favorites'
// import Settings from '../SettingsSection/Settings'

// const AnimatedContainer = ({setPress, setBackground, background, setIsClosed, isClosed, button, setTextColor, textColor, setIsFavorite, isFavorite, setSelectedSong, selectedSong}) => {

//     function closedContainer() {
//         setIsClosed(true)
//     }

//     const slide = () => {
//         if (button === 'search') {
//             return (<Search setPress={setPress} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>)
//         } else if (button === 'favorite') {
//             return (<Favorites setPress={setPress} setIsFavorite={setIsFavorite} isFavorite={isFavorite} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>)
//         } else if (button === 'settings') {
//             return (<Settings setBackground={setBackground} background={background} setTextColor={setTextColor} textColor={textColor}/>)
//         } 
//     }

//     // useEffect(function() {
//     //     if (slide()) {
//     //         setClosed(false)
//     //     }

//     //     console.log(isClosed)
//     // }, [])



//   return (
//     <div className={isClosed ? 'animated-container closed' : 'animated-container open'}>
//         <div className='animated-content'>
//             <div className='close-btn'>
//                 <i className='bx bx-x bx-sm' onClick={closedContainer}></i>
//             </div>
//             {slide()}
//         </div>
//     </div>
//   )
// }

// export default AnimatedContainer
import React from 'react';
import '../AnimatedContainer/animatedContainer.scss';
import Search from '../SearchSection/Search';
import Favorites from '../FavoritesSection/Favorites';
import Settings from '../SettingsSection/Settings';

const AnimatedContainer = ({
  setPress,
  setBackground,
  background,
  setIsClosed,
  isClosed,
  button,
  setTextColor,
  textColor,
  setIsFavorite,
  isFavorite,
  setSelectedSong,
  selectedSong,
}) => {
  
  const closedContainer = () => {
    setIsClosed(true);
  };

  // Render the proper component based on button value
  const renderContent = () => {
    switch (button) {
      case 'search':
        return <Search setPress={setPress} setSelectedSong={setSelectedSong} selectedSong={selectedSong} />;
      case 'favorite':
        return <Favorites
                 setPress={setPress}
                 setIsFavorite={setIsFavorite}
                 isFavorite={isFavorite}
                 setSelectedSong={setSelectedSong}
                 selectedSong={selectedSong}
               />;
      case 'settings':
        return <Settings setBackground={setBackground} background={background} setTextColor={setTextColor} textColor={textColor} />;
      default:
        return null; // or <div>No content selected</div>
    }
  };

  return (
    <div className={isClosed ? 'animated-container closed' : 'animated-container open'}>
      <div className='animated-content'>
        <div className='close-btn'>
          <i className='bx bx-x bx-sm' onClick={closedContainer}></i>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AnimatedContainer;
