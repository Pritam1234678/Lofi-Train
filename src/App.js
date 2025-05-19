// import './App.scss';
// import { useEffect, useState, useRef } from 'react';
// import Navbar from './component/Navbar/Navbar';
// import Loader from './component/Loader/Loader';
// import fullDate from './utils/getFullDate'
// import lofiImages from './imageData';
// import audioFiles from './utils/audioData';

// function App() {
//   const [day, setDay] = useState()
 
//   const [background, setBackground] = useState(lofiImages[0].image)
//   const [textColor, setTextColor] = useState(lofiImages[0].textColor)
//   const [isFavorite, setIsFavorite] = useState()

//   const [selectedSong, setSelectedSong] = useState(audioFiles[0])

//   const [press, setPress] = useState(0)

//   const audioElem = useRef()
//   const clickRef = useRef()

//   useEffect(function() {
//     setInterval(function() {
//       setDay(fullDate.fullDay().map(date => {
//         if (!date) {
//           return ('')
//         } else {
//           return (date)
//         }
//       }))
//     }, 1000)
//   }, [])

//   useEffect(function() {
//     setIsFavorite(audioFiles.filter(audio => {
//       return audio.isFavorite === true
//     }))
//   }, [day])

//   useEffect(function() {
//     if (onPlaying() === 100) {
//       setSelectedSong(audioFiles[(audioFiles.indexOf(selectedSong) + 1) % audioFiles.length])
//     }

//   }, [onPlaying])

//   function playPause() {
//     if (press === 0) {
//       audioElem.current.play();
//       setPress(prev => prev + 1)
//     } else if (press === 1) {
//       audioElem.current.pause();
//       setPress(prev => prev - 1)
//     }
//   }

//   // Gets the current time of the song relative to the total duration of the song
//   function onPlaying() {
//     const totalTime = audioElem.current?.duration
//     const currentTime = audioElem.current?.currentTime

//     const duration = currentTime / totalTime
    
//     return duration * 100
//   }

//   // Checks the width on click of the duration bar and plays the music from the point of the click
//   function checkWidth(e) {
//     let width = clickRef.current?.clientWidth
//     const offset = e.nativeEvent?.offsetX

//     const divprogress = (offset / width) * 100

//     audioElem.current.currentTime = divprogress / 100 * audioElem.current?.duration
//   }

//   // Skip foreward button
//   function nextSong() {
//     setSelectedSong(audioFiles[(audioFiles.indexOf(selectedSong) + 1) % audioFiles.length])
//     audioElem.current.currentTime = 0
//     setPress(0)
//   }

//   // Skip backward button
//   function previousSong() {
//     setSelectedSong(audioFiles[((audioFiles.indexOf(selectedSong) + audioFiles.length) - 1) % audioFiles.length])
//     audioElem.current.currentTime = 0
//     setPress(0)
//   }

//   if (!day) return <Loader/>

  

//   return (
//     <div className="container" style={{ backgroundImage: 'url('+ background + ')', color: textColor}}>
//       <audio src={selectedSong.file} ref={audioElem}/>
//       <div className='cover'></div>
//       <Navbar setPress={setPress} setBackground={setBackground} background={background} setTextColor={setTextColor} textColor={textColor} setIsFavorite={setIsFavorite} isFavorite={isFavorite} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>
//       <main>
//         <section className='middle-section'>
//           <div className='date-music-play'>
//             <div className='full-date'>
//               <h2>{day[0].currentDay}</h2>
//               <h4>{day[0].currentMonth} {day[0].currentNum}, {day[0].currentYear}</h4>
//             </div>
//             <div className='music-player'>
//               <div className={press === 0 ? 'current-play-image' : 'current-play-image spin'}>
//                 <img src={selectedSong?.image} alt={selectedSong?.title} />
//               </div>
//               <div className='current-play-title-buttons-radio'>
//                 <div className='current-play-title-buttons'>
//                   <div className='current-play-title'>
//                     <p>{selectedSong?.title}</p>
//                     <p>{selectedSong?.artist}</p>
//                   </div>
//                   <div className='current-play-buttons'>
//                     <div className='rewind' onClick={previousSong}>
//                       <i className='bx bx-rewind bx-sm'></i>
//                     </div>
//                     <div className='start-pause' onClick={playPause}>
//                       {press === 0 ? <i className='bx bx-play bx-sm'></i> : <i className='bx bx-pause bx-sm'></i>}
//                     </div>
//                     <div className='forward' onClick={nextSong}>
//                       <i className='bx bx-fast-forward bx-sm'></i>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='current-play-range' style={{backgroundColor: textColor + '50'}} onClick={checkWidth} ref={clickRef}>
//                   <div className='seek-bar' style={{ backgroundColor: textColor + '90', width: onPlaying() + '%'}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className='bottom-section'>
//           <div className='weather-time-welcome'>
//             <div className='weather-time'>
//               <div className='weather-forecast'>
//                 <div className='weather-icon'>
//                   <p>Good {day[0].greeting}, {localStorage.getItem('name')}! It is</p>
//                 </div>
//               </div>
//               <div className='full-time'>
//                 <h1>{day[0].currentHour}<span id='animated-colon'>:</span>{day[0].currentMinute}</h1>
//               </div>
//             </div>
//             <div className='welcome'>
//               <h4>Welcome to</h4>
//               <h3>Lofi Train</h3>
//             </div>
//           </div>
//         </section>
//       </main>
//       <div>

//       </div>
      
//     </div>
//   );
// }

// export default App;
import './App.scss';
import { useEffect, useState, useRef } from 'react';
import Navbar from './component/Navbar/Navbar';
import Loader from './component/Loader/Loader';
import fullDate from './utils/getFullDate'
import lofiImages from './imageData';
import audioFiles from './utils/audioData';

function App() {
  const [day, setDay] = useState([]);
  const [background, setBackground] = useState(lofiImages[0].image)
  const [textColor, setTextColor] = useState(lofiImages[0].textColor)
  const [isFavorite, setIsFavorite] = useState()
  const [selectedSong, setSelectedSong] = useState(audioFiles[0])
  const [press, setPress] = useState(0)

  const audioElem = useRef()
  const clickRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(fullDate.fullDay().map(date => date || ''))
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    setIsFavorite(audioFiles.filter(audio => audio.isFavorite === true))
  }, [day])

  useEffect(() => {
    const interval = setInterval(() => {
      const percent = onPlaying();
      if (percent >= 100) {
        setSelectedSong(audioFiles[(audioFiles.indexOf(selectedSong) + 1) % audioFiles.length]);
        setPress(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedSong]);

  function playPause() {
    if (press === 0) {
      audioElem.current.play();
      setPress(prev => prev + 1)
    } else if (press === 1) {
      audioElem.current.pause();
      setPress(prev => prev - 1)
    }
  }

  function onPlaying() {
    const totalTime = audioElem.current?.duration || 0;
    const currentTime = audioElem.current?.currentTime || 0;
    return (currentTime / totalTime) * 100;
  }

  function checkWidth(e) {
    let width = clickRef.current?.clientWidth
    const offset = e.nativeEvent?.offsetX
    const divprogress = (offset / width) * 100
    audioElem.current.currentTime = divprogress / 100 * audioElem.current?.duration
  }

  function nextSong() {
    setSelectedSong(audioFiles[(audioFiles.indexOf(selectedSong) + 1) % audioFiles.length])
    audioElem.current.currentTime = 0
    setPress(0)
  }

  function previousSong() {
    setSelectedSong(audioFiles[((audioFiles.indexOf(selectedSong) + audioFiles.length) - 1) % audioFiles.length])
    audioElem.current.currentTime = 0
    setPress(0)
  }

  if (day.length === 0) return <Loader/>

  return (
    <div className="container" style={{ backgroundImage: 'url(' + background + ')', color: textColor }}>
      <audio src={selectedSong.file} ref={audioElem} />
      <div className='cover'></div>
      <Navbar
        setPress={setPress}
        setBackground={setBackground}
        background={background}
        setTextColor={setTextColor}
        textColor={textColor}
        setIsFavorite={setIsFavorite}
        isFavorite={isFavorite}
        setSelectedSong={setSelectedSong}
        selectedSong={selectedSong}
      />
      <main>
        <section className='middle-section'>
          <div className='date-music-play'>
            <div className='full-date'>
              <h2>{day[0].currentDay}</h2>
              <h4>{day[0].currentMonth} {day[0].currentNum}, {day[0].currentYear}</h4>
            </div>
            <div className='music-player'>
              <div className={press === 0 ? 'current-play-image' : 'current-play-image spin'}>
                <img src={selectedSong?.image} alt={selectedSong?.title} />
              </div>
              <div className='current-play-title-buttons-radio'>
                <div className='current-play-title-buttons'>
                  <div className='current-play-title'>
                    <p>{selectedSong?.title}</p>
                    <p>{selectedSong?.artist}</p>
                  </div>
                  <div className='current-play-buttons'>
                    <div className='rewind' onClick={previousSong}>
                      <i className='bx bx-rewind bx-sm'></i>
                    </div>
                    <div className='start-pause' onClick={playPause}>
                      {press === 0 ? <i className='bx bx-play bx-sm'></i> : <i className='bx bx-pause bx-sm'></i>}
                    </div>
                    <div className='forward' onClick={nextSong}>
                      <i className='bx bx-fast-forward bx-sm'></i>
                    </div>
                  </div>
                </div>
                <div className='current-play-range' style={{ backgroundColor: textColor + '50' }} onClick={checkWidth} ref={clickRef}>
                  <div className='seek-bar' style={{ backgroundColor: textColor + '90', width: onPlaying() + '%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bottom-section'>
          <div className='weather-time-welcome'>
            <div className='weather-time'>
              <div className='weather-forecast'>
                <div className='weather-icon'>
                  <p>Good {day[0].greeting}, {localStorage.getItem('name')}! It is</p>
                </div>
              </div>
              <div className='full-time'>
                <h1>{day[0].currentHour}<span id='animated-colon'>:</span>{day[0].currentMinute}</h1>
              </div>
            </div>
            <div className='welcome'>
              <h4>Welcome to</h4>
              <h3>Lofi Train</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
