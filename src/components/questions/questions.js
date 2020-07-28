import React from 'react';
import { useEffect, useState } from 'react';
// import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import useQuestion from '../../hooks/q&a/question_answer';
import Show from '../show/index'
const Header = (props) => {
    const [allQuestions, getQuestions, addCQuestion, delteQuestion , addAnswer , delteAnswer] = useQuestion(props.token);
    const [oneQuestion, setQuestion] = useState({});
    const [oneAnswer, setAnswer] = useState({});
    const handleChange = (e) => {
        setQuestion({ ...oneQuestion, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addCQuestion(oneQuestion, props.user.username);
        e.target.reset();
    }
    const handleChangeAnswer = (e) => {
        setAnswer({ ...oneAnswer, [e.target.name]: e.target.value })
    }
    const handleSubmitAnswer = (id) => {
        // e.preventDefault();
        addAnswer(oneAnswer, id,props.user.username);
        // e.target.reset();
    }

    useEffect(getQuestions, [])
    return (
        <>
            <h1>questions</h1>
            <form onSubmit={handleSubmit} >


                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="content"
                    placeholder="write you question here"
                    onChange={handleChange}
                />
                <button>add</button>
            </form>
            <ul>
                {allQuestions.map(question => {
                    return (
                        <li key={question._id}>
                            <span>{question.usrename}</span>
                            <br />
                            <span>{question.title}</span>
                            <p>{question.content}</p>
                            <Show condition={props.user.username == question.usrename}>
                                <button onClick={() => delteQuestion(question._id)}>X</button>
                            </Show>
                            <form onSubmit={(e)=>{e.preventDefault()  ;handleSubmitAnswer(question._id) ;e.target.reset()}}>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="write you answer here"
                                    onChange={handleChangeAnswer}
                                />
                                <button>add answer</button>
                            </form>
                            <ul>
                                {question.answers.map(answer => {
                                    return (
                                        <li key={answer._id}>
                                            <span>{answer.username}</span>
                                            <p>{answer.content}</p>
                                            <Show condition={props.user.username == answer.username}>
                                <button onClick={() => delteAnswer(question._id , answer._id)}>X</button>
                            </Show>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </>


    );
};


export default Header;