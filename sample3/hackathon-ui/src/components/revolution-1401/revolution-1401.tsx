import React from "react";
import { Col, Row } from "react-bootstrap";
import { Layout } from "../layout/layout";
import { Summary } from "../organisms/summary/summary";
import Aban1401 from "../../assets/images/aban1401.jpg";
import "./revolution-1401.scss";

export const Revolution1401: React.FC = () => {
    return (
        <Layout>
            <Row>
                <Col sm={12}>
                    <Summary></Summary>
                    <div className="img-container">
                        <img src={Aban1401} alt="aban1401" />
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};
