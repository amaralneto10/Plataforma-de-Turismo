import { PrismaClient } from "@prisma/client";
import { compararSenha, gerarToken, hashPassword } from "../utils/auth.js";
const prisma = new PrismaClient()


export const registerUser = async (req, res) => {
    const { name, email, phone, password } = req.body

    try {

        const senhaCriptografada = await hashPassword(password)

        const register = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                password: senhaCriptografada
            }
        })

        const token = gerarToken(register)

        res.status(201).json({
            name: register.name,
            email: register.email,
            token
        })
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao registrar usuário: ${error.message}`})
    }
}

export const registerAdmin = async (req, res) => {
    const { name, email, phone, password } = req.body

    try {

        const senhaCriptografada = await hashPassword(password)

        const registerAdmin = await prisma.admin.create({
            data: {
                name,
                email,
                phone,
                password: senhaCriptografada,
                type: 'admin'
            }
        })

        const token = gerarToken(registerAdmin)

        res.status(201).json({
            name: registerAdmin.name,
            email: registerAdmin.email,
            token
        })
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao registrar Admin: ${error.message}`})
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        let user = await prisma.user.findUnique({
            where: { email }
        })
        let userType = 'user'

        if (!user) {
            user = await prisma.admin.findUnique({
                where: { email }
            })
            userType = 'admin'
        }

        if (!user) {
            res.status(401).json({mensagem: "Credenciais inválidas!"})
            return
        }

        const senhaCorreta = await compararSenha(password, user.password)

        if (!senhaCorreta) {
            res.status(401).json({mensagem: "Credenciais inválidas!"})
            return
        }

        const token = gerarToken({user, type: userType})

        res.json({usuario: {name: user.name, email: user.email},
        token})

    } catch (error) {
         res.status(500).json({mensagem: `Erro no login: ${error.message}`})
    }
}