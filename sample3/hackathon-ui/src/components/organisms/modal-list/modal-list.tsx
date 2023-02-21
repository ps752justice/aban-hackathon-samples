import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ShareIcon from "../../../assets/images/share.svg";
import "./modal-list.scss";
import { Card } from "../card/card";
import { IPerson } from "../../../services/models/aban-response";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../store/language/selectors";
import { createSearchParams } from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import FacebookIcon from "../../../assets/images/facebook.svg";
import TwitterIcon from "../../../assets/images/twitter.svg";
import WhatsAppIcon from "../../../assets/images/whatsapp.svg";

export type IModalProps = {
    showModal: boolean;
    handleCloseModal: () => void;
    provinceId: number | null;
    provinceName: string | null;
    people?: IPerson[];
    searchedToken?: string;
};

export const ModalList: React.FC<IModalProps> = ({
    showModal,
    handleCloseModal,
    provinceId,
    provinceName,
    people,
    searchedToken,
}: IModalProps) => {
    const selectedLanguage = useSelector(languageSelector);
    if (provinceId != null) {
        people = people?.filter((person) => person.province_id === provinceId);
    }

    const shouldShowShareBtn = true;

    const getLink = () => {
        let link = window.location.href;
        const queryParams = createSearchParams([
            ["provinceId", provinceId?.toString() ?? ""],
            ["search", searchedToken ?? ""],
        ]);
        if (link.indexOf("?") === -1) {
            link += `?${queryParams}`;
        } else {
            link += `&${queryParams}`;
        }

        return encodeURIComponent(link);
    };

    const popoverFocus = (
        <Popover className="popover-container">
            <Row>
                <Col xs={4}>
                    <a
                        href={`https://www.facebook.com/sharer.php?u=${getLink()}`}
                    >
                        <img src={FacebookIcon} alt="facebook" />
                    </a>
                </Col>
                <Col xs={4}>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${getLink()}`}
                    >
                        <img src={TwitterIcon} alt="twitter" />
                    </a>
                </Col>
                <Col xs={4}>
                    <a href={`https://api.whatsapp.com/send?text=${getLink()}`}>
                        <img src={WhatsAppIcon} alt="whatsapp" />
                    </a>
                </Col>
            </Row>
        </Popover>
    );

    return (
        <Modal
            show={showModal}
            onHide={handleCloseModal}
            className={selectedLanguage.isRtl ? "modal-rtl" : ""}
        >
            <Modal.Header style={{ display: "inline" }}>
                <Row>
                    <Col xs={1}>
                        <div className="modal-close" onClick={handleCloseModal}>
                            X
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div>{provinceName}</div>
                    </Col>
                    <Col xs={4} className="align-items-end">
                        {shouldShowShareBtn && (
                            <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={popoverFocus}
                            >
                                <button
                                    type="button"
                                    className="modal-btn share-btn"
                                >
                                    <img src={ShareIcon} alt="share" />
                                </button>
                            </OverlayTrigger>
                        )}
                    </Col>
                </Row>
            </Modal.Header>
            <Modal.Body>
                {people?.length} -{" "}
                {selectedLanguage.code === "fa"
                    ? "مجموع کشته شده‌ها"
                    : "Total Number of Victims"}
                {people?.map((person) => {
                    return <Card person={person} key={person.id} />;
                })}
            </Modal.Body>
        </Modal>
    );
};
