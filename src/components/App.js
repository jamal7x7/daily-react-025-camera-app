import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Camera App</h1>
  </header>
)

class Items extends Component {
  componentDidMount () {
    const constraints = {
      audio: false,
      video: {
        width: { min: 640, ideal: 1080, max: 1920 },
        height: { min: 480, ideal: 700, max: 1080 }
      }
    }

    console.log(navigator.mediaDevices.enumerateDevices())

    const video = document.querySelector('video')

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => { video.srcObject = stream })
      .catch(err => console.error('Rejected!', err))
  }

  render () {
    return (
      <div className=' camera '>

        <video autoPlay />

      </div>
    )
  }
}

const Menu = () => (
  <div className='menu-wrap'>

    <div className='color-filter'>
      <div className='red'><div className='red-icon' /></div>
      <div className='green'><div className='green-icon' /></div>
      <div className='blue'><div className='blue-icon' /></div>
    </div>

  </div>
)

class CameraApp extends Component {
  render () {
    return (
      <div className='camera-app'>

        <Menu />
        <Items />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <CameraApp />

  </div>
)

export default App
