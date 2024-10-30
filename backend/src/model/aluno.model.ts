// import { Prisma } from "@prisma/client"
import { z } from "zod"
import { prisma } from "../utils/prisma.client"
import { newAlunoData } from "../utils/types.zod"

type newAlunoDataType = z.infer<typeof newAlunoData>;

export const createAlunoModel = async ({ name }: newAlunoDataType) => {

  try {
    const aluno = await prisma.aluno.create({
      data: {
        name
      }
    })
    return aluno
  } catch (error) {
    throw error;
  }
}

export const getAlunosModel = async () => {
  try {
    const alunos = await prisma.aluno.findMany()
    return alunos
  } catch (error) {
    throw error;
  }
}

export const getAlunoByIdModel = async (id: number) => {
  try {
    const aluno = await prisma.aluno.findUnique({
      where: {
        id
      }
    })
    return aluno
  } catch (error) {
    throw error;
  }
}

export const deleteAlunoModel = async (id: number) => {
  try {
    await prisma.aluno.findUnique({
      where: {
        id
      }
    })

    await prisma.aluno.delete({
      where: {
        id
      }
    })
  } catch (error) {
    throw error;
  }
}