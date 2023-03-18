import { useState } from "react"
import { Display } from "../../components/Display/Display"
import { Theme } from "../../components/Theme/ThemeMode"

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
  '.',
  '=',
]

export function Home() {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState('')

  //adiciona numero

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
      setOperator('')

    }
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <Theme />
      </div>
      <div className="
      w-96 h-1/2 px-5 py-5 bg-zinc-400 dark:bg-zinc-900 rounded-3xl border-4 border-zinc-600
      sm:w-2/4 sm:h-1/2 sm:px-4 sm:py-4
      md:w-5/12 md:h-1/2 md:px-2 md:py-2
      xl:w-5/12 xl:h-1/3 xl:px-4 xl:py-4
      ">

        <Display valor={num}></Display>

        <div className="grid grid-cols-4 gap-6 my-5
        sm:grid sm:grid-cols-4 sm:gap-3 sm:m-2
        md:grid md:grid-cols-4 md:gap-4 md:m-2
        xl:grid xl:grid-cols-4 xl:gap-5 xl:m-4
        ">
          {
            numbers.map((numbers, index) => {
              if (numbers == '+' || numbers == '-' || numbers == 'X' || numbers == '/') {
                return (
                  <div key={index}>
                    <button value={numbers} onClick={operatorHandler} className="
                    w-16 h-16 rounded-3xl bg-violet-800 text-white text-xl font-bold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-violet-500 focus:outline focus:ring-2 focus:ring-violet-500  focus:ring-offset-2 focus:ring-offset-background
                    
                    ">
                      {numbers}
                    </button>
                  </div>
                )

              } else {
                if (numbers == 'C' || numbers == '+/-' || numbers == '%') {

                  if (numbers == 'C') {
                    return (
                      <div key={index}>
                        <button value={numbers} onClick={clean} className="
                        w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-zinc-300 focus:outline focus:ring-2 focus:ring-zinc-500  focus:ring-offset-2 focus:ring-offset-background

                        ">
                          {numbers}
                        </button>
                      </div>
                    )
                  }
                  else if (numbers == '%') {
                    return (
                      <div key={index}>
                        <button value={numbers} onClick={porcetage} className="
                        w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-zinc-300 duration-300 focus:outline focus:ring-2 focus:ring-zinc-500  focus:ring-offset-2 focus:ring-offset-background

                        ">
                          {numbers}
                        </button>
                      </div>
                    )
                  }
                  else if (numbers == '+/-') {
                    return (
                      <div key={index}>
                        <button value={numbers} onClick={changeSignal} className="
                        w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-zinc-300 duration-300 focus:outline focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-background
                        ">
                          {numbers}
                        </button>
                      </div>
                    )
                  }
                  return (
                    <div key={index}>
                      <button value={numbers} className="
                      w-16 h-16 rounded-3xl bg-zinc-500 text-white text-xl font-semibold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-zinc-300 duration-300 focus:outline focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-background
                      ">
                        {numbers}
                      </button>
                    </div>
                  )
                }
                else if (numbers == '=') {
                  return (
                    <div key={index}>
                      <button value={numbers} onClick={calculate} className="
                      w-36 h-16 rounded-3xl bg-violet-800 text-white text-3xl font-semibold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-violet-500 focus:outline focus:ring-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-background
                      xl:w-36 xl:h-16
                      ">
                        {numbers}
                      </button>
                    </div>
                  )
                }
                return (
                  <div key={index} >
                    <button name={numbers} value={numbers} onClick={() => handleClickNumber(numbers)} className="
                    w-16 h-16 rounded-3xl bg-zinc-800 text-white text-2xl font-semibold shadow-lg shadow-purple-900 dark:shadow-violet-700/50 transition hover:bg-zinc-600 hover:border-zinc-300 focus:outline focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2 focus:ring-offset-background
                    ">
                      {numbers}
                    </button>
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