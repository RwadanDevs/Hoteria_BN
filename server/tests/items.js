import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

dotenv.config()

const credentials = [
    {
        username: process.env.COOK_USERNAME,
        password: process.env.COOK_PASSWORD
    },{
        username: process.env.GUEST_USERNAME,
        password: process.env.GUEST_PASSWORD,
        origin_id:12,
        origin_type:'table',
    }
]

describe('>>> Testing Route (ITEMS) <<<',()=>{
    let cookToken,guestToken;

    it('COOK AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[0])
        .end((err, res) => {
            cookToken = res.body.data.token;
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('GUEST AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[1])
        .end((err, res) => {
            guestToken = res.body.data.token;
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('TOKEN AUTH FAILURE',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/items`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(401);
        });
        done();
    })

    it('ALL ITEMS SUCCESS',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/items`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('SPECIFIC ITEMS NOT FOUND',(done)=>{
      chai
      .request(app)
      .get('/api/v1/items/1876')
      .set('authorization',guestToken)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    })

    it('SPECIFIC ITEMS SUCCESS',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/items/1`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('CREATE ITEMS ROLE',(done)=>{
        chai
        .request(app)
        .post(`/api/v1/items`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(403);
        });
        done();
    })

    it('CREATE ITEMS VALIDATION',(done)=>{
        chai
        .request(app)
        .post(`/api/v1/items`)
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
        });
        done();
    })
    
    it('UPDATE ITEM NOT fOUND',(done)=>{
        chai
        .request(app)
        .patch('/api/v1/items/1098')
        .set('authorization',cookToken)
        .send({
            name: 'ishu',
            food_type: 'vegetable',
            description: 'for bunnies'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    })

    it('DELETE ITEM NOT fOUND',(done)=>{
        chai
        .request(app)
        .delete('/api/v1/items/1098')
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
        });
        done();
    })

    it('DELETE ITEM SUCCESS',(done)=>{
        chai
        .request(app)
        .delete('/api/v1/items/3')
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })
})
