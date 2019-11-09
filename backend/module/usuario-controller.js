const usuario = require('./usuario-schema')

const all = async (req, res) => {
    const usuarios = await usuario.find();
    return res.json(usuarios)
}

const save = async (req, res) => {
    const {body} = req

    try{
        const resposta = await usuario.create(body)
        console.log(res.json(resposta))
    } catch (err){
        console.log(err)
    }
}

const update = async (req, res) => {
    const {body} = req
    const {id} = req.params

    try{
        const resposta = await usuario.findOneAndUpdate({id}, body, {new:true})
        console.log(res.json(resposta))
    }
    catch(err){
        console.log(err)
    }
}

const delUser = async (req, res) => {
    const {body} = req
    const {id} = req.params

    try{
        const resposta = await usuario.findOneAndDelete({id}, body)
        console.log(res.json(resposta))
    }
    catch(err){
        console.log(err)
    }
}

const findUser = async (req, res) => {
    const {id} = req.params

    try{
        const resposta = await usuario.findById({id})
        console.log(res.json(resposta))
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    all,
    update,
    save,
    delUser,
    findUser
}