import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()


async function addTest() {
    await prisma.test.create({
        data: {
            name: 'prova',
            year: 'data formatada'
        }
    })
}

async function updateTest(){
    await prisma.test.update({
        where: {id:1}, //variável
        data: { 
            name: 'prova',
            year: 'data formatada'
            },
    })
}

async function deleteTest(){
    await prisma.test.delete({
        where: {id:1}, //variável
    })
}