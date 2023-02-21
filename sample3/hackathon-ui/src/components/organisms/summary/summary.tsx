import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../store/language/selectors";
import { getSummarySelector } from "../../../store/summary/selectors";
import { getSummary } from "../../../store/summary/slice";
import "./summary.scss";
import { getSelectedEventSelector } from "../../../store/events/selectors";
export type ISummaryProps = {};

export const Summary: React.FC = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(languageSelector);
    const selectedEvent = useSelector(getSelectedEventSelector);
    const summary = useSelector(getSummarySelector);
    useEffect(() => {
        if (selectedEvent != null) {
            dispatch(
                getSummary({
                    event: selectedEvent,
                    language: selectedLanguage,
                })
            );
        }
    }, [dispatch, selectedLanguage, selectedEvent]);

    if (!summary) return <></>;
    return (
        <div>
            <Row>
                <Col sm={12}>
                    {summary.icon ? (
                        <div className="summary-icon">
                            {summary.icon && (
                                <img
                                    src={summary.icon}
                                    alt="summary icon"
                                ></img>
                            )}
                        </div>
                    ) : (
                        <div className="summary-title">{summary.title}</div>
                    )}
                </Col>
                <Col sm={12}>
                    <div className="summary-description">
                        {summary.description}
                    </div>
                </Col>
            </Row>
        </div>
    );
};
