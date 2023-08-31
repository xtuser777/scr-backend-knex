/* eslint-disable no-restricted-syntax */
import knex from '../database';
import Level from '../models/Level';

export default class LevelService {
  getOne = async (id) => {
    if (id === undefined || id <= 0) return undefined;
    /** @type {Level | undefined} */
    let level;
    try {
      const row = await knex.select().from('level').where('id', '=', id).first();
      level = row;
    } catch (err) {
      console.error(err);
    }

    return level;
  };

  get = async () => {
    /** @type {Level[]} */
    const levels = [];
    try {
      const rows = await knex.select().from('level');
      for (const row of rows) {
        levels.push(new Level(row.id, row.description));
      }
    } catch (err) {
      console.error(err);
    }

    return levels;
  };
}
