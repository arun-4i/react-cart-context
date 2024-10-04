import { Button, Col, Container, Row } from "react-bootstrap";

import "./about.css";
import { useEffect, useState } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Container className="bg-info-subtle card border-0">
      <Row>
        <Col md={6} className="d-flex flex-column flex-wrap">
          <h1 className={`pb-3 ${animate ? "slide-in-left" : " "}`}>
            About US
          </h1>
          <h3 className={`pb-3 ${animate ? "slide-in-left-delayed" : " "}`}>
            Helping businesses deliver exceptional buyer experiences.
          </h3>
          <p className={`pb-3 ${animate ? "slide-in-left-more-delayed" : " "}`}>
            Vidyard is the leading video messaging and asynchronous
            communications platform for go-to-market teams. Millions of sales
            professionals and more than 250,000 go-to-market teams use Vidyard’s
            AI-powered video messaging, video hosting, and digital sales rooms
            to connect with more prospects and generate more revenue.
          </p>
          <div className={`pb-3 ${animate ? "slide-in-right" : " "}`}>
            <Button variant="primary">Sign Up for Free</Button>
          </div>
        </Col>

        <Col md={6} className={`d-flex ${animate ? "slide-in-top" : ""}`}>
          <img
            src="https://images.unsplash.com/photo-1722898807281-173b005badc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid  card border-0 shadow-lg"
            alt="abt-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
