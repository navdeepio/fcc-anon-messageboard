/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const { assert } = require('chai');
const server = require('../server');
const Thread = require('../Thread');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    suite('POST', function() {
      test('Creating a new thread works', function (done) {
        chai.request(server)
          .post('/api/threads/test')
          .send({ text: 'hello world', delete_password: 'abcdef'})
          .end(function(err, res) {
            assert.equal(res.status, 302);
            // check out the response body
            done();
          })
      })
    });
    
    suite('GET', function() {
      
    });
    
    suite('DELETE', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    

  });
  
  suite('API ROUTING FOR /api/replies/:board', function() {
    
    suite('POST', function() {
      
    });
    
    suite('GET', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    
    suite('DELETE', function() {
      
    });
    
  });

});

after(async () => {
  await Thread.deleteMany({});
});
