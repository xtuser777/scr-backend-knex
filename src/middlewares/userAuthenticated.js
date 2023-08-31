import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ errors: ['Acesso negado.'] });

  const [, token] = authorization.split(' ');

  // try {
  //   const dados = jwt.verify(token, process.env.TOKEN_SECRET);

  //   const user = await User.findOne({
  //     attributes: ['id', 'email'],
  //     where: { id: dados.id, email: dados.email },
  //   });
  //   if (!user) return res.status(401).json({ errors: ['Usuário inválido.'] });

  //   req.userId = dados.id;
  //   req.userEmail = dados.email;

  //   return next();
  // } catch (e) {
  //   console.error(e);
  //   return res.status(401).json({ errors: ['Token inválido ou expirado.'] });
  // }
  return next();
};
