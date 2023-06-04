const { Router } = require('express')
const {
    deleteTask,
    getTasks,
    getTasksById,
    postTask,
    putTask
} = require('../controllers/tasks.controller')

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTasksById)
router.post('/tasks', postTask)
router.put('/tasks/:id', putTask)
router.delete('/tasks/:id', deleteTask)


module.exports = router