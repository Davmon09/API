const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Davmon09:jesus1998@cluster0.2fj43cf.mongodb.net/primerapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Chanchito triste', edad: 25})
    const saveUser = await user.save()
    console.log(saveUser)
}

/* crear() */

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({username: 'Chanchito feliz'})
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: 'Chanchito feliz'})
    console.log(user)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({username: 'Chanchito feliz'})
    console.log(user)
    user.edad = 35
    await user.save()
}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({username: 'Chanchito triste'})
    console.log(user)
    if (user) {
        await user.destroy()
    }
}

eliminar()
