process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();
chai.use(chaiHttp);
describe('/POST trip routes', () => {
  it('it should GET all the users', (done) => {
    chai.request(server)
      .post('/api/findTrip/searchCab')
      .set({ Authorization: "kjffdkkfkjdf" })
      .end((err, res) => {
          console.log(res)
        res.should.have.status(200);
        res.body.should.be.a('object');
        console.log(res.body)
        done();
      });
  });
});
