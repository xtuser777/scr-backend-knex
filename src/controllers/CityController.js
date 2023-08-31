/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import City from '../models/City';
import Database from '../database/index';
import CityService from '../services/CityService';

export default class CityController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async index(req, res) {
    try {
      /** @type {City[]} */
      const cities = await new CityService().get();
      return res.json(cities);
    } catch (error) {
      console.error(error);
      return res.status(400).json(error.message);
    }
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async show(req, res) {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json('parâmetro ausente');
    try {
      /** @type {City} */
      const city = await new CityService().getOne(id);
      return res.json(city);
    } catch (error) {
      console.error(error);
      return res.status(400).json(error.message);
    }
  }
}
