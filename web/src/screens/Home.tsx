import { FormComponent } from "../componnents/Form";
import { Control, Field, Label, Message } from "@radix-ui/react-form";

export function Home() {
    return (
        <div className="w-full sm:max-w-[60%] sm:mx-auto p-3 flex flex-col gap-4 sm:gap-5 justify-center items-center">
            <div>
                <h2 className="text-center text-3xl sm:text-4xl text-slate-900 font-bold">Qual Prova irá fazer hoje?</h2>
            </div>

            <FormComponent>
                <Field name="contest" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                        <Label htmlFor="contest" className="text-base sm:text-xl text-slate-900 font-semibold">
                            Concurso:
                        </Label>
                        <Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                            Preencha o campo concurso para prosseguir
                        </Message>
                    </div>

                    <Control asChild>

                        <input 
                            id="user" 
                            type="text"  
                            placeholder="Qual concurso vai fazer?" 
                            className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                            required
                        />

                    </Control>
                </Field>

                <Field name="years" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                    <Label htmlFor="years" className="text-base sm:text-xl text-slate-900 font-semibold">
                        {'De qual(ais) ano(s) irá fazer?:'}
                    </Label>
                    <Message className="text-xs sm:text-sm text-slate-900 opacity-[0.8]" match="valueMissing">
                        Preencha os campos
                    </Message>
                    </div>

                    <div className="flex gap-3 items-center lg:justify-around">
                        <Control asChild>
                            <div className="flex gap-3 items-center">
                                <span>De:</span>
                                <input 
                                    id="inYears" 
                                    type="text" 
                                    placeholder="2001" 
                                    className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                                />
                            </div>
                        </Control>
                        <Control asChild>
                            <div className="flex gap-3 items-center">
                                <span>Até:</span>
                                <input 
                                    id="toYear" 
                                    type="text" 
                                    placeholder="2001" 
                                    className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                                />
                            </div>
                        </Control>
                    </div>
                </Field>

                <Field name="materia" className="w-full flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                        <Label htmlFor="materia" className="text-base sm:text-xl text-slate-900 font-semibold">
                            Matéria:
                        </Label>
                    </div>

                    <Control asChild>
                        <input 
                            id="materia" 
                            type="text"  
                            placeholder="Qual materia deseja fazer essa prova?" 
                            className="w-full p-2 sm:p-4 rounded-lg border border-slate-800 placeholder:text-slate-500 placeholder:text-base sm:placeholder:text-xl"
                        />

                    </Control>
                </Field>

            </FormComponent>
        </div>
    )
}