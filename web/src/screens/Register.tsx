import { Button } from "../componnents/Button";
import * as Form from '@radix-ui/react-form';

export function Register() {
    return(
        <div className="w-full lg:w-fit lg:max-w-[1000px] lg:flex lg:bg-slate-100 lg:drop-shadow-md lg:rounded">
            <figure className="sr-only lg:not-sr-only w-full min-w-[50%] max-h-full flex-1 rounded">
                <img className="w-full h-full bg-cover rounded" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </figure>
            <div className="w-full max-w-[500px] sm:mx-auto p-3 flex flex-col gap-4 sm:gap-5 justify-center items-center">
                <div>
                    <h2 className="text-center text-3xl sm:text-4xl text-slate-900 font-bold">Criar conta</h2>
                    <p className="text-sm sm:text-lg text-slate-900 text-center font-light mt-1">porfavor, preencha o formulario</p>
                </div>

                <Form.Root className="w-full flex flex-col gap-3">

                <Form.Field name="Name" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                    <Form.Label htmlFor="name" className="text-base sm:text-xl text-slate-900 font-semibold">
                        Nome:
                    </Form.Label>
                    <Form.Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                        Digite seu nome
                    </Form.Message>
                    </div>

                    <Form.Control asChild>

                        <input 
                        id="name" 
                        type="text"  
                        placeholder="Jhonny Doe" 
                        className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                        required
                        />

                    </Form.Control>
                </Form.Field>

                <Form.Field name="Email" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                    <Form.Label htmlFor="email" className="text-base sm:text-xl text-slate-900 font-semibold">
                        Usuário ou email:
                    </Form.Label>
                    <Form.Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                        Digite seu email
                    </Form.Message>
                    <Form.Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="typeMismatch">
                        Seu email está errado, confirá a escrita
                    </Form.Message>
                    </div>

                    <Form.Control asChild>

                        <input 
                        id="email" 
                        type="email"  
                        placeholder="jhodoe@exemple.com" 
                        className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                        required
                        />

                    </Form.Control>
                </Form.Field>

                <Form.Field name="Password" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                    <Form.Label htmlFor="password" className="text-base sm:text-xl text-slate-900 font-semibold">
                        Senha:
                    </Form.Label>
                    <Form.Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                        Digite sua senha
                    </Form.Message>
                    </div>

                    <Form.Control asChild>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="********" 
                        className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                        required
                    />
                    </Form.Control>
                </Form.Field>

                <Form.Field name="ConfirmPassword" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                    <Form.Label htmlFor="confirmPassword" className="text-base sm:text-xl text-slate-900 font-semibold">
                        Confirme sua Senha:
                    </Form.Label>
                    <Form.Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                        Digite sua senha
                    </Form.Message>
                    </div>

                    <Form.Control asChild>
                    <input 
                        id="confirmPassword" 
                        type="password" 
                        placeholder="********" 
                        className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                        required
                    />
                    </Form.Control>
                </Form.Field>

                <Form.Submit>
                    <Button type="submit">Enviar</Button>
                </Form.Submit>
                </Form.Root>
            </div>
        </div>   
    )
}