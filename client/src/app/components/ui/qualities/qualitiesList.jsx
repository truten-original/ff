import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useSelector, useDispatch } from "react-redux";
import {
    getQulitiesByIds,
    getQualitiesLoadingStatus,
    loadQualitiesList
} from "../../../store/qualities";

const QualitiesList = ({ qualities }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getQualitiesLoadingStatus());
    const qualitiesList = useSelector(getQulitiesByIds(qualities));
    useEffect(() => {
        dispatch(loadQualitiesList());
    }, []);

    if (isLoading) return "Loading...";
    return (
        <>
            {qualitiesList.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
