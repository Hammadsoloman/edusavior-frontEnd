import React from 'react';
import { useEffect, useState } from 'react';
import './question.scss';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import useQuestion from '../../hooks/q&a/question_answer';
import Show from '../show/index';
import cookie from 'react-cookies';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';





const Header = (props) => {
    const [allQuestions, getQuestions, addCQuestion, delteQuestion, addAnswer, delteAnswer] = useQuestion(props.token);
    const user = cookie.load('user');

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
        addAnswer(oneAnswer, id, props.user.username);
        // e.target.reset();
    }

    useEffect(getQuestions, []);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <section className="qqandaa">
                <ul className="ulqa">

                    {allQuestions.map(question => {
                        return (


                            <li className="liquestion" key={question._id}>
                                <Accordion defaultActiveKey="0">
                                    <Card className="quescard">
                                        <Accordion.Toggle as={Card.Header} eventKey="question._id">
                                            <div className="roooow">

                                                <img className="queimg" src={question.profile_img ? question.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
                                                <span className="queuser">{question.usrename}</span>
                                                 {/* <hr className="hrusername"/> */}
                                                <br />
                                                <Show condition={props.user.username == question.usrename}>
                                                    <button className="deleteques" onClick={() => delteQuestion(question._id)}><i class="fas fa-trash-alt"></i></button>

                                                </Show>

                                            </div>
                                            <div className="subjectquestion">
                                            {/* <hr className="eec"/> */}
                                            <span className="quetitle">Subject: </span><span>{question.title}</span><br></br>
                                            {/* <hr className="qc"/> */}
                                            <span className="quetitle"></span> <span>{question.content}</span>
                                            </div>


                                            <ul className="qqqqq">
                                                {question.answers.map(answer => {
                                                    return (

                                                        <li className="bbwb" key={answer._id}>
                                                            <div className="roooow1">

                                                            <img src={answer.profile_img ? answer.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
                                                            <span className="queuser">{answer.username}</span>
                                                
                                                            <Show condition={props.user.username == answer.username}>
                                                                <button className="deleteans" onClick={() => delteAnswer(question._id, answer._id)}><i class="fas fa-trash-alt"></i></button>
                                                            </Show>
                                                            </div>
                                            {/* <hr className="eeec"/> */}

                                                            <p>{answer.content}</p>

                                                        </li>

                                                    )
                                                })}
                                            </ul>
                                            <button className="replybtn" >Reply</button>

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="question._id">
                                            <Card.Body>
                                                <form className="formreply" onSubmit={(e) => { e.preventDefault(); handleSubmitAnswer(question._id); e.target.reset() }}>
                                                    <textarea rows="2"
                                                    className="textareaquestion"
                                                        type="text"
                                                        name="content"
                                                        placeholder="write you answer here"
                                                        onChange={handleChangeAnswer}
                                                    />
                                                    <button className="btnanswer">Add answer</button>
                                                </form>
                                            </Card.Body>

                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>
                               
                            </li>
                        )
                    })}
                </ul>
            </section>
            <div>
        <ScrollUpButton />
      </div>

      {/* ------------------------------ */}
      <div className="www">

<Form className="qaformmm" onSubmit={handleSubmit}>
<fieldset>
       <legend>Add your Question : </legend>
        <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>Subject</Form.Label> */}
        <Form.Control className="uu" type="text" placeholder="Subject"name="title"
                        onChange={handleChange}  />
       
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        {/* <Form.Label>Question</Form.Label> */}
        <textarea class="form-control" rows="5" id="comment" placeholder="Type your question here" name="content"
                            onChange={handleChange}></textarea>
    </Form.Group>

    <Button  className="oo" variant="primary" type="submit">
        Add question
    </Button>
    </fieldset>
</Form>
</div>
        </>


    );
};


export default Header;