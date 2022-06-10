import escolas from "../models/Escolas.js";

class EscolaController {

    static listarEscolas = (req,res) => {
        escolas.find()
            .sort({nomeEscola: 1})            
            .exec((err, escolas) => {
            res.status(200).json(escolas);
        })    
    }

    static listarDiretores = (req,res) => {
        escolas.find()
            .sort({diretor: 1})            
            .exec((err, escolas) => {
            res.status(200).json(escolas);
        })    
    }

    static cadastrarEscola = (req,res) => {
        let escola = new escolas(req.body);
        escola.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar a Escola`})
            } else {
                res.status(201).redirect("http://localhost:3000/escolas.html?status=sucesso");
            }
        })
    }

    static atualizarEscola = (req, res) => {
        const id = req.params.id;

        escolas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Escola Atualizada com Sucesso'});
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar Escola`});
            }
        })
    }

    static excluirEscola = (req, res) => {
        const id = req.params.id;

        escolas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Escola Excluida com Sucesso'});
            } else {
                res.status(500).send({message: `${err.message} - falha ao excluir Escola`});
            }
        })
    }

}

export default EscolaController