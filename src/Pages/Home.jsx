import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../Components";
import { ProductCard } from "../Components/ProductCard";

export const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-5 mb-5 container-fluid">
        <Row>
          <Col className="d-flex justify-content-around">
            <ProductCard />
          </Col>
          <Col className="d-flex justify-content-around">
            <ProductCard />
          </Col>
          <Col className="d-flex justify-content-around">
            <ProductCard />
          </Col>
          <Col className="d-flex justify-content-around">
            <ProductCard />
          </Col>
          <Col className="d-flex justify-content-around">
            <ProductCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};
