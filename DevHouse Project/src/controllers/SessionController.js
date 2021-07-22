// Methods - Index, Show, Update, Store, Destroy

/*
Index: Listagem de sessões;
Store: Criar uma sessão;
Show: Lista uma única sessão;
Update: Atualização de sessão;
Destroy: Deletar uma sessão;

*/

import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Faltam dados no body!' });
    }

    if (!user) {
      const user = await User.create({ email });
      return res.status(200).json(user);
    }

    return res.json(user);
  }
}

export default new SessionController();
