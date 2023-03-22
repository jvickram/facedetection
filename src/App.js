import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs'
import * as facemesh from '@tensorflow-models/face-landmarks-detection'

import Webcam from 'react-webcam';
import { useRef } from 'react';

function App() {
  console.log(tf);

  // Setup references
  const webcamRef = useRef(null)
  const canvaRef = useRef(null)

  return (
    <div className="App">
      <header className='App-header'>
        <Webcam
          ref={webcamRef}
          style={
            {
              position: 'absolute',
              margin: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              textAlign: 'center',
              zIndex: 9,
              width: 640,
              height: 480
            }
          }
        />
        <canvas
          ref={canvaRef}
          style={
            {
              position: 'absolute',
              margin: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              textAlign: 'center',
              zIndex: 9,
              width: 640,
              height: 480,
            }
          }
        />
      </header>
    </div>
  );
}

export default App;
