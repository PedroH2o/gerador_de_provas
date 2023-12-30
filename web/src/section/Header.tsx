import { User } from '../componnents/User'

export function Header({user = false}) {
    return (
        <header className="w-full flex justify-around items-center">
            
            <h1 className="w-fit flex-1 font-extrabold text-xl sm:text-4xl text-slate-950">Simulador de provas</h1>

            {user ? (
                <User/>
            ): (' ')}
        </header>
    )
}