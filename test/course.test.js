import chai from "chai";
import chaiHttp from "chai-http";
import http from "http";
import app from "../app.js";
import bodyParser from "body-parser";
const should = chai.should;
chai.should();
chai.use(chaiHttp);
const { expect } = chai;
chai.use(chaiHttp);
let adminToken;
let courseId;
describe("POST /api/courses", () => {
  it("should POST a new course", (done) => {
    const course = {
      name: "Image processing",
      content: "COMPUTER SCIENCE: <=>This is the content of this course",
      genre: "COMPUTER SCIENCE and Telecom",
    };
    chai
      .request(app)
      .post("/api/courses")
      //.set('auth-token', adminToken)
      .send(course)
      .end((error, response) => {
        response.should.have.status(201);
        response.should.be.an("object");
        courseId = response.body.id;
        done();
      });
  });
  it("should return ONE Course", (done) => {
    chai
      .request(app)
      .get(`/api/courses/${courseId}`)
      //.set('auth-token', adminToken)

      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.an("object");
        done();
      });
  });
  it("should NOT POST a new course", (done) => {
    const course = {
      name: "", //vALIDATION ISSUE
      content: "COMPUTER SCIENCE: <=>This is the content of this course",
      genre: "COMPUTER SCIENCE and Telecom",
    };
    chai
      .request(app)
      .post("/api/courses")
      //.set('auth-token', adminToken)
      .send(course)
      .end((error, response) => {
        response.should.have.status(400);
        response.should.be.an("object");
        done();
      });
  });
  it("should return all Courses", (done) => {
    chai
      .request(app)
      .get("/api/courses")
      //.set('auth-token', adminToken)

      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.an("object");
        done();
      });
  });
  it("should NOT return all Courses", (done) => {
    chai
      .request(app)
      .get("/api/c") //wrong path
      //.set('auth-token', adminToken)
      .end((error, response) => {
        response.should.have.status(404);
        // response.should.be.an('object');
        done();
      });
  });

  it("should NOT RETURN ONE Course", (done) => {
    chai
      .request(app)
      .get("/api/co" + courseId) //WRONG PATH
      //.set('auth-token', adminToken)
      .end((error, response) => {
        response.should.have.status(404);
        // response.should.be.an('object');
        done();
      });
  });
});
