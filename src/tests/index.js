/* eslint-env node, mocha */
import chai from 'chai';
const expect = chai.expect;

import lambdaResp from '../index';

describe('AWS Lambda Standard Response', () => {
  it('Builds a success structure and returns it as an object', () => {
    const result = lambdaResp.success(200, { hello: 'world' });

    expect(result).to.be.an('object');
    expect(result.status).to.equal('success');
    expect(result.httpStatus).to.equal(200);
    expect(result.data).to.be.an('object');
    expect(result.data.hello).to.equal('world');
  });

  it('Builds a JSON stringified error structure with a data object.', () => {
    const result = lambdaResp.error(503, 'A service this called was unavailable');
    const resultObject = JSON.parse(result);

    expect(result).to.be.a('string');
    expect(resultObject).to.be.an('object');
    expect(resultObject.status).to.equal('error');
    expect(resultObject.httpStatus).to.equal(503);
    expect(resultObject.data).to.equal(undefined);
    expect(resultObject.message).to.equal('A service this called was unavailable');
  });

  it('Builds a JSON stringified error structure without a data object.', () => {
    const result = lambdaResp.error(500, 'Something went terribly wrong.', { hello: 'world' });
    const resultObject = JSON.parse(result);

    expect(result).to.be.a('string');
    expect(resultObject).to.be.an('object');
    expect(resultObject.status).to.equal('error');
    expect(resultObject.httpStatus).to.equal(500);
    expect(resultObject.data).to.be.an('object');
    expect(resultObject.data.hello).to.equal('world');
    expect(resultObject.message).to.equal('Something went terribly wrong.');
  });

  it('Builds a JSON stringified fail structure.', () => {
    const result = lambdaResp.fail(400, { message: 'Address 1 parameter not specified.' });
    const resultObject = JSON.parse(result);

    expect(result).to.be.a('string');
    expect(resultObject).to.be.an('object');
    expect(resultObject.status).to.equal('fail');
    expect(resultObject.httpStatus).to.equal(400);
    expect(resultObject.data).to.be.an('object');
    expect(resultObject.data.message).to.equal('Address 1 parameter not specified.');
  });
});
