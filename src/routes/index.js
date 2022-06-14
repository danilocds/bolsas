
import escolas from './escolasRoute.js'
import candidatos from './formulariosRoute.js'
import exportar from './exportRoute.js'

const routes = (app) => {
    app.use(
        escolas,
        candidatos,
        exportar
    )
}

export default routes