import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../Components";
import { ProductCard } from "../Components/ProductCard";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Row className="container">
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
