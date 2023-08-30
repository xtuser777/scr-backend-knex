export default class ResponseData {
  /**
   * @param {boolean} success
   * @param {number} insertedId
   * @param {number} affectedRows
   * @param {string} message
   */
  constructor(success = false, insertedId = 0, affectedRows = 0, message = '') {
    this.success = success;
    this.insertedId = insertedId;
    this.affectedRows = affectedRows;
    this.message = message;
  }
}
