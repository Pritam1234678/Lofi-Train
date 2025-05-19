import React from 'react'
import '../Loader/loader.scss'

const Loader = () => {
  return (
    <div className='loader-container'>
        <h3 style={{ color: '#FFD7D7' }}>Lofi Train</h3>
        <div className='loader' style={{ borderTop: '2px solid #FFD7D7' }}></div>
    </div>
  )
}

export default Loader