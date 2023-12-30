import * as Form from "@radix-ui/react-form";
import { Button } from "../componnents/Button";
import { Timer } from "../componnents/Timer";
import { ArrowLeft } from "@phosphor-icons/react";
import { Report } from "../section/Report";
import { useNavigate } from "react-router-dom";

export function Simulate() {

    const navigate = useNavigate()

    return (
        <div className="w-full sm:max-w-[60%] sm:mx-auto p-3 flex flex-col gap-4 sm:gap-5 justify-center items-center">
            <Timer />
            
            <div>
                <h2 className="font-semibold text-lg sm:text-xl text-slate-900">
                    A empresa pode ser outra coisa no futuro ou atuar em outro segmento? se sim, o que seria?
                </h2>
            </div>


            <Form.Root className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">

                    <Form.Field name="alternatives" className="w-full flex  items-center gap-2">           
                        <Form.Control asChild>
                            <input 
                                type="radio" 
                                id="alternative1" 
                                name="drone" 
                                value="alternative1"
                                className="appearance-none w-5 h-5 bg-slate-300 border border-slate-800 rounded transition-colors duration-200 drop-shadow-md checked:border-2 checked:bg-slate-800 checked:border-slate-300"
                            />
                        </Form.Control>        
                        <Form.Label 
                            htmlFor="alternative1"
                            className="font-medium text-base text-slate-900"
                        >
                            alternative1
                        </Form.Label>
                    </Form.Field>
                    
                    <Form.Field name="alternative" className="w-full flex  items-center gap-2">           
                        <Form.Control asChild>
                            <input 
                                type="radio" 
                                id="alternative2" 
                                name="drone" 
                                value="alternative2"
                                className="appearance-none w-5 h-5 bg-slate-300 border border-slate-800 rounded transition-colors duration-200 drop-shadow-md checked:border-2 checked:bg-slate-800 checked:border-slate-300"
                            />
                        </Form.Control>
                        <Form.Label 
                            htmlFor="alternative2"
                            className="font-medium text-base text-slate-900"
                        >
                            alternative2
                        </Form.Label>
                    </Form.Field>

                    <Form.Field name="alternative" className="w-full flex  items-center gap-2">           
                        <Form.Control asChild>
                            <input 
                                type="radio" 
                                id="alternative3" 
                                name="drone" 
                                value="alternative3"
                                className="appearance-none w-5 h-5 bg-slate-300 border border-slate-800 rounded transition-colors duration-200 drop-shadow-md checked:border-2 checked:bg-slate-800 checked:border-slate-300"
                            />
                        </Form.Control>
                        <Form.Label 
                            htmlFor="alternative3"
                            className="font-medium text-base text-slate-900"
                        >
                            alternative3
                        </Form.Label>
                    </Form.Field>

                    <Form.Field name="alternative" className="w-full flex  items-center gap-2">           
                        <Form.Control asChild>
                            <input 
                                type="radio" 
                                id="alternative4" 
                                name="drone" 
                                value="alternative4"
                                className="appearance-none w-5 h-5 bg-slate-300 border border-slate-800 rounded transition-colors duration-200 drop-shadow-md checked:border-2 checked:bg-slate-800 checked:border-slate-300"
                            />
                        </Form.Control> 
                        <Form.Label 
                            htmlFor="alternative4"
                            className="font-medium text-base text-slate-900"
                        >
                            alternative4
                        </Form.Label>
                    </Form.Field>

                </div>

                <div className=" w-full flex justify-between mt-4">
                    <div className="w-fit ">
                        <Button asChild>
                            <a href="" className="flex items-center justify-center"><ArrowLeft size={16}/></a>
                        </Button>
                    </div>

                    <div className="w-fit ">
                        <Report/>
                    </div>
                    
                    <Form.Submit asChild>
                        <div className="w-fit ">
                            <Button type="submit" onClick={(e) => {
                                e.preventDefault()
                                navigate('congratilation')
                            }}>
                                Enviar
                            </Button>
                        </div>
                    </Form.Submit>
                </div>
            </Form.Root>
        </div>
    )
}