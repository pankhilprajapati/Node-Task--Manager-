const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/task', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



