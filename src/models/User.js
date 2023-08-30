/* eslint-disable no-unused-vars */
import Person from './Person';

export default class User {
  /**
   * @param {number} id
   * @param {string} login
   * @param {string} password
   * @param {Person | undefined} person
   */
  constructor(id = 0, login = '', password = '', person = undefined) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.login = login;
    /** @private @type {string} */
    this.password = password;
    /** @private @type {Person | undefined} */
    this.person = person;
  }

  /** @returns {number} */
  getId() { return this.id; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setId(v) { this.id = v; }

  /** @returns {string} */
  getLogin() { return this.login; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setLogin(v) { this.login = v; }

  /** @returns {string} */
  getPassword() { return this.password; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setPassword(v) { this.password = v; }

  /** @returns {Person | undefined} */
  getPerson() { return this.person; }

  /**
   * @param {Person | undefined} v
   * @returns {void}
   */
  setPerson(v) { this.person = v; }
}
