import React from 'react';
import './App.css';
import carousel1 from './carousel.jpg';
import carousel2 from './carousel2.jpg';
import carousel3 from './carousel3.jpg';
import logo from './logo.png';
import arihant_industries_logo from './arihant-industries-logo.png';
import sk_industries_logo from './sk-industries-logo.png';
import chhabra_logo from './chhabra-enterprises-logo.png';
import { Button, Carousel, Col, Container, Form, Jumbotron, Navbar, Row} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar variant="light" className="top-nav">
        <Navbar.Brand>
          <img
            src={logo}
            width="80"
            height="40"
            className="d-inline-block align-top"
            alt="chhabra group logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Text>Chhabra Enterprises, Inc.</Navbar.Text> */}
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={carousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Jumbotron className="about">
        <Container>
          <p>Whether you’re outfitting your new home or simply looking for furniture to make your apartment more comfortable, The Chhabra Group have you covered.&nbsp;
            From high-end, modern pieces to rustic, farmhouse, and classic styles, you’ll find just what you’re looking for.&nbsp;
            Step into one of the stunning showrooms at the best furniture stores in Chhattisgarh and find the perfect pieces to make your home reflect your style and personality.</p>
        </Container>
      </Jumbotron>
      <Container className="logo-family no-padding">
        <Row className="no-margin">
          <Col className="logo-pod">
            <img src={sk_industries_logo} className="logo" alt="sk industries logo"/>
          </Col>
          <Col className="logo-pod">
            <img src={chhabra_logo} className="logo" alt="chhabra enterprises logo"/>
          </Col>
          <Col className="logo-pod">
            <img src={arihant_industries_logo} className="logo" alt="arihant industries logo"/>
          </Col>
        </Row>
      </Container>
      {/* <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card1} style={{ height: '15em' }}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card2} style={{ height: '15em' }}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card3} style={{ height: '15em' }}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}
      <Jumbotron className="about">
        <Container>
          <h2 className="strong">The Chhabra Group Promise</h2>
          <p>We believe that beautiful things made with intention are always worth it.&nbsp;
            That’s why we’re dedicated to sourcing the highest-quality furnishings with competitive pricing – so you’ll never overpay and you won’t need to shop around.&nbsp;
            Once you find your perfect piece, we’ll get it to you, no hassle.</p>
        </Container>
      </Jumbotron>
      <Jumbotron className="last-jumbotron">
        <Container>
          <Row>
            <Col className="align-center footer-about-us">
              <h4>ABOUT</h4>
              <p>The Chhabra Group is a family owned business in the city of Rajnandgaon, Chhattisgarh.&nbsp;
                We started in a small warehouse over thirty years ago selling steel chests and have since grown to sell and deliver furniture all throughout the Chhattisgarh.&nbsp;
                When you come to us, you can be rest assured that we will work hard to find exactly what you’re looking for and we will then get it delivered to your home as quickly as possible!&nbsp;
                Our team is dedicated to helping families build the homes they love by providing high-quality furniture at the competitive prices.</p>
            </Col>
            <Col className="align-center footer-locations">
              <h4>OUR LOCATIONS</h4>
              <p>Bhilai</p>
              <p>Durg</p>
              <p>Raipur</p>
              <p>Rajnandgaon</p>
            </Col>
            <Col className="align-center">
              <h4>NEWSLETTER</h4>
              <Form className="footer-newsletter">
                <Form.Group controlId="formNewsLetter">
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Control type="email" placeholder="Enter email.." />
                </Form.Group>
                <Button variant="primary" type="submit" className="footer-newsletter-submit">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Row className="footer">
          <Col>&copy; 2020 <strong>The Chhabra Group</strong>. All Rights Reserved.</Col>
          <Col>
            Made with &hearts; in Chhattisgarh, India.
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default App;
