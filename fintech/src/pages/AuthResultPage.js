import React from 'react'
import { useLocation } from 'react-router-dom';
import AppHeader from '../components/Common/AppHeader';
import queryString from "query-string"
import axios from 'axios';

const AuthResultPage = () => {
    const code = useLocation().search;
    const authCode = queryString.parse(code).code;

    const handleAuthButtonClick = () => {
        let sendData = {
            code: authCode,
            client_id: "5ffdfea1-7d7f-4b4f-9d69-611c65eee6d0", // 본인 클라이언트 정보를 활용해주세요
            client_secret: "5810325a-6f56-4d2f-9b12-4456a5a40161", // 본인 클라이언트 정보를 활용해주세요
            redirect_uri: "http://localhost:3000/authResult",
            grant_type: "authorization_code"
        };

        const option = {
            method: "POST",
            url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: sendData,
        };

        axios(option).then((response) => {
            console.log(response);
        })

    }

    return (
        <div>
            <AppHeader title={"인증완료 / 토큰 요청"}></AppHeader>
            사용자 authCode : {authCode} <br></br>
            <button onClick={handleAuthButtonClick}>AccessToken 요청</button>
        </div>

    );
};

export default AuthResultPage;