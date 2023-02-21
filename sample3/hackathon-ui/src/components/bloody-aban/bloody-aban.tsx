import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    getDeathReporteSelector,
    getDeathReportStateSelector,
} from "../../store/aban/selectors";
import { getAbanDeathReport } from "../../store/aban/slice";
import { languageSelector } from "../../store/language/selectors";
import IranMap from "../iran-map/IranMap";
import { Layout } from "../layout/layout";
import { Collection } from "../organisms/collection/collection";
import { Search } from "../organisms/search/search";
import { SpinnerWithOverlay } from "../organisms/spinner/spinner-with-overlay";
import { Summary } from "../organisms/summary/summary";
import "./bloody-aban.scss";
export type IBloodyAbanProps = {};

export const BloodyAban: React.FC<
    IBloodyAbanProps
> = ({}: IBloodyAbanProps) => {
    const dispatch = useDispatch();
    const deathsReport = useSelector(getDeathReporteSelector);
    const deathsReportFetchState = useSelector(getDeathReportStateSelector);
    const [searchedToken, setSearchedToken] = useState("");
    const langugage = useSelector(languageSelector);

    useEffect(() => {
        dispatch(
            getAbanDeathReport({
                searchToken: searchedToken,
                languageCode: langugage?.code ?? "en",
            })
        );
    }, [dispatch, searchedToken, langugage]);

    const onSearch = (searchToken: string) => {
        setSearchedToken(searchToken);
    };

    return (
        <Layout>
            <Row>
                <Col sm={12}>
                    <Summary></Summary>
                </Col>
                <Col sm={12}>
                    <div className="spinner-container">
                        {deathsReportFetchState.isLoading &&
                            !deathsReportFetchState.error && (
                                <SpinnerWithOverlay></SpinnerWithOverlay>
                            )}
                        <Row>
                            <Col sm={12}>
                                <Search onSearch={onSearch}></Search>
                            </Col>
                            <Col sm={12}>
                                <IranMap
                                    searchedToken={searchedToken}
                                    deathReport={deathsReport}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={12}>
                    <Collection></Collection>
                </Col>
            </Row>
        </Layout>
    );
};
