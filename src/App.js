import React from 'react'


function App(){
    return (
   <>
      <div className='app'>
      <input type='number' className='input' disabled = {false}/>

        <div className='buttons'>
        <button className='btn operator'>C</button >
        <button className='btn operator'>X</button >
        <button className='btn operator'>x <sup>y</sup></button >
        <button className='btn operator'>+</button >
        <button className='btn'>1</button >
        <button className='btn'>2</button >
        <button className='btn'>3</button >
        <button className='btn operator'>-</button >
        <button className='btn'>4</button >
        <button className='btn'>5</button >
        <button className='btn'>6</button >
        <button className='btn operator'>*</button >
        <button className='btn'>7</button >
        <button className='btn'>8</button >
        <button className='btn'>9</button >
        <button className='btn operator'>/</button >
        <button className='btn'>.</button >
        <button className='btn zero'>0</button >
        <button  className='btn equal'>=</button >
        </div>
      </div>
   </>
    )
}

export default App
