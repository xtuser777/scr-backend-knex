/* eslint-disable no-unused-vars */
import City from './City';

export default class Address {
  /**
   * @param {number} id
   * @param {string} street
   * @param {string} number
   * @param {string} neightborhood
   * @param {string} complement
   * @param {string} code
   * @param {City | undefined} city
   */
  constructor(id = 0, street = '', number = '', neightborhood = '', complement = '', code = '', city = undefined) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.street = street;
    /** @private @type {string} */
    this.number = number;
    /** @private @type {string} */
    this.neightborhood = neightborhood;
    /** @private @type {string} */
    this.complement = complement;
    /** @private @type {string} */
    this.code = code;
    /** @private @type {City | undefined} */
    this.city = city;
  }

  /** @returns {number} */
  getId() { return this.id; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setId(v) { this.id = v; }

  /** @returns {string} */
  getStreet() { return this.street; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setStreet(v) { this.street = v; }

  /** @returns {string} */
  getNumber() { return this.number; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setNumber(v) { this.number = v; }

  /** @returns {string} */
  getNeightborhood() { return this.neightborhood; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setNeightborhood(v) { this.neightborhood = v; }

  /** @returns {string} */
  getComplement() { return this.complement; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setComplement(v) { this.complement = v; }

  /** @returns {string} */
  getCode() { return this.code; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setCode(v) { this.code = v; }

  /** @returns {City | undefined} */
  getCity() { return this.city; }

  /**
   * @param {City | undefined} v
   * @returns {void}
   */
  setCity(v) { this.city = v; }
}
