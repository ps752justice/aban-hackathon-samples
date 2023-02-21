import React from "react";
import { Col, Row } from "react-bootstrap";
import { IPerson } from "../../../services/models/aban-response";
import "./card.scss";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../store/language/selectors";

export type ICardProps = {
    person: IPerson;
};
export const Card: React.FC<ICardProps> = ({ person }: ICardProps) => {
    const selectedLanguage = useSelector(languageSelector);
    return (
        <Row className={[selectedLanguage?.isRtl ? "rtl" : "ltr", "card-container"].join(" ")}>
            <Col xs={4}>
                <div className="card-img">
                    {person.thumb_url != null ? (
                        <img
                            src={person.image_url}
                            alt="thumbnail"
                            className="card-img"
                        />
                    ) : (
                        ""
                    )}
                </div>
            </Col>
            <Col xs={8}>
                <Row>
                    <Col xs={5} className="card-label">
                        {selectedLanguage.code === "fa" ? "نام" : "Full Name"}:
                    </Col>
                    <Col xs={7} className="card-value">
                        {person.full_name}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="card-label">
                        {selectedLanguage.code === "fa" ? "مکان" : "Location"}:
                    </Col>
                    <Col xs={7} className="card-value">
                        {person.province}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="card-label">
                        {selectedLanguage.code === "fa" ? "سن" : "Age"}:
                    </Col>
                    <Col xs={7} className="card-value">
                        {person.age}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="card-label">
                        {selectedLanguage.code === "fa" ? "علت مرگ" : "Cause"}:
                    </Col>
                    <Col xs={7} className="card-value">
                        {person.cause}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
