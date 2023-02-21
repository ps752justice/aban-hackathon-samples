import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { languageSelector } from "../../../store/language/selectors";
import { getSearchSelector } from "../../../store/search/selectors";
import { getSearch } from "../../../store/search/slice";
import "./search.scss";
import searchIcon from "../../../assets/images/search.svg";
import { useSearchParams } from "react-router-dom";

export type ISearchProps = {
    onSearch: (searchToken: string) => void;
};

export const Search: React.FC<ISearchProps> = ({ onSearch }: ISearchProps) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const selectedLanguage = useSelector(languageSelector);
    const searchPlaceHolder = useSelector(getSearchSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const [querySearchToken, setQuerySearchToken] = useState("");

    useEffect(() => {
        dispatch(getSearch(selectedLanguage));
    }, [dispatch, selectedLanguage]);

    const onChangeHandler = (e: ChangeEvent<any>) => {
        setSearchValue(e.target.value);
        if (e.target.value == "") {
            setTimeout(() => {
                if (e.target.value == "") {
                    onSearch("");
                }
            }, 2000);
        }
    };

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === "Enter") {
                event.preventDefault();
                onSearch(searchValue);
            }
        };

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, [searchValue]);

    useEffect(() => {
        const searchTokenFromUrl = searchParams.get("search");
        if (searchTokenFromUrl != null) {
            setQuerySearchToken(searchTokenFromUrl);
            onSearch(searchTokenFromUrl);
        }
    }, [searchParams]);

    return (
        <div className="search-container">
            <div className="input-group">
                <div className="input-group-text bg-transparent">
                    <img src={searchIcon} alt="search icon" />
                </div>
                <input
                    className="form-control py-2 bg-transparent search-input"
                    type="search"
                    placeholder={searchPlaceHolder}
                    id="search-input"
                    defaultValue={querySearchToken}
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    );
};
