import Level from './Level';
import Person from './Person';

export default class Employee {
  constructor(
    id = 0,
    login = '',
    password = '',
    type = 0,
    admission = '',
    demission = undefined,
    person = new Person(),
    level = new Level(),
  ) {
    /** @private @type {number} */
    this.id = id;
    /** @private @type {string} */
    this.login = login;
    /** @private @type {string} */
    this.password = password;
    /** @private @type {number} */
    this.type = type;
    /** @private @type {string} */
    this.admission = admission;
    /** @private @type {string | undefined} */
    this.demission = demission;
    /** @private @type {Person} */
    this.person = person;
    /** @private @type {Level} */
    this.level = level;
  }

  getId = () => this.id;

  /** @param {number} v */
  setId = (v) => { this.id = v; };

  getLogin = () => this.login;

  /** @param {string} v */
  setLogin = (v) => { this.login = v; };

  getPassword = () => this.password;

  /** @param {string} v */
  setPassword = (v) => { this.password = v; };

  getType = () => this.type;

  /** @param {number} v */
  setType = (v) => { this.type = v; };

  getAdmission = () => this.admission;

  /** @param {string} v */
  setAdmission = (v) => { this.admission = v; };

  getDemission = () => this.demission;

  /** @param {string | undefined} v */
  setDemission = (v) => { this.demission = v; };

  getPerson = () => this.person;

  /** @param {Person} v */
  setPerson = (v) => { this.person = v; };

  getLevel = () => this.level;

  /** @param {Level} v */
  setLevel = (v) => { this.level = v; };
}
