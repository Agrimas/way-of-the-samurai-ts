import {ErrorMessage, Field, Form, Formik} from 'formik';
import Classes from './Login.module.css';
import React from 'react';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {login} from '../../redux/reducers/auth-reducer';
import {Redirect} from 'react-router-dom';
import {StateType} from '../../redux/redux-store';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormAuth/>
        </div>
    );
}

type LoginFormPropsType = {
    isLogin: boolean
    error: string | null
    login: (data: any) => void
    captcha: null | string
}

const LoginForm = (props: LoginFormPropsType) => {
    const initialValues = {
        email: '',
        password: '',
        remember: false,
        captcha: '',
    }

    type errorsFormType = {
        email?: string,
        password?: string,
        captcha?: string,
    }
    const validate = (values: typeof initialValues) => {

        const errorsForm: errorsFormType = {};

        Yup.string()
            .required('Required')
            .validate(values.email)
            .catch(({errors}) => {
                errorsForm.email = errors[0]
            })

        Yup.string()
            .required('Required')
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .validate(values.password)
            .catch(({errors}) => {
                errorsForm.password = errors[0]
            })

        if (props.captcha) {
            Yup.string()
                .required('Required')
                .validate(values.captcha)
                .catch(({errors}) => {
                    debugger
                    errorsForm.captcha = errors[0]
                })
        }
        return errorsForm;
    };

    return <>
        {props.isLogin ? <Redirect to={'/profile'}/> :
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={async (values) => {
                    await props.login(values);
                }}
            >
                <Form className={Classes.form}>
                    {props.error}
                    {
                        props.captcha && <>
                            <img src={props.captcha} alt="captcha"/>
                            <label htmlFor={'captcha'}>Captcha</label>
                            <Field
                                name={'captcha'}
                                placeholder={'captcha'}
                                tabIndex={1}
                            />
                            <ErrorMessage component="div" name="captcha" className={Classes.error}/>
                        </>}

                    <label htmlFor="email"> Email</label>
                    <Field
                        name={'email'}
                        placeholder={'email'}
                        tabIndex={1}
                    />
                    <ErrorMessage component="div" name="email" className={Classes.error}/>

                    <label htmlFor="password">Password</label>
                    <Field
                        name={'password'}
                        placeholder={'password'}
                        type={'password'}
                        tabIndex={2}
                    />
                    <ErrorMessage component="div" name="password" className={Classes.error}/>

                    <label htmlFor="remember">Remember password</label>
                    <Field
                        name={'remember'}
                        type={'checkbox'}
                        tabIndex={3}
                        autoComplete="off"
                    />
                    <button type="submit" tabIndex={4}>Submit</button>
                </Form>
            </Formik>}
    </>
}

function mapStateToProps(state: StateType) {
    return {
        isLogin: state.auth.isLogin,
        error: state.auth.error,
        captcha: state.auth.captcha,
    }
}

const LoginFormAuth = connect(mapStateToProps,
    {
        login
    }
)(LoginForm);