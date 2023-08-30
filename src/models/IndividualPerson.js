export default class IndividualPerson {
  /**
   * @param {number} id
   * @param {string} name
   * @param {string} cpf
   * @param {string} birth
   */
  constructor(id = 0, name = '', cpf = '', birth = '') {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.name = name;
    /** @private @type {string} */
    this.cpf = cpf;
    /** @private @type {string} */
    this.birth = birth;
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
  getCpf() { return this.cpf; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setCpf(v) { this.cpf = v; }

  /** @returns {string} */
  getBirth() { return this.birth; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setBirth(v) { this.birth = v; }
}
