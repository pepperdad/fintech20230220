const express = require("express");
const axios = require("axios")
const app = express(); // respond with "hello world" when a GET request is made to the homepage

app.get("/", (req, res) => {
    console.log("사용자의 요청이 발생했습니다.");
    res.send("hello world");
});

app.get("/user", (req, res) => {
    res.json("get method");
});

app.post("/user", (req, res) => {
    res.json("post method");
});

app.delete("/user", (req, res) => {
    res.json("delete method");
});

app.get("/user", (req, res) => {
    res.json("put method");
});

// 거래내역 리스트 받아오는 기능
app.get("/transaction", (req, res) => {
    // 데이터베이스에서 가져온 혹은 클라이언트에서 전달받은 accessToken
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyMDA2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2ODQ4OTEwOTEsImp0aSI6IjYyMGI2ZWMzLTgxZGUtNGQyNi05MDE3LTA0YTZjZGU4YzRhYyJ9.NxGAk3SGATHF66ZHuoIEm1N80n2moX8fiwacgNFN9v4";

    const option = {
        method: "GET",
        url: "https://testapi.openbanking.or.kr/v2.0/account/transaction_list/fin_num",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        params: {
            bank_tran_id: genTransId(),
            fintech_use_num: "120230041688951020102059",
            inquiry_type: "A",
            inquiry_base: "D",
            from_date: "20230223",
            to_date: "20230223",
            sort_order: "D",
            tran_dtime: "20230223143800"
        },
    };

    axios(option).then(({ data }) => {
        console.log(data);
        //mysql 데이터 입력 쿼리
        res.json(data);
    });
});

const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300416";
    let transId = clientNo + "U" + countnum; // 이용기관번호 본인것 입력
    return transId;
};


app.listen(4000);