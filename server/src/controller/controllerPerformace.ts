import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()


async function addPerformace() {
    await prisma.performace.create({
        data: {
            score: 1.3, //variavel
            id_simulate:1, //variavel
            user_id:1 //variavel
        }
    })
}
