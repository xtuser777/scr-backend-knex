export default class State {
  /**
   * @param {number} id
   * @param {string} name
   * @param {string} acronym
   * @param {City[]} cities
   */
  constructor(id = 0, name = '', acronym = '', cities = []) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.name = name;
    /** @private @type {string} */
    this.acronym = acronym;
    /** @private @type {City[]} */
    this.cities = cities;
  }

  /** @returns {number} */
  getId() { return this.id; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setId(v) { this.id = v; }

  /** @returns {string} */
  getName() { return this.name; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setName(v) { this.name = v; }

  /** @returns {string} */
  getAcronym() { return this.acronym; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setAcronym(v) { this.acronym = v; }

  /** @returns {City[]} */
  getCities() { return this.cities; }

  /**
   * @param {City[]} v
   * @returns {void}
   */
  setCities(v) { this.cities = v; }
}
