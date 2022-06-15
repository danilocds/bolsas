
import escolas from './escolasRoute.js'
import candidatos from './formulariosRoute.js'

const routes = (app) => {
    app.use(
        escolas,
        candidatos
    )
}

export default routes