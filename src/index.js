const lambdaResp = {
  /**
   * Lambda standard success response.
   *
   * @param  {integer}  statusCode  - Http status code to be mapped.
   * @param  {object}  data  - Payload to return.
   * @return {object}  - Response object to return, success statuses should return through the first
   *                     param in the Lambda callback so this does not need to be stringified.
   */
  success(statusCode, data) {
    const response = {};
    response.status = 'success';
    response.httpStatus = statusCode;
    response.data = data;

    return response;
  },

  /**
   * Lambda standard error response.
   *
   * @param  {integer}  statusCode  - Http status code to be mapped.
   * @param  {string}  message  - Error message.
   * @param  {data}  data  - Additional error information.
   * @return  {string}  - Stringified standard object. Has to be stringified, as Lambda tries to
   *                      return the first param in the callback function as a string.
   */
  error(statusCode, message, data) {
    const response = {};
    response.status = 'error';
    response.httpStatus = statusCode;
    response.message = message;
    response.data = data;

    return JSON.stringify(response);
  },

  /**
   * Lambda standard error response.
   *
   * @param  {integer}  statusCode  - Http status code to be mapped.
   * @param  {object}  data  - Payload to return.
   * @return  {string}  - Stringified standard object. Has to be stringified, as Lambda tries to
   *                      return the first param in the callback function as a string.
   */
  fail(statusCode, data) {
    const response = {};
    response.status = 'fail';
    response.data = data;
    response.httpStatus = statusCode;

    return JSON.stringify(response);
  },
};

export default lambdaResp;
