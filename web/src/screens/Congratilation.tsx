import { House } from '@phosphor-icons/react'
import Image from '../assets/pana.svg'
import { Button } from '../componnents/Button'
import { Particle } from '../componnents/Particle'
import { Link, useNavigate } from 'react-router-dom'

export function Congratilation() {

    const navigate = useNavigate()
    return (
        <div className="fixed w-full p-5 h-full left-0 top-0 bottom-0 right-0 bg-slate-200/40 flex justify-center items-center">
            <div className='flex flex-col gap-5 w-fit max-w-2xl'>
                <img src={Image} alt="" />
                <div className="w-full flex items-center justify-center gap-3">
                    <div className="w-[20%]">
                        <Button asChild>
                            <Link to="/"><House size={24} color='#222' weight='fill'/></Link>
                        </Button>
                    </div>
                    <Button onClick={() => navigate('/Score')}>
                        ver meu desempenho
                    </Button>
                </div>
            </div>
            <Particle/>
        </div>
    )
}