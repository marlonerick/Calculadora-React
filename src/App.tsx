import { Home } from "./screens/home"
import './styles/global.css'

export function App() {


  return (
    <div className='
    w-screen h-screen bg-white bg-gradient-to-r from-cyan-300 to-blue-600 
    dark:bg-gradient-to-tr dark:from-slate-600 dark:to-zinc-900 
    flex items-center justify-center

    // responsive
    sm:w-screen sm:h-screen sm:flex sm:items-center sm:justify-center
    md:w-screen md:h-screen md:flex md:items-center md:justify-center
    lg:w-screen lg:h-screen lg:flex lg:items-center lg:justify-center
    xl:w-screen xl:h-screen xl:flex xl:items-center xl:justify-center
    '>
      <Home />
    </div>
  )
}


