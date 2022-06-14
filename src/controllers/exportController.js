import form from "../models/Formulario.js";
import xl from 'excel4node';

class ExportController {

    static listarCandidatos = (req, res) => {
        form.find()
            .sort({ created_at: 1 })
            .exec((err, form) => {
                res.status(200).json(form)
            })
    }

    static salvarExcel = (req, res) => {
        const wb = new xl.Workbook();
        const ws = new wb.addWorksheet('Candidatos');
        style = wb.createStyle({
            font: {
              color: '#FF0800',
              size: 12,
            },
            numberFormat: '$#,##0.00; ($#,##0.00); -',
          });
           
        const data = ExportController.listarCandidatos;

        const headingColumnNames = [
            "Nome",
            "Email",
            "Idade",
            "Rede onde Trabalha",
            "Escola",
            "Segmento de Atuacao",
            "Cargo",
            "Acesso Liberado"
        ];

        let headingColumnIndex = 1;
            headingColumnNames.forEach(heading => {
                console.log(heading);
        })

        

        // wb.write('aquivos.xlsx');
        // res.status(500).send({ message: `FEITo` })
    }
}

export default ExportController



