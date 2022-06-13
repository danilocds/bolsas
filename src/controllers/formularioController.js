import form from "../models/Formulario.js";

class FormController {

    static listarCandidatos = (req, res) => {
        form.find()
            .sort({ created_at: 1 })
            .exec((err, form) => {
                res.status(200).json(form)
            })
    }

    static cadastrarCandidato = (req, res) => {
        let candidato = new form(req.body);
        candidato.save((err) => {
            if (err) {
                if (err.code === 11000) {
                    res.status(401).render('pages/duplicado');
                } else {
                    res.status(500).send({ message: `${err.number} - falha ao cadastrar a candidato` })
                }
            } else {
                res.status(201).redirect("obrigado");
            }
        })
    }
}

export default FormController