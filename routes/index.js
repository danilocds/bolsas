import express from "express";

app
   .use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .get('/', (req, res) => res.render('pages/index'))
   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

export default routes