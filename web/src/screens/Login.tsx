import { FacebookLogo, GoogleLogo } from "@phosphor-icons/react";
import { AutoLogin } from "../componnents/AutoLogin";
import { Link } from "react-router-dom";
import { FormComponent } from "../componnents/Form";
import { Control, Field, Label, Message } from "@radix-ui/react-form";

export function Login() {
    return(
        <div className="w-full lg:w-fit lg:max-w-[1000px] lg:flex lg:bg-slate-100 lg:drop-shadow-md lg:rounded">
            <figure className="sr-only lg:not-sr-only w-full min-w-[50%] max-h-full flex-1 rounded">
                <img className="w-full h-full bg-cover rounded" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </figure>
            <div className="w-full max-w-[500px] sm:mx-auto p-3 flex flex-col gap-4 sm:gap-5 justify-center items-center">
                <div>
                    <h2 className="text-center text-3xl sm:text-4xl text-slate-900 font-bold">Bem vindo!</h2>
                    <p className="text-sm sm:text-lg text-slate-900 text-center font-light mt-1">Comoce já! a praticar seus estudos com os testes para seu concurso</p>
                </div>

                <div className="w-full flex gap-2 justify-center">
                    <AutoLogin>
                    <GoogleLogo weight="bold"/>
                    <span className="sr-only sm:not-sr-only text-base">Google</span>
                    </AutoLogin>
                    <AutoLogin>
                    <FacebookLogo weight="bold"/>
                    <span className="sr-only sm:not-sr-only text-base">Facebook</span>
                    </AutoLogin>
                </div>

                <FormComponent>
                    <Field name="UserOrEmail" className="w-full flex flex-col gap-2">
                        <div className="flex items-baseline justify-between">
                        <Label htmlFor="user" className="text-base sm:text-xl text-slate-900 font-semibold">
                            Usuário ou email:
                        </Label>
                        <Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                            Digite seu email
                        </Message>
                        <Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="typeMismatch">
                            Seu email está errado, confirá a escrita
                        </Message>
                        </div>

                        <Control asChild>

                            <input 
                            id="user" 
                            type="text"  
                            placeholder="jhodoe / jhodoe@exemple.com" 
                            className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                            required
                            />

                        </Control>
                    </Field>

                    <Field name="Password" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                    <Label htmlFor="user" className="text-base sm:text-xl text-slate-900 font-semibold">
                        Senha:
                    </Label>
                    <Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                        Digite sua senha
                    </Message>
                    </div>

                    <Control asChild>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="********" 
                        className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                    />
                    </Control>
                </Field>

                </FormComponent>

                <span className="w-full text-base sm:text-xl text-slate-900 text-center font-medium">Você ainda não tem uma conta? 
                    <br />
                    <Link to="/register" className="w-full text-base sm:text-xl text-blue-900 hover:text-blue-700 text-center font-medium">
                        faça sua conta agora!
                    </Link>
                </span>
            </div>
        </div>
    )
}