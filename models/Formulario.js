import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        idade: {type: Number, requiered: true},
        redeTrabalho: {type: String, required: true},
        escola: { type: mongoose.Schema.Types.ObjectId, ref: 'escolas', required: true },        
        segmentoAtuacao: {type: String, required: true},
        cargo: {type: String, required:true}
    },
    {
        versionKey: false
    }
)

formSchema.set('timestamps', true);

const form = mongoose.model("candidatos", formSchema)

export default form;