import React from "react";
import {
    Col,
    Container,
    Nav,
    Navbar,
    Row,
    ThemeProvider as BootstrapThemeProvider,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled, {
    css,
    ThemeProvider as StyledComponentThemeProvider,
} from "styled-components";
import { languageSelector } from "../../store/language/selectors";
import theme from "../../theme/styled-component-theme";
import { LanguagePicker } from "../language-picker/language-picker";
import { Footer } from "../organisms/footer/footer";
import { TimeLine } from "../organisms/timeline/timeline";
import "./layout.scss";

export type ILayoutProps = {
    hasTimeline?: boolean;
    children?: React.ReactNode;
};

const Background = styled.div(
    (props) => css`
        min-height: 100vh;
        background-color: ${props.theme.backgroundPrimary};
    `
);
export const Layout: React.FC<ILayoutProps> = ({
    hasTimeline = true,
    children,
}: ILayoutProps) => {
    const selectedLanguage = useSelector(languageSelector);
    const location = useLocation();

    return (
        <StyledComponentThemeProvider theme={theme}>
            <Background
                className={selectedLanguage?.isRtl ? "rtl" : "ltr"}
                dir={selectedLanguage?.isRtl ? "rtl" : "ltr"}
            >
                <BootstrapThemeProvider
                    dir={selectedLanguage?.isRtl ? "rtl" : "ltr"}
                >
                    <Container fluid>
                        <Row className="sticky-top top-card">
                            <Navbar
                                expand={true}
                                className="transparent-navbar navbar-dark"
                            >
                                <Nav className="me-auto">
                                    <Nav.Link
                                        href={"/bloody-aban" + location.search}
                                        className={
                                            location.pathname === "/about"
                                                ? ""
                                                : "selected-nav"
                                        }
                                    >
                                        {selectedLanguage?.code === "en"
                                            ? "Home"
                                            : "صفحه اصلی"}
                                    </Nav.Link>
                                    <Nav.Link
                                        href={"/about" + location.search}
                                        className={
                                            location.pathname === "/about"
                                                ? "selected-nav"
                                                : ""
                                        }
                                    >
                                        {selectedLanguage?.code === "en"
                                            ? "About"
                                            : "درباره"}
                                    </Nav.Link>
                                </Nav>
                                <Navbar.Collapse className="justify-content-end">
                                    <LanguagePicker></LanguagePicker>
                                </Navbar.Collapse>
                            </Navbar>
                            <div className={hasTimeline ? "d-block" : "d-none"}>
                                <TimeLine></TimeLine>
                            </div>
                        </Row>
                        <Row className="content">
                            <Col sm={12}>{children}</Col>

                            <Col sm={12}>
                                <Footer />
                            </Col>
                        </Row>
                    </Container>
                </BootstrapThemeProvider>
            </Background>
        </StyledComponentThemeProvider>
    );
};
