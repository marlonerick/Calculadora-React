import { useState } from "react"

const numbers = [
  'C',
  '+/-',
  '%',
  '/',
  '7',
  '8',
  '9',
  'X',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  ',',
  '=',
]

export function Home() {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState('')

  const [conta, setConta] = useState()


  //Pega numero
  function handleClickNumber(value: any) {
    if (num == 0) {
      setNum(value)
    } else {
      setNum(num + value)
    }
  }

  //limpa campo de entrada de numero
  function clean() {
    setOperator('')
    setOldNum(0)
    setNum(0)
  }

  //função porcetagem
  function porcetage() {
    const resultPorcetage = (num / 100) * oldNum;
    setNum(resultPorcetage)
  }

  //troca de operador
  function changeSignal() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandler(e: any) {
    let operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function calculate() {

    if (operator == "/") {

      setNum(oldNum / num)

    } else if (operator == "X") {

      var number1 = parseFloat(oldNum.toString().replace(',', '.'))
      var number2 = parseFloat(num.toString().replace(',', '.'))

      setNum(number1 * number2)

    } else if (operator == "-") {

      var number1 = parseFloat(oldNum.toString().replace(',', '.'))
      var number2 = parseFloat(num.toString().replace(',', '.'))

      setNum(number1 - number2)

    } else if (operator == "+") {

      var number1 = parseFloat(oldNum.toString().replace(',', '.'))
      var number2 = parseFloat(num.toString().replace(',', '.'))

      setNum(Number(number1) + Number(number2))

    }
  }

  return (
    <div>
      <div className="w-96 h-4/6 px-5 py-5 bg-zinc-900 rounded-3xl border-2 border-zinc-600">

        <div className="w-full h-28 bg-zinc-500 rounded-xl px-2 py-2">

          {
            num !== 0 && <h5 className="flex justify-end content-end text-white font-semibold text-2xl opacity-50">{conta}</h5>
          }
          <h6 className="flex justify-end content-end py-1 text-white font-semibold text-6xl">{num}</h6>
        </div>

        <div className="grid grid-cols-4 gap-5 my-5">
          {
            numbers.map((numbers, index) => {
              if (numbers == '+' || numbers == '-' || numbers == 'X' || numbers == '/') {
                return (
                  <div key={index}>
                    <button className="w-16 h-16 rounded-3xl bg-violet-800 text-white text-xl font-bold shadow-lg shadow-violet-500/20 transition hover:bg-violet-500 duration-300" value={numbers} onClick={operatorHandler}>{numbers}</button>
                  </div>
                )

              } else {
                if (numbers == 'C' || numbers == '+/-' || numbers == '%') {

                  if (numbers == 'C') {
                    return (
                      <div key={index}>
                        <button className="w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-violet-500/20 transition hover:bg-zinc-300 duration-300" value={numbers} onClick={clean}>{numbers}</button>
                      </div>
                    )
                  }
                  else if (numbers == '%') {
                    return (
                      <div key={index}>
                        <button className="w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-violet-500/20 transition hover:bg-zinc-300 duration-300" value={numbers} onClick={porcetage}>{numbers}</button>
                      </div>
                    )
                  }
                  else if (numbers == '+/-') {
                    return (
                      <div key={index}>
                        <button className="w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-violet-500/20 transition hover:bg-zinc-300 duration-300" value={numbers} onClick={changeSignal}>{numbers}</button>
                      </div>
                    )
                  }
                  return (
                    <div key={index}>
                      <button className="w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-violet-500/20 transition hover:bg-zinc-300 duration-300" value={numbers}>{numbers}</button>
                    </div>
                  )
                }
                else if (numbers == '=') {
                  return (
                    <div key={index}>
                      <button className="w-36 h-16 rounded-3xl bg-violet-800 text-white text-3xl font-semibold shadow-lg shadow-violet-500/20 transition hover:bg-violet-500 duration-500 " value={numbers} onClick={calculate}>{numbers}</button>
                    </div>
                  )
                }
                return (
                  <div key={index} >
                    <button name={numbers} value={numbers} onClick={() => handleClickNumber(numbers)} className="w-16 h-16 rounded-3xl bg-zinc-800 text-white text-2xl font-semibold shadow-lg shadow-violet-500/20 transition hover:bg-zinc-600 duration-500 ">{numbers}</button>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div >
  )
}
