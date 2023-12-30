import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../componnents/Button';

export function Report() {
    return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant>
            Report
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-slate-900/40 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-xl font-bold text-center text-slate-900">
              Reporte
            </Dialog.Title>
            <Dialog.Description className="text-base font-light text-slate-900 mt-[10px] mb-5 leading-normal">
                Qual problema encontrou na questão?explique para gente corrigir
            </Dialog.Description>
            <fieldset className="mb-[15px] flex flex-col items-center gap-5">
              <textarea
                className="w-full min-h-[150px] rounded-lg border border-slate-800 shadow p-2 outline-none resize-none bg-slate-100"
                id="description"
                placeholder='a questão está incorreta por ...'
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <Button>
                  Enviar
                </Button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-slate-800  hover:shadow  focus:shadow-slate-700 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none p-1 transition-colors duration-150"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}