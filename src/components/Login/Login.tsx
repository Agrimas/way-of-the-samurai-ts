import {ErrorMessage, Field, Form, Formik} from 'formik';
import Classes from './Login.module.css';
import React from 'react';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';


export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormAuth/>
        </div>
    );
}

type initialValuesType = {
    email: string
    password: string
    remember: false
}

type LoginFormPropsType = {
    isLogin: boolean
    error?: string
    login: (email: string,
            password: string,
            rememberMe: boolean) => void
}

const LoginForm = (props: LoginFormPropsType) => {
    const initialValues: initialValuesType = {
        email: '',
        password: '',
        remember: false,
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

    return (
        <>
            {
                props.isLogin ? <Redirect to={'/profile'}/> :
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            props.login(values.email, values.password, values.remember);
                        }}
                    >
                        <Form className={Classes.form}>
                            {props.error}
                            <label htmlFor="email">Email</label>
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
                            />
                            <button type="submit" tabIndex={4}>Submit</button>
                        </Form>
                    </Formik>
            }
        </>
    );
}

function mapStateToProps(state: StateType) {
    return {
        isLogin: state.auth.isLogin,
        error: state.auth.errorMessage,
    }
}

const LoginFormAuth = connect(mapStateToProps, {login})(LoginForm);