import React from "react";
import { Spinner } from "react-bootstrap";
import "./spinner-with-overlay.scss";
export type ISpinnerWithOverlayProps = {};

export const SpinnerWithOverlay: React.FC<
    ISpinnerWithOverlayProps
> = ({}: ISpinnerWithOverlayProps) => {
    return (
        <div className="spinner-overlay d-flex">
            <div className="spinner-box align-items-center justify-content-center d-flex">
                <Spinner
                    animation="border"
                    variant="danger"
                    className="spinner-item align-items-center justify-content-center"
                ></Spinner>
            </div>
        </div>
    );
};
