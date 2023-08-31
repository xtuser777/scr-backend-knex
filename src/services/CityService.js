import knex from '../database';
import City from '../models/City';
import State from '../models/State';

export default class CityService {
  getOne = async (id) => {
    if (id === undefined || id <= 0) return undefined;
    /** @type {City | undefined} */
    let city;
    try {
      const row = await knex
        .select(
          'c.id as cid',
          'c.name as cname',
          'c.state_id',
          's.id as sid',
          's.name as sname',
          's.acronym',
        )
        .from('city as c')
        .join('state as s', 's.id', 'c.state_id')
        .where('c.id', '=', id)
        .first();
      city = new City(row.cid, row.cname, new State(row.sid, row.sname, row.acronym));
    } catch (err) {
      console.error(err);
    }

    return city;
  };

  get = async (state) => {
    /** @type {City[]} */
    const cities = [];
    try {
      const rows = state !== undefined
        ? await knex
          .select(
            'c.id',
            'c.name',
          )
          .from('city as c').where('c.state_id', '=', state)
        : await knex
          .select(
            'c.id',
            'c.name',
          )
          .from('city as c');
      rows.forEach((row) => cities.push(new City(row.id, row.name)));
    } catch (err) {
      console.error(err);
    }

    return cities;
  };
}
