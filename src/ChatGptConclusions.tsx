import React, {useCallback, useEffect, useState} from 'react';
import {getConclusions} from './api';
import {MessageBar, MessageBarType} from "@fluentui/react";

export const ChatGptConclusions = () => {
    const [conclusions, setConclusions] = useState('');

    useEffect(() => {
        const fetchConclusions = async () => {
        };

        fetchConclusions();
    }, []);

    return (<div>
        <h1>ChatGpt Conclusions</h1>
        {conclusions && <p>{conclusions}</p>}
        {!conclusions && <p>Still calculating...</p>}
    </div>);
};
