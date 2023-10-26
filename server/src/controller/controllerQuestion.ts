import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()


async function addQuestion() {
    await prisma.question.create({
        data: {
            theme: 'variavel',
            enunciation: 'variavel',
            alternative_list: 'variavel',
            correct_alternative: 'variavel',

            id_test:1, //variável

            //A pk tests já é cadastrada automaticamente
        }
    })
}

async function updateQuestion(){
    await prisma.question.update({
        where: {id:1}, //variável
        data: { 
            theme: 'variavel',
            enunciation: 'variavel',
            alternative_list: 'variavel',
            correct_alternative: 'variavel'
            },
    })
}

async function deleteQuestion(){
    await prisma.question.delete({
        where: {id:1}, //variável
    })
}