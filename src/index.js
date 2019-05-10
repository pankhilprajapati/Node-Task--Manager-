const express = require('express')
require('./db/mongoose')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next)=>{
//     if(req.method === 'GET'){
//         res.send("Ge request are disable")
//     }else{
//         next()
//     }
// })

// app.use((req, res, next)=>{
//     res.status(503).send("Site is at maintenance")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require("./models/task"),
      User = require("./models/user")

const main = async ()=>{
    const user = await User.findById('5cd549daf598566cdaef2981')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()