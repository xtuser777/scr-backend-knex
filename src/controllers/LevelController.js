/* eslint-disable no-unused-vars */
import Level from '../models/Level';
import LevelService from '../services/LevelService';

export default class LevelController {
  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  index = async (req, res) => {
    /** @type {Level[]} */
    const levels = await new LevelService().get();
    return res.json(levels);
  };

  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async show(req, res) {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json('parâmetro ausente');
    try {
      /** @type {Level} */
      const level = await new LevelService().getOne(id);
      return res.json(level);
    } catch (error) {
      console.error(error);
      return res.status(400).json(error.message);
    }
  }
}
