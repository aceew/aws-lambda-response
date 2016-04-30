/* eslint-env node, mocha */
import chai from 'chai';
const expect = chai.expect;

import { Response } from '../models/response';

describe('Response Model', () => {
  const response1 = new Response('success', 202);
  const response2 = new Response('success', 200, { foo: 'bar' });
  const response3 = new Response('error', 400, null, 'Invalid params');
  const response4 = new Response('error', 400);
  describe('Constructor', () => {
    it('Adds the status and httpStatus to the structure when they are both passed in', () => {
      const structure = response1.structure;
      expect(structure).to.be.an('object');
      expect(structure.status).to.equal('success');
      expect(structure.httpStatus).to.equal(202);
    });

    it('Adds the data object to the structure when a data object is specified', () => {
      const structure = response2.structure;
      expect(structure).to.be.an('object');
      expect(structure.data).to.be.an('object');
      expect(structure.data.foo).to.equal('bar');
    });

    it('Does not add the data object to the structure when a data object is not specified', () => {
      const structure = response1.structure;
      expect(structure).to.be.an('object');
      expect(structure.data).to.equal(undefined);
    });

    it('Adds a message when one is passed in and when the status is "error"', () => {
      const structure = response3.structure;
      expect(structure).to.be.an('object');
      expect(structure.message).to.be.a('string');
      expect(structure.message).to.equal('Invalid params');
    });

    it('Adds an empty message when the status is "error" and no message is specified', () => {
      const structure = response4.structure;
      expect(structure).to.be.an('object');
      expect(structure.message).to.be.a('string');
      expect(structure.message).to.equal('');
    });

    it('Does not add a message when the status is not "error"', () => {
      const structure = response1.structure;
      expect(structure).to.be.an('object');
      expect(structure.message).to.equal(undefined);
    });
  });

  describe('getStructure', () => {
    it('Returns the structure object', () => {
      const structure = response2.structure;
      expect(response2.getStructure()).to.equal(structure);
    });
  });

  describe('getStringifiedStructure', () => {
    it('Returns the structure object JSON stringified', () => {
      const structure = response2.structure;
      expect(response2.getStringifiedStructure()).to.equal(JSON.stringify(structure));
    });
  });
});
