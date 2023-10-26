import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()


async function addSimulated() {
    await prisma.simulated.create({
        data: {
            created_at:'data',
            question_simulated:'',
            id_questions:1,
            id_tests:2,
            id_user:3
            
        }
    })
}


async function deleteSimulated(){
    await prisma.simulated.delete({
        where: {id_simulated:1}, //variável
    })
}