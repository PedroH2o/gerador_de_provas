import { House } from "@phosphor-icons/react";
import { Button } from "../componnents/Button";
import { Link } from "react-router-dom";

export function Score() {
    return (
        <div className="w-full md:w-fit md:min-w-[70%] flex flex-col gap-6 items-center">
            {/* <h3 className="text-3xl font-bold">Sua Nota</h3> */}
            <div className="w-full min-w-[80%] flex flex-col md:flex-row gap-6 bg-slate-300 rounded-lg p-4">
                <div className="w-full min-w-[50%] h-full flex justify-center items-center">
                    <div className="min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] lg:min-w-[300px] lg:max-w-[300px] lg:min-h-[300px] lg:max-h-[300px] rounded-full flex items-center justify-center shadow bg-gradient-to-br from-slate-50 to-slate-300">
                        <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-800">
                            80<span className="text-4xl lg:text-6xl m-0">%</span>
                        </h1>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex justify-between px-2 py-4 rounded-lg bg-slate-200 text-slate-800">
                        <strong className="text-base font-medium">
                            matéria
                        </strong>
                        <div>
                            <span className="text-lg font-bold text-slate-800">80 /</span>
                            <span className="text-base font-normal text-slate-600 ml-2">100</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-2 py-4 rounded-lg bg-slate-200">
                        <strong className="text-base font-medium">
                            matéria
                        </strong>
                        <div>
                            <span className="text-lg font-bold text-slate-800">80 /</span>
                            <span className="text-base font-normal text-slate-600 ml-2">100</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-2 py-4 rounded-lg bg-slate-200">
                        <strong className="text-base font-medium">
                            matéria
                        </strong>
                        <div>
                            <span className="text-lg font-bold text-slate-800">80 /</span>
                            <span className="text-base font-normal text-slate-600 ml-2">100</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-2 py-4 rounded-lg bg-slate-200">
                        <strong className="text-base font-medium">
                            matéria
                        </strong>
                        <div>
                            <span className="text-lg font-bold text-slate-800">80 /</span>
                            <span className="text-base font-normal text-slate-600 ml-2">100</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-2 py-4 rounded-lg bg-slate-200">
                        <strong className="text-base font-medium">
                            matéria
                        </strong>
                        <div>
                            <span className="text-lg font-bold text-slate-800">80 /</span>
                            <span className="text-base font-normal text-slate-600 ml-2">100</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-2 py-4 rounded-lg bg-slate-200">
                        <strong className="text-base font-medium">
                            Tempo
                        </strong>
                        <div>
                            <span className="text-lg font-bold text-slate-800">01 : 28 : 38</span>
                        </div>
                    </div>
                    <div className="w-full mt-1 flex justify-end gap-3">
                        <div className="">
                            <Button asChild>
                                <Link to={'/'}>
                                    <House size={24}  weight="fill"/>
                                </Link>
                            </Button>
                        </div>
                        <Button>
                            Compartilhar
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}