import React, { Component } from "react";
import styled from "styled-components";
import Parfum from "./img/parfum.webp";
import Modal from "./components/Modal/Modal";

const ParfumTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`;
const ParfumImg = styled.img`
  max-height: 100%;
  width: 100%;
`;
const OrderBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  width: 200px;
  padding: 15px;
  border-radius: 25px;
  border: none;
  color: white;
  background-color: #471313;
`;

const CountdownTimer = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 20px 0;
`;

class App extends Component {
  state = {
    isHidden: true,
    timer: 6000,
  };

  componentDidMount = () => {
    const isHidden = localStorage.getItem("isHidden");
    if (isHidden) {
      this.setState({ isHidden: JSON.parse(isHidden) });
    } else {
      localStorage.setItem("isHidden", JSON.stringify(this.state.isHidden));
    }

    this.interval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState((prevState) => ({ timer: prevState.timer - 1 }));
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.isHidden !== this.state.isHidden) {
      localStorage.setItem("isHidden", JSON.stringify(this.state.isHidden));
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  openModal = () => {
    this.setState({ isHidden: false });
  };

  closeModal = () => {
    this.setState({ isHidden: true });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.closeModal();
  };

  render() {
    return (
      <>
        <ParfumTitle>
          Встигни зробити замовлення за пропозицією 1 + 1 = 3 Lost Cherry Eau de
          Parfum TOM FORD BEAUTY
        </ParfumTitle>
        <ParfumImg src={Parfum} alt="Parfum" />
        <OrderBtn type="button" onClick={this.openModal}>
          Зробити замовлення
        </OrderBtn>
        <CountdownTimer>
          Залишилося часу: {this.state.timer} сек.
        </CountdownTimer>

        {!this.state.isHidden && (
          <Modal
            closeModal={this.closeModal}
            onSubmit={this.handleFormSubmit}
          />
        )}
      </>
    );
  }
}

export default App;
