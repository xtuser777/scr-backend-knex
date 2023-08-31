/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import City from '../models/City';
import Database from '../database/index';

export default class CityController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async index(req, res) {
    // try {
    //   /** @type {Database} */
    //   const db = Database;
    //   /** @type {mariadb.Connection} */
    //   const connection = await db.getConnection();
    //   if (!connection) return res.status(400).json('erro de conexão ao banco.');
    //   /** @type {City[]} */
    //   const cities = await new CityRepository(connection).find();
    //   connection.destroy();
    //   return res.json(cities);
    // } catch (error) {
    //   console.error(error);
    //   return res.status(400).json(error.message);
    // }
    return res.json();
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
    // try {
    //   /** @type {Database} */
    //   const db = Database;
    //   /** @type {mariadb.Connection} */
    //   const connection = await db.getConnection();
    //   if (!connection) return res.status(400).json('erro de conexão ao banco.');
    //   /** @type {City} */
    //   const city = await new CityRepository(connection).findOne({ id });
    //   connection.destroy();
    //   return res.json(city);
    // } catch (error) {
    //   console.error(error);
    //   return res.status(400).json(error.message);
    return res.json();
  }
}
