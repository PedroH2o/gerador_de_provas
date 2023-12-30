import { useEffect, useState } from "react";

interface User {
    name: {
        first: string;
        last: string;
    };
    email: string;
    cell: string;
    gender: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export function User() {

    const [user, setUser] = useState<User | undefined>()

    useEffect(() => {getRadomUser()}, [])

    async function getRadomUser() {
        const data = await fetch('https://randomuser.me/api/').then(response => response.json());
        setUser(data.results[0])

    }
    return (
        <figure className="w-12 h-12 lg:w-[70px] lg:h-[70px] p-[2px] bg-blue-800/60 rounded-full flex items-center justify-center overflow-hidden">
            <img 
                src={ user?.picture.large} 
                alt={`usuário ${user?.name.first}`}  
                className="max-w-full bg-cover rounded-full drop-shadow-sm"
            />
        </figure>
    )
}