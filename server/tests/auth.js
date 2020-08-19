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
        username: 'ishu',
        password: process.env.COOK_PASSWORD
    },{
        username: process.env.COOK_USERNAME,
        password: 'ISHU'
    },{
        username: process.env.GUEST_USERNAME,
        password: process.env.GUEST_PASSWORD,
        origin_id:12,
        origin_type:'table',
    },{
        username: process.env.MANAGER_USERNAME,
        password: process.env.MANAGER_PASSWORD
    },
]

describe('>>> Testing Route (User Auth) <<<',()=>{
    let token;
    
    it('Welcome Route',(done)=>{
        chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
      });
      done();
    })

    it('Route Not Found',(done)=>{
        chai
      .request(app)
      .get('/sadds')
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    })

    it('COOK AUTH JOI VALIDATION',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
        });
        done();
    })

    it('COOK AUTH USERNAME ERROR',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[1])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
        });
        done();
    })

    it('COOK AUTH PASSWORD ERROR',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[2])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
        });
        done();
    })

    it('COOK AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[0])
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('GUEST AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[3])
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('MANAGER AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[4])
        .end((err, res) => {
            token = res.body.data.token;
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('TOKEN AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/login/${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('TOKEN AUTH FAILURE',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/login/FGD${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(401);
        });
        done();
    })
    
})
