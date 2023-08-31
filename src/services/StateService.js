import knex from '../database';
import State from '../models/State';

export default class StateService {
  getOne = async (params) => {
    /** @type {State | undefined} */
    let state;
    try {
      const row = await knex.select().from('state').where(params).first();
      state = row;
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
      rows.forEach((row) => {
        states.push(new State(row.id, row.name, row.acronym));
      });
    } catch (err) {
      console.error(err);
    }

    return states;
  };
}
