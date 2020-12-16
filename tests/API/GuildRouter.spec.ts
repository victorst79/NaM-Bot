import 'mocha';
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
import { server } from '../test_config'

describe('Guild ID', () => {
  it('should return response on call', done => {
    chai
      .request(server)
      .get('/guild/699517667177922571')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  })
})