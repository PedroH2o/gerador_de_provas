import { Button } from "../componnents/Button";
import * as Form from '@radix-ui/react-form';
import { ReactNode } from "react";

interface FormComponetProps  {
    children: ReactNode;
}

export function FormComponent({children}: FormComponetProps) {
    return (
        <Form.Root className="w-full flex flex-col gap-4">

            {children}

            <Form.Submit asChild>
                <Button type="submit">Enviar</Button>
            </Form.Submit>
        </Form.Root>
    )
}