import React from 'react'
import '../ListDisplay/listDisplay.scss'
import audioFiles from '../../utils/audioData'

const ListDisplay = (prop) => {

  return (
    <div className='list-section'>
    <div className='list-container'>
        {prop.audioData?.length ? prop.audioData?.map(audio => {
            return (
                <div key={audio.id} className='list-content' >
                    <div className='list-image-favorite'>
                        <div className='list-favorite' onClick={() => audio.isFavorite = !audio.isFavorite}>
                            {audio.isFavorite ? <i className='bx bxs-heart'></i> : <i className='bx bx-heart'></i>}
                        </div>
                        <div className='list-image'>
                            <img src={audio.image} alt={audio.title}/>
                            <i className='bx bx-play' onClick={() => {prop.setSelectedSong(audioFiles[+audio.id - 1]); prop.setPress(0)}}></i>
                        </div>
                    </div>
                    <div className='list-title-name'>
                        <p>{audio.title}</p>
                        <p>{audio.artist}</p>       
                    </div>
                </div>
            )
        
    }) : <div className='none-added' style={{ textAlign: 'center', padding: '5px 0'}}><p style={{ fontSize: '14px'}}>No music displayed!</p></div>}
               
    </div>
    </div>
  )
}

export default ListDisplay