const app = require('./bin/express')
const bodyParser = require('body-parser')
const routerUser = require('./module/rotas')
const port = 3333

app.use(bodyParser.json())
app.use('/api/user', routerUser)

app.listen(port, () => {
	console.log(`Api initialize sucess in port ${port}`)
});

