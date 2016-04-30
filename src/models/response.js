/**
 * Standard response model, used for building the shared response object for all statuses.
 */
class Response {

  /**
   * Builds up the standard structure object for fail, success and error.
   *
   * @param  {string}  status  - Should be either 'error', 'success' or 'fail'.
   * @param  {integer}  httpStatus  - HTTP status code to be sent in the structure object, used for
   *                                  mapping responses in API Gateway.
   * @param  {object}  data  - Used to send main data in the response, optional for error responses.
   * @param  {string}  message - Used only in error responses. This should be the error message.
   * @return  {object}  - The current object.
   */
  constructor(status, httpStatus, data, message) {
    const messageToAdd = message || '';

    this.structure = {};
    this.structure.status = status;
    this.structure.httpStatus = httpStatus;


    if (data) {
      this.structure.data = data;
    }

    if (status === 'error') {
      this.structure.message = messageToAdd;
    }

    return this;
  }

  /**
   * Gets the structure object built in the constructor.
   *
   * @return  {object}  - Response structure object.
   */
  getStructure() {
    return this.structure;
  }

  /**
   * Gets the JSON stringified structure object.
   *
   * @return  {string}  - JSON stringified response structure object.
   */
  getStringifiedStructure() {
    return JSON.stringify(this.structure);
  }
}

export { Response };
