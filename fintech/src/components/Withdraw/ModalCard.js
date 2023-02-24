import axios from "axios";
import queryString from "query-string";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  //fintechUseNo : 내계좌
  //tofintechno : QR 코드로 읽어온 핀테크 계좌
  const [amount, setamount] = useState("");

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202300416U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  const handlePayButtonClick = () => {
    // 출금 이체 발생시키기
    // data params json
    // tran_amt, fintech_use_num, req_client_fintech_use_num, bank_tran_id 고정값 사용 금지 나머지는 고정값으로
    // axios option으로 요청을 작성하기 <- api 요청
    // application/json 은 데이터를 어떻게 전송?
    // 결과를 로그로 작성

    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");

    let data = {
      bank_tran_id: genTransId(),
      cntr_account_type: "N",
      cntr_account_num: "100000000001",
      dps_print_content: "사용료",
      fintech_use_num: fintechUseNo,
      wd_print_content: "사용료",
      tran_amt: amount,
      tran_dtime: "20230223160900",
      req_client_name: "이용료(홍길동)",
      req_client_fintech_use_num: tofintechno,
      req_client_num: "DOYONQ",
      transfer_purpose: "ST",
      recv_client_name: "정도영",
      recv_client_bank_code: "097",
      recv_client_account_num: "300000000001"
    }

    // const parsedSendData = queryString.stringify(data); 필요없음?

    const option = {

      method: "POST",
      url: "/v2.0/transfer/withdraw/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };

    axios(option).then(({ data }) => {
      console.log(data);
    });

  };

  const deposit = () => {

  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setamount(value);
  };

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
