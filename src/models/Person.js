/* eslint-disable no-unused-vars */
import Contact from './Contact';
import IndividualPerson from './IndividualPerson';
import EnterprisePerson from './EnterprisePerson';

export default class Person {
  /**
   * @param {number} id
   * @param {number} type
   * @param {IndividualPerson | undefined} individual
   * @param {EnterprisePerson | undefined} enterprise
   * @param {Contact | undefined} contact
   */
  constructor(
    id = 0,
    type = 0,
    individual = undefined,
    enterprise = undefined,
    contact = undefined,
  ) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {number} */
    this.type = type;
    /** @private @type {IndividualPerson | undefined} */
    this.individual = individual;
    /** @private @type {EnterprisePerson | undefined} */
    this.enterprise = enterprise;
    /** @private @type {Contact | undefined} */
    this.contact = contact;
  }

  /** @returns {number} */
  getId() { return this.id; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setId(v) { this.id = v; }

  /** @returns {number} */
  getType() { return this.type; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setType(v) { this.type = v; }

  /** @returns {IndividualPerson | undefined} */
  getIndividual() { return this.individual; }

  /**
   * @param {IndividualPerson | undefined} v
   * @returns {void}
   */
  setIndividual(v) { this.individual = v; }

  /** @returns {EnterprisePerson | undefined} */
  getEnterprise() { return this.enterprise; }

  /**
   * @param {EnterprisePerson | undefined} v
   * @returns {void}
   */
  setEnterprise(v) { this.enterprise = v; }

  /** @returns {Contact | undefined} */
  getContact() { return this.contact; }

  /**
   * @param {Contact | undefined} v
   * @returns {void}
   */
  setContact(v) { this.contact = v; }
}
