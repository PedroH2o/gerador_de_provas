import { Header } from "./section/Header"
import { Main } from "./section/Main"

function App() {
  return (
    <div className="w-full min-h-screen p-4 flex flex-col gap-8 items-start">
      <Header/>
  
      <Main/>
     

    </div>
  )
}

export default App
