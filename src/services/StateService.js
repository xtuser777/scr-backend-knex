/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import knex from '../database';
import State from '../models/State';
import CityService from './CityService';

export default class StateService {
  getOne = async (params) => {
    /** @type {State | undefined} */
    let state;
    try {
      const row = await knex.select().from('state').where(params).first();
      state = new State(row.id, row.name, row.acronym, await new CityService().get(row.id));
    } catch (err) {
      console.error(err);
    }

    return state;
  };

  get = async () => {
    /** @type {State[]} */
    const states = [];
    try {
      const rows = await knex.select().from('state');
      for (const row of rows) {
        const cities = await new CityService().get(row.id);
        states.push(new State(row.id, row.name, row.acronym, cities));
      }
    } catch (err) {
      console.error(err);
    }

    return states;
  };
}
