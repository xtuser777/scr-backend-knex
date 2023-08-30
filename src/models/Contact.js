/* eslint-disable no-unused-vars */
import Address from './Address';

export default class Contact {
  /**
   * @param {number} id
   * @param {string} phone
   * @param {string} cellphone
   * @param {string} email
   * @param {Address | undefined} address
   */
  constructor(id = 0, phone = '', cellphone = '', email = '', address = undefined) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.phone = phone;
    /** @private @type {string} */
    this.cellphone = cellphone;
    /** @private @type {string} */
    this.email = email;
    /** @private @type {Address | undefined} */
    this.address = address;
  }

  /** @returns {number} */
  getId() { return this.id; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setId(v) { this.id = v; }

  /** @returns {string} */
  getPhone() { return this.phone; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setPhone(v) { this.phone = v; }

  /** @returns {string} */
  getCellphone() { return this.cellphone; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setCellphone(v) { this.cellphone = v; }

  /** @returns {string} */
  getEmail() { return this.email; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setEmail(v) { this.email = v; }

  /** @returns {Address | undefined} */
  getAddress() { return this.address; }

  /**
   * @param {Address | undefined} v
   * @returns {void}
   */
  setAddress(v) { this.address = v; }
}
