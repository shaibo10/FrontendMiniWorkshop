import React, {useCallback, useEffect, useState} from 'react';
import {getConclusions} from './api';
import {MessageBar, MessageBarType} from "@fluentui/react";

export const ChatGptConclusions = () => {
    const [conclusions, setConclusions] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const closeErrorMessage = useCallback(() => {
        setShowErrorMessage(false);
    }, []);

    const displayErrorMessage = useCallback(() => {
        setShowErrorMessage(true);
    }, []);

    useEffect(() => {
        const fetchConclusions = async () => {
            try {
                const response = await getConclusions();
                setConclusions(response.data);
            } catch (e) {
                displayErrorMessage();
            }
        };

        fetchConclusions();
    }, []);

    return (<div>{showErrorMessage && <MessageBar
        messageBarType={MessageBarType.error}
        isMultiline={false}
        onDismiss={closeErrorMessage}
        dismissButtonAriaLabel="Close"
    >
        Error on fetching conclusions
    </MessageBar>}
        <h1>ChatGpt Conclusions</h1>
        {conclusions && <p>{conclusions}</p>}
        {!showErrorMessage && !conclusions && <p>Still calculating...</p>}
    </div>);
};
