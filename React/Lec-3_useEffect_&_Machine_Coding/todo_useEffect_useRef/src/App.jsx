import { useState } from 'react'
import './App.css';

import Todo from './components/todo/Todo';
import UseEffectUseCases from './components/useEffects/UseEffectUseCases';
import UseEffectRequestAPI from './components/useEffects/UseEffectRequestAPI';
import StopWatch from './components/stopWatch/StopWatch';

const App = () => {
  
  return (
    <div className='container'>
      {/* <Todo /> */}
      <UseEffectUseCases />
      <UseEffectRequestAPI />
      <StopWatch />
    </div>
  )
}

export default App
