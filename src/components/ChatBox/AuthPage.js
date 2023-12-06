import axios from "axios";
import { useEffect, useState } from "react";

const AuthPage = (props) => {
    const userdata = JSON.parse(localStorage.getItem('user'))
    console.log(userdata)
    useEffect(() => {
        const authcall = () => {
            axios
                .post("http://localhost:5000/authenticate", { username: userdata.userName })
                .then((r) => props.onAuth({ ...r.data, secret: userdata.userName }))
        };
        authcall()
    }, [])
    return (
        <>
        </>
    );
};

export default AuthPage;