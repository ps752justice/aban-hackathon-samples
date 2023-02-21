import React from "react";
import { Col, Row } from "react-bootstrap";
import { Layout } from "../layout/layout";
import { Summary } from "../organisms/summary/summary";
import PS752 from "../../assets/images/ps752.jpg";
import "./ps752-flight.scss";

export const PS752Flight: React.FC = () => {
    return (
        <Layout>
            <Row>
                <Col sm={12}>
                    <Summary></Summary>
                    <div className="img-container">
                        <img src={PS752} alt="ps752" />
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};
