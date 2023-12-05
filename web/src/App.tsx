import { Header } from "./section/Header"
import { Main } from "./section/Main"


function App() {

  return (
    <div className="w-full lg:max-w-[80%] lg:mx-auto min-h-screen p-4 flex flex-col gap-8 items-start">
      <Header user={true}/>
  
      <Main/>
     

    </div>
  )
}

export default App
