const usuarioSchema = require('./usuario-schema')

const all = async (req, res) => {
    const usuarios = await usuarioSchema.find();
    return res.json(usuarios)
}

const findById = async (req,res) => {
    const { id } = req.params
    const model = await usuarioSchema.findById(id)
    if(!model)
        return res.status(404).send('Usuario não encontrado') //retorna erro caso não encontre o ID
    else
        return res.json(model) //retorna os dados do usuario
}

const save = async (req, res) => {
    const {id} = req.params
    const {body} = req

    //atualiza caso exista o ID
    if(id){
        await usuarioSchema.updateOne({_id: id}, {$set: body})
        
        const updated = await usuarioSchema.findById(id)
        
        return res.status(202).send(updated)
    } else {
        const usuario = new usuarioSchema(body)
        await usuario.save()
        return res.status(201).send(usuario)
    }
}

const delUser = async (req, res) => {
    const {id} = req.params
    await usuarioSchema.deleteOne({_id: id});
    return res.status(204).send('Usuario removido com sucesso!')
}

module.exports = {
    all,
    findById,
    save,
    delUser
}