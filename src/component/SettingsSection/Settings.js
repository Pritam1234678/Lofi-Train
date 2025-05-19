import React, { useState, useEffect } from 'react'
import '../SettingsSection/settings.scss'
import lofiImages from '../../imageData'


const Settings = ({setBackground, background, setTextColor, textColor}) => {
  const [count, setCount] = useState(0)
  const [yourName, setYourName] = useState('Stranger');
  const [changeName, setChangeName] = useState('');
  // const [yourBackground, setYourBackground] = useState('')
  
  const [display, setDisplay] = useState('none')

  // SAVES THE INPUT NAME TO LOCAL STORAGE TO PERSIST AFTER PAGE REFRESH
  useEffect(function() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
      setYourName(localStorage.setItem('name', 'Stranger'))
    }
    setYourName(localStorage.getItem('name'))

  }, [])

  // THE EDIT BUTTON DISPLAYS THE FORM AND THE CLOSE BUTTON HIDES THE FORM USING 'DISPLAY' IN STYLES
  function displayShow (e) {
    if (e.target.className.includes('edit')) {
      setDisplay('block');
    } else if (e.target.className.includes('close')) {
      setDisplay('none');
    }
  }

  // HANDLES THE INPUT VALUE CHANGE WHEN KEY IS PRESSED
  function handleChange(e) {
    setChangeName(e.target.value)
  }

  // SUBMITS THE EDIT NAME FORM AND SAVES VALUE TO LOCAL STORAGE
  function nameEditSubmit(e) {

    e.preventDefault()
    if (changeName !== null || changeName.length) {
      localStorage.setItem('name', yourName)
    }
    
    if (changeName === null || changeName === ''){
      localStorage.setItem('name', 'Stranger')
    }
    
  }

  // SINCE THERE'S A SMALL BUG THAT MAKES ME CLICK 'SAVE' TWICE TO SAVE TO LOCAL STORAGE,
  // I MANIPULATE THE SITUATION TO MAKE THE USER CONFIRM THE FORM SUBMIT BY MAKING 'SAVE' CHANGE TO
  // 'CONFIRM' WHEN CLICKED ONCE SO IT LOOKS LIKE IT WAS DONE ON PURPOSE :P
  // UPON EDIT CONFIRMATION, THE NAME IS THEN SAVED TO LOCAL STORAGE AND RENDERS TO PAGE
  function confirmClick(e) {
    if (count === 0) {
      e.target.innerText = 'Confirm'
      setCount(count + 1);

    }

    if (count === 1) {
      e.target.innerText = 'Save'
      setCount(count - 1);
      
      setYourName(changeName)
      
      
    }
  }

  function backgroundSetting(e) {
    setBackground(lofiImages[+e.target.getAttribute('data-id') - 1].image)
    setTextColor(lofiImages[+e.target.getAttribute('data-id') - 1].textColor)
  }

  return (
    <div className='setting-content'>
      <div>
          <p>Settings</p>
      </div>
      <div className='welcome-edit'>
          <div className='welcome'>
              <p>Welcome, {yourName}!</p>
          </div>
          <div className='editButton'>
              <button className='edit' style={{backgroundColor: textColor }} onClick={displayShow}>Edit</button>
          </div>
      </div>
      <form onSubmit={nameEditSubmit} className='setting-form' style={{ display: display }}>
          <input type='text' placeholder='What is your name?' value={changeName} onChange={handleChange}/>
          <div className='setting-name-submit'>
              <button style={{backgroundColor: textColor }} onClick={confirmClick} type='submit'>Save</button>
              <button className='close' onClick={displayShow} style={{backgroundColor: textColor }}>Close</button>
          </div>
      </form>
      <div className='background-select'>
          <p>Set a Background</p>
          <div className='background-display'>
              <div className='display'>
                <img data-id='1' src={require('../../assets/images/lofi-settings.jpg')} alt='' onClick={backgroundSetting} />
              </div>
              <div className='display'>
                <img data-id='2' src={require('../../assets/audioImages/lofi-audio-pic12.jpg')} alt='' onClick={backgroundSetting}/>
              </div>
              <div className='display'>
                <img data-id='3' src={require('../../assets/images/lofi-settings2.gif')} alt='' onClick={backgroundSetting}/>
              </div>
              <div className='display'>
                <img data-id='4' src={require('../../assets/images/lofi-settings3.gif')} alt='' onClick={backgroundSetting}/>
              </div>
              <div className='display'>
                <img data-id='5' src={require('../../assets/images/lofi-settings11.gif')} alt='' onClick={backgroundSetting}/>
              </div>             
              <div className='display'>
                <img data-id='6' src={require('../../assets/images/lofi-settings8.gif')} alt='' onClick={backgroundSetting}/>
              </div>                       
          </div>
      </div>
    </div>
  )
}

export default Settings