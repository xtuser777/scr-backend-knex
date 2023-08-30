export default class EnterprisePerson {
  /**
   *
   * @param {number} id
   * @param {string} corporateName
   * @param {string} fantasyName
   * @param {string} cnpj
   */
  constructor(id = 0, corporateName = '', fantasyName = '', cnpj = '') {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.corporateName = corporateName;
    /** @private @type {string} */
    this.fantasyName = fantasyName;
    /** @private @type {string} */
    this.cnpj = cnpj;
  }

  /** @returns {number} */
  getId() { return this.id; }

  /**
   * @param {number} v
   * @returns {void}
   */
  setId(v) { this.id = v; }

  /** @returns {string} */
  getCorporateName() { return this.corporateName; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setCorporateName(v) { this.corporateName = v; }

  /** @returns {string} */
  getFantasyName() { return this.fantasyName; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setFantasyName(v) { this.fantasyName = v; }

  /** @returns {string} */
  getCnpj() { return this.cnpj; }

  /**
   * @param {string} v
   * @returns {void}
   */
  setCnpj(v) { this.cnpj = v; }
}
