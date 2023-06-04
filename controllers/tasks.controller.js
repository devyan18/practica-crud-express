let listOfTasks = [
    {
        id: 1,
        title: 'Do homework',
        description: 'lorem ipsum',
        done: false
    },
    {
        id: 2,
        title: 'Do homework',
        description: 'lorem ipsum',
        done: true
    }
]

const getTasks = (_req, res) => {
    res.json(listOfTasks)
}

const getTasksById = (req, res) => {
    const taskId = req.params.id
    const tareaEncontrada = listOfTasks.find((task) => task.id === +(taskId))

    if (!tareaEncontrada) {
        return res.status(404).json({
            msg: 'no se encontro la tarea'
        })
    } 

    res.status(200).json(tareaEncontrada)
}

const postTask = (req, res) => {
    const {title, description, done} = req.body
    const listaDeIds = listOfTasks.map(task => task.id) // => [1,4,3]
 
    // buscamos un id único
    const nuevaId = Math.max(...listaDeIds)+1 // ([1,4,3]) !==  con "..." === (1,4,3)

    const nuevaTarea = {
        id: nuevaId,
        title: title, // si la clave y el valor son iguales, se puede hacer lo de la linea de abajo
        description, // esto se puede hacer por que la clave y el valor son iguales
        done
    }

    listOfTasks.push(nuevaTarea)

    res.status(201).json(nuevaTarea)
}

const putTask = (req, res) => {
    const {title, description, done} = req.body
    const taskId = req.params.id

    let tareaEncontrada = listOfTasks.find((task) => task.id === +(taskId))

    if (!tareaEncontrada){
        return res.status(404).json({
            msg: "Esta tarea no existe"
        })
    }

    tareaEncontrada = Object.assign(tareaEncontrada,{title, description, done})

    listOfTasks = listOfTasks.map((task) => {
        if (task.id === taskId) {
            return tareaEncontrada
        }
        
        return task
    })

    res.status(202).json(tareaEncontrada)
}

const deleteTask = (req, res) => {
    const taskId = req.params.id
    listOfTasks = listOfTasks.filter((task) => task.id !== +(taskId))
    res.status(202).json(listOfTasks)
}

module.exports = {
    getTasks,
    getTasksById,
    postTask,
    putTask,
    deleteTask
}