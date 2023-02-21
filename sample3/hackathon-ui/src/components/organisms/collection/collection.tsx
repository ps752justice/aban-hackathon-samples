import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../../store/language/selectors";
import { getSelectedEventSelector } from "../../../store/events/selectors";
import { getCollectionsSelector } from "../../../store/collection/selectors";
import { getCollections } from "../../../store/collection/slice";
import "./collection.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export type ICollectionProps = {};
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const Collection: React.FC<
    ICollectionProps
> = ({}: ICollectionProps) => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(languageSelector);
    const selectedEvent = useSelector(getSelectedEventSelector);
    const collections = useSelector(getCollectionsSelector);
    useEffect(() => {
        if (selectedEvent != null) {
            dispatch(
                getCollections({
                    event: selectedEvent,
                    language: selectedLanguage,
                })
            );
        }
    }, [dispatch, selectedLanguage, selectedEvent]);
    if (!collections) return <></>;
    return (
        <div className="collections-container">
            <div className="collections-header-container">
                <h1>{collections.title}</h1>
            </div>
            <Carousel infinite={true} responsive={responsive}>
                {collections.items.map((collection, index) => {
                    return (
                        <div
                            className="collections-item"
                            key={index}
                            style={{
                                backgroundImage: `url(${collection.src})`,
                            }}
                        ></div>
                    );
                })}
            </Carousel>
        </div>
    );
};
