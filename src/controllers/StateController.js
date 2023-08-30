/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import mariadb from 'mariadb';
import State from '../models/State';
import StateRepository from '../repository/StateRepository';
import Database from '../database/index';

export default class StateController {
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
    //   /** @type {State[]} */
    //   const states = await new StateRepository(connection).find();
    //   await connection.end();
    //   return res.json(states);
    // } catch (error) {
    //   console.error(error);
    //   return res.status(400).json(error.message);
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
    //   /** @type {State} */
    //   const state = await new StateRepository(connection).findOne({ id });
    //   connection.destroy();
    //   return res.json(state);
    // } catch (error) {
    //   console.error(error);
    //   return res.status(400).json(error.message);
    // }
    return res.json();
  }
}
