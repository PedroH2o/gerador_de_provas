import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()


async function addUser() {
    await prisma.user.create({
        data: {
            name: 'prova',
            email: 'data formatada',
            password:''
        }
    })
}

async function updateUser(){
    await prisma.user.update({
        where: {id:1}, //variável
        data: {
            name: 'prova',
            email: 'data formatada',
            password:''
            },
    })
}

async function deleteUser(){
    await prisma.user.delete({
        where: {id:1}, //variável
    })
}