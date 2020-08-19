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
        password: process.env.COOK_PASSWORD,
    },{
        username: process.env.GUEST_USERNAME,
        password: process.env.GUEST_PASSWORD,
        origin_id:12,
        origin_type:'table',
    },{
        username: process.env.MANAGER_USERNAME,
        password: process.env.MANAGER_PASSWORD,
    }
]

const orders = [
    {
        items:'[1,2]'
    }
]

describe('>>> Testing Route (ORDERS) <<<',()=>{
    let cookToken,guestToken,managerToken,order_id;

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

    it('MANAGER AUTH SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/login')
        .send(credentials[2])
        .end((err, res) => {
            managerToken = res.body.data.token;
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('ALL ORDERS SUCCESS by GUEST',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/orders`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('ALL ORDERS SUCCESS by GUEST',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/orders`)
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('ALL PENDING ORDERS SUCCESS',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/orders?status=pending`)
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('SPECIFIC ORDERS FAILURE',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/orders/1987`)
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
        });
        done();
    })

    it('SPECIFIC ORDERS FAILURE',(done)=>{
      chai
      .request(app)
      .get(`/api/v1/orders/1`)
      .set('authorization',guestToken)
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
      });
      done();
  })

    it('SPECIFIC ORDERS SUCCESS',(done)=>{
        chai
        .request(app)
        .get(`/api/v1/orders/1`)
        .set('authorization',cookToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })

    it('CREATE ORDERS VALIDATION',(done)=>{
        chai
        .request(app)
        .post(`/api/v1/orders`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
    })

    it('CREATE ORDERS (Item Not Found)',(done)=>{
      chai
      .request(app)
      .post(`/api/v1/orders`)
      .set('authorization',guestToken)
      .send({items:'[89,98]'})
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
      });
      done();
    })

    it('CREATE ORDERS SUCCESS',(done)=>{
        chai
        .request(app)
        .post('/api/v1/orders')
        .set('authorization',guestToken)
        .send(orders[0])
        .end((err, res) => {
            order_id = res.body.data.id
          expect(res.statusCode).to.equal(201);
          done();
        });
    })

    it('CREATE ORDERS TOO MANY',(done)=>{
        chai
        .request(app)
        .post('/api/v1/orders')
        .set('authorization',guestToken)
        .send(orders[0])
        .end((err, res) => {
          expect(res.statusCode).to.equal(409);
          done();
        });
    })

    it('UPDATE ORDERS NOT FOUND',(done)=>{
        chai
        .request(app)
        .patch(`/api/v1/orders/98798`)
        .set('authorization',guestToken)
        .send(orders[0])
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    })

    it('UPDATE ORDERS (Item Not Found)',(done)=>{
      chai
      .request(app)
      .patch(`/api/v1/orders/${order_id}`)
      .set('authorization',guestToken)
      .send({items:'[89,98]'})
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    })

    it('UPDATE ORDERS OWNERSHIP ERROR',(done)=>{
      chai
      .request(app)
      .patch(`/api/v1/orders/1`)
      .set('authorization',guestToken)
      .send(orders[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
        done();
      });
    })

    it('UPDATE ORDERS SUCCESS',(done)=>{
        chai
        .request(app)
        .patch(`/api/v1/orders/${order_id}`)
        .set('authorization',guestToken)
        .send({...orders[0],status:'delivered'})
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    })

    it('UPDATE ORDERS ALREADY DELIVERED',(done)=>{
      chai
      .request(app)
      .patch(`/api/v1/orders/${order_id}`)
      .set('authorization',guestToken)
      .send({...orders[0],status:'delivered'})
      .end((err, res) => {
        expect(res.statusCode).to.equal(409);
        done();
      });
    })

    it('DELETE ORDERS NOT FOUND',(done)=>{
        chai
        .request(app)
        .delete(`/api/v1/orders/19`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    })

    it('DELETE ORDERS SUCCESS',(done)=>{
      chai
      .request(app)
      .delete(`/api/v1/orders/3`)
      .set('authorization',guestToken)
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
      });
      done();
    })

    it('DELETE ORDERS SUCCESS',(done)=>{
        chai
        .request(app)
        .delete(`/api/v1/orders/${order_id}`)
        .set('authorization',guestToken)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
        });
        done();
    })
})
