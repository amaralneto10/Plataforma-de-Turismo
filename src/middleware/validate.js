

export const validate = (schema) => {
    return (req, res, next) => {
        try {
            const validateData = schema.parse(req.body)
            req.body = validateData
            next()
        } catch (error) {
            return res.status(400).json({mensagem: `Erro de validação: ${error.errors.map(e => ({
                path: e.path,
                message: e.message
            }))}`})
        }
    }
}