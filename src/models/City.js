/* eslint-disable no-unused-vars */
import State from './State';

export default class City {
  /**
   *
   * @param {number} id
   * @param {string} name
   * @param {State | undefined} state
   */
  constructor(id = 0, name = '', state = undefined) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.name = name;
    /** @private @type {State | undefined} */
    this.state = state;
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

  /** @returns {State | undefined} */
  getState() { return this.state; }

  /**
   * @param {State | undefined} v
   * @returns {void}
   */
  setState(v) { this.state = v; }
}
