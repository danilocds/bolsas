import form from "../models/Formulario.js";

class FormController {

    static listarCandidatos = (req,res) => {
        form.find()
            .sort({nome: 1})            
            .exec((err, form) => {
            res.status(200).json(form);
        })    
    }

    static cadastrarCandidato = (req,res) => {
        let candidato = new form(req.body);
        candidato.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar a candidato`})
            } else {
                res.status(201).redirect("obrigado.html");
            }
        })
    }
}

export default FormController