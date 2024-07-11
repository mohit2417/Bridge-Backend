// tests/api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('API Endpoints', () => {

  describe('GET /api/tokens', () => {
    it('it should GET all the tokens', (done) => {
      chai.request(server)
          .get('/api/tokens')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              done();
          });
    });
  });

  describe('POST /api/quotes', () => {
    it('it should POST a quote request', (done) => {
      const quoteRequest = {
        token: 'TOKEN_NAME',
        chain: 'CHAIN_NAME'
      };
      chai.request(server)
          .post('/api/quotes')
          .send(quoteRequest)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('quote');
              done();
          });
    });
  });

  describe('POST /api/params', () => {
    it('it should POST a transaction params request', (done) => {
      const paramsRequest = {
        token: 'TOKEN_NAME',
        chain: 'CHAIN_NAME'
      };
      chai.request(server)
          .post('/api/params')
          .send(paramsRequest)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('params');
              done();
          });
    });
  });

});
