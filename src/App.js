import React, { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [operation, setoperation] = useState('')

  function clear(value) {
    if (value == 'X') setInput(count => count.slice(0, input.lastIndexOf()))
    if (value == 'C') setInput('')
  }

  function inputHandler(value) {
    setInput(count => count + `${value}`)
  }

  const resultArr = input.split(operation)

  useEffect(function () {
    if (resultArr.length == 3 && resultArr?.at(1) != '' && resultArr?.at(1) != undefined) HandleEqual()
  }, [input])

  function HandleEqual() {
    if (resultArr.length < 2) setInput(input)
    if (operation == '+') setInput(String(resultArr.reduce((arr, cur) => Number(arr) + Number(cur))))
    if (operation == '-') setInput(String(resultArr.reduce((arr, cur) => Number(arr) - Number(cur))))
    if (operation == 'x') setInput(String(resultArr.reduce((arr, cur) => Number(arr) * Number(cur))))
    if (operation == '/') setInput(String(resultArr.reduce((arr, cur) => Number(arr) / Number(cur))))
    if (operation == '^') setInput(String(resultArr.reduce((arr, cur) => Math.pow(arr, cur))))
  }

  function operationHandler(operation) {
    if (resultArr.length == 2) return HandleEqual()
    if (operation == '+') setInput(input + '+')
    if (operation == '-') setInput(input + '-')
    if (operation == 'x') setInput(input + 'x')
    if (operation == '/') setInput(input + '/')
    if (operation == '^') setInput(input + '^')
    if (operation == '.') setInput(input + '.')
    setoperation(operation)
  }

  return (
    <>
      <div className='app'>
        <h2 className='input' >{input}</h2>

        <div className='buttons'>
          <button className='btn operator' onClick={() => clear('C')}>C</button >
          <button className='btn operator' onClick={() => clear('X')}>X</button >
          <button className='btn operator' onClick={() => operationHandler('^')}>x <sup>y</sup></button >
          <button className='btn operator' onClick={() => operationHandler('+')}>+</button >
          <button className='btn' onClick={() => inputHandler(1)}>1</button >
          <button className='btn' onClick={() => inputHandler(2)}>2</button >
          <button className='btn' onClick={() => inputHandler(3)}>3</button >
          <button className='btn operator' onClick={() => operationHandler('-')}>-</button >
          <button className='btn' onClick={() => inputHandler(4)}>4</button >
          <button className='btn' onClick={() => inputHandler(5)}>5</button >
          <button className='btn' onClick={() => inputHandler(6)}>6</button >
          <button className='btn operator' onClick={() => operationHandler('x')}>x</button >
          <button className='btn' onClick={() => inputHandler(7)}>7</button >
          <button className='btn' onClick={() => inputHandler(9)}>8</button >
          <button className='btn' onClick={() => inputHandler(8)}>9</button >
          <button className='btn operator' onClick={() => operationHandler('/')}>/</button >
          <button className='btn' onClick={() => inputHandler('.')}>.</button >
          <button className='btn zero' onClick={() => inputHandler(0)}>0</button >
          <button className='btn equal' onClick={() => HandleEqual()} >=</button >
        </div>
      </div>
    </>
  )
}

export default App
