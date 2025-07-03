import { PrismaClient } from "../src/generated/prisma"

const client=new PrismaClient

async function createTodo(){
  await client.todo.create({
  data:{
    title:"Go to gym",
    done:true,
    description:"Go to gym daily at 5 AM",
    userId:1
  }
})}

createTodo();
  

