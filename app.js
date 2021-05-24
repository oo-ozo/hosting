var ex = require('express')

var app = ex()

app.listen(process.env.port || 5000, ()=>console.log("server running"))

app.get('/', (req, rea){
	rea.send("host complete")
})

//heroku
