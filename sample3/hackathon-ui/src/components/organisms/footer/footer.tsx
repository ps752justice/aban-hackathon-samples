import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { pingServer } from "../../../store/ping-server/slice";
import "./footer.scss";
export type IFooterProps = {};

export const Footer: React.FC<IFooterProps> = ({}: IFooterProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(pingServer());
    }, [dispatch]);

    return (
        <Row className="footer">
            <Col sm={12}>© 2022 Iran Revolution</Col>
        </Row>
    );
};
