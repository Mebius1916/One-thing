// @ts-nocheck
import { useState } from 'react'
import React from 'react' 
import Form from './components/CustomForm'
import OneThing from './components/OneThing'
import JSConfetti  from 'js-confetti'
const jsConfetti = new JSConfetti();
function getSuccesMessage() {
  const messages = [
    "Great!",
    "Awesome!",
    "Nice!",
    "Wow!",
    "Congrats!",
    "Good job!",
    "Keep it up!",
    "You're doing great!",
    "You're a pro!",
    "You're a star!",
    "You're a legend!",];
    return messages[Math.floor(Math.random() * messages.length)];
}
function App() {
  const [thing, setThing] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)
  
  const handelSubmit = (e) => {
    e.preventDefault()
    if(thing){
      setIsCompleted(false)
    }
  }
  const handelInput = (e) => {
    setThing(e.target.value)
  }
  const handleCompletedThing = async(e) => {
    e.target.setAttribute('disabled', 'true');
    setThing(getSuccesMessage());
    await jsConfetti.addConfetti();//执行此程序之后才能重置状态
    e.target.setAttribute('disabled', 'true');
    setThing("");
    setIsCompleted(true);
  }
  return (
      <main className="grid place-items-center min-h-screen
      bg-gradient-to-b from-slate-100 to-slate-300
      dark:from-slate-800 dark:to-slate-900 text-slatel-900
      dark:text-slate-200">
        <div className='grid place-items-center gap-8 m-8'>
          {isCompleted && (<Form 
            thing={thing}
            handelInput={handelInput}
            handelSubmit={handelSubmit}

            />)}
          {
            !isCompleted && <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
          }
        </div>
      </main>
    
  )
}

export default App
