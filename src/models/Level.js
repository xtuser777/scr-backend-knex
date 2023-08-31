export default class Level {
  constructor(id = 0, description = '') {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.description = description;
  }

  getId = () => this.id;

  /** @param {number} v */
  setId = (v) => { this.id = v; };

  getDescription = () => this.description;

  /** @param {string} v */
  setDescription = (v) => { this.description = v; };
}
