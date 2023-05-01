import React, {useCallback, useState} from "react";
import {MessageBar, MessageBarType, PrimaryButton, Stack, TextField} from "@fluentui/react";
import {useObserver} from 'mobx-react-lite';
import {postFormData} from './api';
import {NavLink} from "react-router-dom";
import {questions} from "./questions";

const TeamForm = () => {
    const [formData, setFormData] = useState(getFormModel(questions));

    const handleInputChange = useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setFormData(prevState => {
            const newState = [...prevState];
            newState.find(item => item.id === name)!.answer = value;
            return newState;
        });
    }, [formData]);


    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    }, []);

    return useObserver(() => (
        <>
            <NavLink to="/teamChatGptConclusions">ChatGpt Conclusions</NavLink>
            <form onSubmit={handleSubmit}>
                <Stack tokens={{childrenGap: 20}}>
                    {formData.map((item) => (
                        <TextField
                            name={item.id}
                            label={item.question}
                            required
                            value={item.answer}
                            onChange={handleInputChange}
                            key={item.id}
                        />
                    ))}
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </Stack>
            </form>
        </>

    ));
};

export default TeamForm;

const getFormModel = (questions: string[]) => {
    return questions.map((question) => ({
        question,
        answer: '',
        id: question
    }));
}