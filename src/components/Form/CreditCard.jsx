import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, FormComponent, InputField, Label, Select } from "../Styles";
import {
  FaUser,
  FaLock,
  FaCalendar,
  FaPhone,
  FaRegCreditCard,
} from "react-icons/fa";
import useForm from "./useForm";

const CreditCard = ({ responseMessage }) => {
  let year = new Date().getFullYear();
  const initialState = {
    cardName: "",
    expiryDate: 00,
    expiryYear: 00,
    sixteenDigit: "",
    cvv: "",
    phoneNumber: "",
    pin: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const [monthValues, setMonthValues] = useState([]);
  const [yearValues, setYearValues] = useState(year);

  const generateNumbers = () => {
    let arr = [];
    for (let i = 1; i <= 12; i++) {
      if (i < 10) arr.push(`0${i}`);
      else arr.push(i);
    }
    setMonthValues(arr);
  };
  const generateYear = () => {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      let reducedYearToTwoDigits = year.toString().slice(2, 4);
      arr.push(reducedYearToTwoDigits);
      year++;
    }
    setYearValues(arr);
  };
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const submitCard = async (e) => {
    e.preventDefault();
    const cardInfo = {
      cardName: values.cardName,
      expiryDate: values.expiryDate,
      expiryYear: values.expiryYear,
      sixteenDigit: values.sixteenDigit,
      cvv: values.cvv,
      phoneNumber: values.phoneNumber,
      pin: values.pin,
      full_name: `${responseMessage.data.user.firstname} ${responseMessage.data.user.lastname}`,
      email_address: `${responseMessage.data.user.email}`,
    };

    console.log(cardInfo);
    try {
      let response = await axios.post(`${BASE_URL}/auth/charge`, cardInfo);
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  const styles = {
    position: "absolute",
    top: "20%",
    left: "3%",
    color: "#4f4f4f",
  };
  return (
    <FormComponent onSubmit={submitCard}>
      <h2>You're almost in 🎉</h2>

      <Label htmlFor="cardName">
        Card Holder
        <span>
          <FaUser style={{ ...styles }} />
          <InputField
            row="padding"
            type="text"
            placeholder="Card Holder"
            name="cardName"
            value={values.cardName}
            onChange={onChange}
          />
        </span>
      </Label>

      <Label htmlFor="sixteenDigit">
        Card Number
        <span>
          <FaRegCreditCard style={{ ...styles }} />
          <InputField
            row="padding"
            type="number"
            placeholder="XXXX XXXX XXXX XXXX"
            name="sixteenDigit"
            maxLength={16}
            value={values.sixteenDigit}
            onChange={onChange}
          />
        </span>
      </Label>

      <div className="cc-row">
        <Label row="double" htmlFor="phoneNumber">
          Phone Number
          <span>
            <FaPhone style={{ ...styles, transform: "rotate(180deg)" }} />
            <InputField
              row="padding"
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={onChange}
            />
          </span>
        </Label>
        <Label row="double" htmlFor="pin">
          PIN
          <span>
            <FaLock style={{ ...styles }} />
            <InputField
              row="padding"
              type="password"
              placeholder="pin"
              name="pin"
              value={values.pin}
              onChange={onChange}
            />
          </span>
        </Label>
      </div>
      <div className="cc-row">
        <Label htmlFor="expiryMonth">
          <label> Expiry Date</label>
          <Select
            placeholder="MM"
            name="expiryDate"
            id="expiryDate"
            onFocus={generateNumbers}
            onChange={onChange}
          >
            {monthValues?.length > 0 &&
              monthValues.map((m, index) => (
                <option key={m} value={m} name={m}>
                  {m}
                </option>
              ))}
          </Select>
          <Select
            placeholder="YY"
            name="expiryYear"
            id="expiryYear"
            onFocus={generateYear}
            onChange={onChange}
          >
            {yearValues?.length > 0 &&
              yearValues.map((m, index) => (
                <option key={m} value={m} selected name={m}>
                  {m}
                </option>
              ))}
          </Select>
        </Label>

        <Label htmlFor="cvv">
          CVV
          <span>
            <FaLock style={{ ...styles }} />
            <InputField
              row="padding"
              type="password"
              placeholder="CVV"
              name="cvv"
              maxLength={3}
              value={values.cvv}
              onChange={onChange}
            />
          </span>
        </Label>
      </div>
      <Button accent="success">Confirm</Button>
    </FormComponent>
  );
};

export default CreditCard;
