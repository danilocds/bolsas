import express from "express";
import escolas from './escolasRoute.js'
import candidatos from './formulariosRoute.js'
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.redirect('public/index.html')
    })
    
    app.route('/').post((req, res) => {
        res.send(req.body)
    })

    app.use(
        express.json(),
        escolas,
        candidatos
    )
}

export default routes