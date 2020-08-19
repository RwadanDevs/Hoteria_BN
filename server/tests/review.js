import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

dotenv.config()

const credentials = [
    {
        username: process.env.MANAGER_USERNAME,
        password: process.env.MANAGER_PASSWORD
    }
]

describe('>>> Testing Route (REVIEWS) <<<',()=>{
    let token,review_id;
    it('MANAGER AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[0])
        .end((err, res) => {
            token = res.body.data.token;
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('REVIEW ITEM NOT FOUND',(done)=>{
        chai
        .request(app)
        .get('/api/v1/review/1098')
        .set('authorization',token)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
        });
        done();
    })

    it('GET ALL REVIEWS',(done)=>{
        chai
        .request(app)
        .get('/api/v1/review/1')
        .set('authorization',token)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('CREATE REVIEW VALIDATION',(done)=>{
        chai
        .request(app)
        .post('/api/v1/review/1')
        .set('authorization',token)
        .send({item:'[1,2]'})
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
        done();
        });
    })

    it('CREATE REVIEW NOT FOUND',(done)=>{
        chai
        .request(app)
        .post('/api/v1/review/13433')
        .set('authorization',token)
        .send({ content:' i had a great time', rate: 4 })
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    })

    it('CREATE REVIEW SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/review/1')
        .set('authorization',token)
        .send({ content:' i had a great time', rate: 4 })
        .end((err, res) => {
            review_id = res.body.data.id;
          expect(res.statusCode).to.equal(201);
          done();
        });
    })

    it('DELETE REVIEW NOT FOUND',(done)=>{
        chai
        .request(app)
        .delete(`/api/v1/review/45534`)
        .set('authorization',token)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    })

    it('DELETE REVIEW SUCCESS',(done)=>{
        chai
        .request(app)
        .delete(`/api/v1/review/${review_id}`)
        .set('authorization',token)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    })
})
