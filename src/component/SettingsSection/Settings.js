// import React, { useState, useEffect } from 'react'
// import '../SettingsSection/settings.scss'
// import lofiImages from '../../imageData'


// const Settings = ({setBackground, background, setTextColor, textColor}) => {
//   const [count, setCount] = useState(0)
//   const [yourName, setYourName] = useState('Stranger');
//   const [changeName, setChangeName] = useState('');
//   // const [yourBackground, setYourBackground] = useState('')
  
//   const [display, setDisplay] = useState('none')

//   // SAVES THE INPUT NAME TO LOCAL STORAGE TO PERSIST AFTER PAGE REFRESH
//   useEffect(function() {
//     if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
//       setYourName(localStorage.setItem('name', 'Stranger'))
//     }
//     setYourName(localStorage.getItem('name'))

//   }, [])

//   // THE EDIT BUTTON DISPLAYS THE FORM AND THE CLOSE BUTTON HIDES THE FORM USING 'DISPLAY' IN STYLES
//   function displayShow (e) {
//     if (e.target.className.includes('edit')) {
//       setDisplay('block');
//     } else if (e.target.className.includes('close')) {
//       setDisplay('none');
//     }
//   }

//   // HANDLES THE INPUT VALUE CHANGE WHEN KEY IS PRESSED
//   function handleChange(e) {
//     setChangeName(e.target.value)
//   }

//   // SUBMITS THE EDIT NAME FORM AND SAVES VALUE TO LOCAL STORAGE
//   function nameEditSubmit(e) {

//     e.preventDefault()
//     if (changeName !== null || changeName.length) {
//       localStorage.setItem('name', yourName)
//     }
    
//     if (changeName === null || changeName === ''){
//       localStorage.setItem('name', 'Stranger')
//     }
    
//   }

//   // SINCE THERE'S A SMALL BUG THAT MAKES ME CLICK 'SAVE' TWICE TO SAVE TO LOCAL STORAGE,
//   // I MANIPULATE THE SITUATION TO MAKE THE USER CONFIRM THE FORM SUBMIT BY MAKING 'SAVE' CHANGE TO
//   // 'CONFIRM' WHEN CLICKED ONCE SO IT LOOKS LIKE IT WAS DONE ON PURPOSE :P
//   // UPON EDIT CONFIRMATION, THE NAME IS THEN SAVED TO LOCAL STORAGE AND RENDERS TO PAGE
//   function confirmClick(e) {
//     if (count === 0) {
//       e.target.innerText = 'Confirm'
//       setCount(count + 1);

//     }

//     if (count === 1) {
//       e.target.innerText = 'Save'
//       setCount(count - 1);
      
//       setYourName(changeName)
      
      
//     }
//   }

//   function backgroundSetting(e) {
//     setBackground(lofiImages[+e.target.getAttribute('data-id') - 1].image)
//     setTextColor(lofiImages[+e.target.getAttribute('data-id') - 1].textColor)
//   }

//   return (
//     <div className='setting-content'>
//       <div>
//           <p>Settings</p>
//       </div>
//       <div className='welcome-edit'>
//           <div className='welcome'>
//               <p>Welcome, {yourName}!</p>
//           </div>
//           <div className='editButton'>
//               <button className='edit' style={{backgroundColor: textColor }} onClick={displayShow}>Edit</button>
//           </div>
//       </div>
//       <form onSubmit={nameEditSubmit} className='setting-form' style={{ display: display }}>
//           <input type='text' placeholder='What is your name?' value={changeName} onChange={handleChange}/>
//           <div className='setting-name-submit'>
//               <button style={{backgroundColor: textColor }} onClick={confirmClick} type='submit'>Save</button>
//               <button className='close' onClick={displayShow} style={{backgroundColor: textColor }}>Close</button>
//           </div>
//       </form>
//       <div className='background-select'>
//           <p>Set a Background</p>
//           <div className='background-display'>
//               <div className='display'>
//                 <img data-id='1' src={require('../../assets/images/lofi-settings.jpg')} alt='' onClick={backgroundSetting} />
//               </div>
//               <div className='display'>
//                 <img data-id='2' src={require('../../assets/audioImages/lofi-audio-pic12.jpg')} alt='' onClick={backgroundSetting}/>
//               </div>
//               <div className='display'>
//                 <img data-id='3' src={require('../../assets/images/lofi-settings2.gif')} alt='' onClick={backgroundSetting}/>
//               </div>
//               <div className='display'>
//                 <img data-id='4' src={require('../../assets/images/lofi-settings3.gif')} alt='' onClick={backgroundSetting}/>
//               </div>
//               <div className='display'>
//                 <img data-id='5' src={require('../../assets/images/lofi-settings11.gif')} alt='' onClick={backgroundSetting}/>
//               </div>             
//               <div className='display'>
//                 <img data-id='6' src={require('../../assets/images/lofi-settings8.gif')} alt='' onClick={backgroundSetting}/>
//               </div>                       
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Settings


import React, { useState, useEffect } from 'react'
import '../SettingsSection/settings.scss'

// Static imports for all background images
import lofiSettings1 from '../../assets/images/lofi-settings.jpg'
import lofiSettings2 from '../../assets/audioImages/lofi-audio-pic12.jpg'
import lofiSettings3 from '../../assets/images/lofi-settings2.gif'
import lofiSettings4 from '../../assets/images/lofi-settings3.gif'
import lofiSettings5 from '../../assets/images/lofi-settings11.gif'
import lofiSettings6 from '../../assets/images/lofi-settings8.gif'

// Array of images and associated text colors (adjust colors as needed)
const lofiImages = [
  { id: 1, image: lofiSettings1, textColor: '#ffffff' },
  { id: 2, image: lofiSettings2, textColor: '#000000' },
  { id: 3, image: lofiSettings3, textColor: '#ffffff' },
  { id: 4, image: lofiSettings4, textColor: '#ffffff' },
  { id: 5, image: lofiSettings5, textColor: '#000000' },
  { id: 6, image: lofiSettings6, textColor: '#000000' },
]

const Settings = ({ setBackground, background, setTextColor, textColor }) => {
  const [yourName, setYourName] = useState('Stranger')
  const [changeName, setChangeName] = useState('')
  const [display, setDisplay] = useState('none')
  const [confirmCount, setConfirmCount] = useState(0)

  // Load name from localStorage on mount
  useEffect(() => {
    const storedName = localStorage.getItem('name')
    if (storedName && storedName.trim() !== '') {
      setYourName(storedName)
    } else {
      localStorage.setItem('name', 'Stranger')
    }
  }, [])

  // Show/hide edit form
  const displayShow = (e) => {
    if (e.target.className.includes('edit')) {
      setDisplay('block')
    } else if (e.target.className.includes('close')) {
      setDisplay('none')
      setChangeName('') // Clear input on close
      setConfirmCount(0) // Reset confirm button state
    }
  }

  // Update input value on change
  const handleChange = (e) => {
    setChangeName(e.target.value)
  }

  // Handle form submit - save name to localStorage and update state
  const nameEditSubmit = (e) => {
    e.preventDefault()

    const newName = changeName.trim()
    if (newName.length > 0) {
      setYourName(newName)
      localStorage.setItem('name', newName)
    } else {
      setYourName('Stranger')
      localStorage.setItem('name', 'Stranger')
    }
    setDisplay('none')
    setChangeName('')
    setConfirmCount(0)
  }

  // Confirm button logic to simulate "Confirm" step before saving
  const confirmClick = (e) => {
    if (confirmCount === 0) {
      e.target.innerText = 'Confirm'
      setConfirmCount(1)
    } else if (confirmCount === 1) {
      e.target.innerText = 'Save'
      setConfirmCount(0)
      // Actually submit the form when confirmed
      e.target.form.requestSubmit()
    }
  }

  // Background selection handler
  const backgroundSetting = (e) => {
    const id = +e.target.getAttribute('data-id')
    const selected = lofiImages.find((img) => img.id === id)
    if (selected) {
      setBackground(selected.image)
      setTextColor(selected.textColor)
    }
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
          <button className='edit' style={{ backgroundColor: textColor }} onClick={displayShow}>
            Edit
          </button>
        </div>
      </div>

      <form onSubmit={nameEditSubmit} className='setting-form' style={{ display: display }}>
        <input
          type='text'
          placeholder='What is your name?'
          value={changeName}
          onChange={handleChange}
          autoFocus
        />
        <div className='setting-name-submit'>
          <button style={{ backgroundColor: textColor }} onClick={confirmClick} type='button'>
            Save
          </button>
          <button className='close' onClick={displayShow} style={{ backgroundColor: textColor }} type='button'>
            Close
          </button>
        </div>
      </form>

      <div className='background-select'>
        <p>Set a Background</p>
        <div className='background-display'>
          {lofiImages.map(({ id, image }) => (
            <div key={id} className='display'>
              <img data-id={id} src={image} alt={`Background ${id}`} onClick={backgroundSetting} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings
