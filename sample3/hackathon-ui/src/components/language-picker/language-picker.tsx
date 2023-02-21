import React, { useEffect } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ILanguage } from "../../services/models/language-response";
import {
    getLanguagesSelector,
    languageSelector,
} from "../../store/language/selectors";
import { getLanguages, setLanguage } from "../../store/language/slice";
import ToggleImg from "../../assets/images/dropdown-toggle.svg";
import "./language-picker.scss";
import { useSearchParams } from "react-router-dom";

export const LanguagePicker: React.FC = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(getLanguages());
    }, [dispatch]);

    const language = useSelector(languageSelector);
    const languages = useSelector(getLanguagesSelector);

    const onLanguageClicked = (l: ILanguage) => {
        dispatch(setLanguage(l));
        setSearchParams({ la: l.code });
    };

    useEffect(() => {
        if (language && languages) {
            const qLa = searchParams.get("la");
            if (!qLa) {
                setSearchParams({ la: language.code });
                return;
            }
            if (qLa != language?.code) {
                const l = languages.find((x) => x.code === qLa);
                if (l) dispatch(setLanguage(l));
            } else {
                setSearchParams({ la: language.code });
            }
        }
    }, [language, languages, searchParams]);

    return (
        <div className="language-picker-container">
            <Dropdown
                as={ButtonGroup}
                id="language-dropdown"
                align={language.isRtl ? "start" : "end"}
            >
                <Dropdown.Toggle className="selected-language-toggle">
                    <img src={ToggleImg} alt="toggle" />
                    {language.abbr}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {languages.map((l, index) => {
                        return (
                            <Dropdown.Item
                                eventKey={l.code}
                                key={index}
                                onClick={() => {
                                    onLanguageClicked(l);
                                }}
                            >
                                {l.title}
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
