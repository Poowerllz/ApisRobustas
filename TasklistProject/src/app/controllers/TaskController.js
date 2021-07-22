import Task from '../models/Task';
import * as Yup from 'yup'

class TaskController {

  async index(req, res) {
    const tasks = await Task.findAll({
      where: {user_id: req.userId, check:false,}
    })

    return res.json(tasks)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      task: Yup.string().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Falha ao cadastrar." })
    }
    const { task } = req.body;


    console.log(task)
    const tasks = await Task.create({
      user_id: req.userId,
      task,
    })

    return res.status(401).json({ Status: "Ok! tarefa criada." })
  }
}


export default new TaskController();
