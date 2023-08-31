/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import State from '../models/State';
import Database from '../database/index';
import StateService from '../services/StateService';

export default class StateController {
  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async index(req, res) {
    try {
      /** @type {State[]} */
      const states = await new StateService().get();
      return res.json(states);
    } catch (error) {
      console.error(error);
      return res.status(400).json(error.message);
    }
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async show(req, res) {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json('parâmetro ausente');
    try {
      /** @type {State} */
      const state = await new StateService().getOne({ id });
      return res.json(state);
    } catch (error) {
      console.error(error);
      return res.status(400).json(error.message);
    }
  }
}
