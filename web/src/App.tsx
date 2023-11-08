import { GoogleLogo } from "@phosphor-icons/react"
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr"

function App() {
  return (
    <div className="w-full h-full p-4">
      <header className="w-full mb-14">
        <h1 className=" font-extrabold text-4xl text-slate-950">Simulador de provas</h1>
      </header>

      <main className="w-full px-6 flex flex-col gap-4 justify-center items-center">
        <div>
          <h2 className="text-center text-3xl text-slate-900 font-bold">Bem vindo!</h2>
          <p className="text-sm text-slate-900 text-center font-light mt-1">Comoce já! a praticar seus estudos com os testes para seu concurso</p>
        </div>

        <div className="w-full flex gap-2 justify-center">
          <a href="#" className="p-2 bg-slate-700 shadow rounded-full text-slate-100"><GoogleLogo weight="bold" size={20}/></a>
          <a href="#" className="p-2 bg-slate-700 shadow rounded-full text-slate-100"><FacebookLogo weight="bold" size={20}/></a>
        </div>

        <form action="" className="w-full flex flex-col gap-3">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="user" className="text-base text-slate-900 font-semibold">Usuário ou email:</label>
            <input id="user" type="text"  placeholder="jhodoe / jhodoe@exemple.com" className="w-full p-2 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:tetx-base"/>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-base text-slate-900 font-semibold">Senha:</label>
            <input 
              id="password" 
              type="password" 
              placeholder="********" 
              className="w-full p-2 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:tetx-base"
            >
                
            </input>
            {/* <EyeClosed size={20}/> */}
          </div>

          <button className="w-full bg-blue-800 text-slate-100 px-4 py-2 text-base font-bold rounded-lg" type='submit'>Enviar</button>
        </form>

        <span className="w-full text-base text-slate-900 text-center font-medium">Você ainda não tem uma conta? 
          <a href="#" className="w-full text-base text-blue-900 text-center font-medium">
              faça sua conta agora!
            </a>
        </span>
      </main>

    </div>
  )
}

export default App
