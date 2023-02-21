import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./timeline.scss";
import FreedomImg from "../../../assets/images/freedom.svg";
import { useNavigate } from "react-router";
import {
    createSearchParams,
    useLocation,
    useSearchParams,
} from "react-router-dom";
import { IEventResponse } from "../../../services/models/events-response";
import { useDispatch } from "react-redux";
import { getEvents, setSelectedEvent } from "../../../store/events/slice";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../store/language/selectors";
import { getEventsSelector } from "../../../store/events/selectors";

export type ITimeLineProps = {};

export const TimeLine: React.FC = () => {
    const dispatch = useDispatch();
    const language = useSelector(languageSelector);
    useEffect(() => {
        dispatch(getEvents(language));
    }, [dispatch, language]);

    const [searchParams, _] = useSearchParams();
    const events = useSelector(getEventsSelector);

    const navigate = useNavigate();

    const [colSize, setColSize] = useState(12 / events.length);

    useEffect(() => {
        setColSize(12 / events.length);
    }, [events]);

    const location = useLocation();
    const selectedEvent =
        events.find((e) => e.route === location.pathname) ??
        (events.length > 0 ? events[0] : null);
    const [selectedEventId, setSelectedEventId] = useState(
        selectedEvent ? selectedEvent.id : "1"
    );

    useEffect(() => {
        if (selectedEvent != null) {
            dispatch(setSelectedEvent(selectedEvent));
            setSelectedEventId(selectedEvent.id);
            document.title = selectedEvent.title;
        }
    }, [dispatch, selectedEvent]);

    const onClick = (event: IEventResponse) => {
        const laParam = searchParams.get("la")?.toString();
        let queryParams = "";
        if (laParam) {
            queryParams = `?${createSearchParams([
                ["la", laParam ?? ""],
            ]).toString()}`;
        }
        document.title = event.title;
        navigate(event.route + queryParams);
        setSelectedEventId(event.id);
    };

    return (
        <Row className="timeline">
            <Col xs={10}>
                <Row>
                    {events.map((event, index) => {
                        return (
                            <Col
                                xs={colSize}
                                key={index}
                                className={
                                    selectedEventId === event.id
                                        ? "event selected"
                                        : "event"
                                }
                                onClick={() => {
                                    onClick(event);
                                }}
                            >
                                <div className="event-point badge">&nbsp;</div>
                                <div
                                    className={
                                        selectedEventId === event.id
                                            ? "event-title selected"
                                            : "event-title"
                                    }
                                >
                                    {event.title}
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
            <Col xs={2}>
                <div className="freedom">
                    <img src={FreedomImg} alt="free" />
                    <div className="event-title">
                        {language.code === "en" ? "Freedom" : "آزادی"}
                    </div>
                </div>
            </Col>
        </Row>
    );
};
