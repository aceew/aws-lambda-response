import { Response } from './models/response';

const lambdaResp = {
  /**
   * Builds the structure for the standard success response.
   *
   * @param  {integer}  statusCode  - Http status code to be mapped.
   * @param  {object}  data  - Payload to return.
   * @return {object}  - Response object to return, success statuses should return through the first
   *                     param in the Lambda callback so this does not need to be stringified.
   */
  success(statusCode, data) {
    const response = new Response('success', statusCode, data);
    return response.getStructure();
  },

  /**
   * Builds the structure for the standard error response.
   *
   * @param  {integer}  statusCode  - Http status code to be mapped.
   * @param  {string}  message  - Error message.
   * @param  {object}  data  - Additional error information.
   * @return  {string}  - Stringified standard object. Has to be stringified, as Lambda tries to
   *                      return the first param in the callback function as a string.
   */
  error(statusCode, message, data) {
    const response = new Response('error', statusCode, data, message);
    return response.getStringifiedStructure();
  },

  /**
   * Builds the structure for the standard fail response.
   *
   * @param  {integer}  statusCode  - Http status code to be mapped.
   * @param  {object}  data  - Payload to return.
   * @return  {string}  - Stringified standard object. Has to be stringified, as Lambda tries to
   *                      return the first param in the callback function as a string.
   */
  fail(statusCode, data) {
    const response = new Response('fail', statusCode, data);
    return response.getStringifiedStructure();
  },
};

export default lambdaResp;
