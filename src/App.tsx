import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import SmallInfo from "./components/SmallInfo";
import Types from "./components/Types";
import Modal from "./components/Modal";
import { message } from "antd";
import Hits from "./components/Hits";
import ExtraPropose from "./components/ExtraPropose";

const messages = [
  {
    messageSuccess: "Ваша заявка успішно надіслана!",
  },
];

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [isLoadBody, setIsLoadBody] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [messageFromChild, setMessageFromChild] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadBody(false);
    }, 100);
  }, []);

  const openModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    if (messageFromChild === "success") {
      messageApi.open({
        type: "success",
        content: messages[0].messageSuccess,
        className: "Message",
      });
    }
  }, [messageFromChild]);

  return (
    <div className="App">
      {contextHolder}
      {isLoad === true ? (
        <div className="loaderBody">
          <div className="truckWrapper">
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/1.svg"} alt="" />
            </div>
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/2.svg"} alt="" />
            </div>
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/3.svg"} alt="" />
            </div>
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/4.svg"} alt="" />
            </div>
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/5.svg"} alt="" />
            </div>
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/dot.svg"} alt="" />
            </div>
            <div className="loader">
              <img src={process.env.PUBLIC_URL + "/loader/3Y.svg"} alt="" />
            </div>
            <div className="loadingtext">
              <img src={process.env.PUBLIC_URL + "/loader/txt.svg"} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isLoadBody === true ? (
        <></>
      ) : (
        <>
          <Header openModal={openModal}></Header>
          {isModal && <Modal openModal={openModal} setMessageFromChild={setMessageFromChild}></Modal>}
          <div className="App_Body">
            <Main openModal={openModal}></Main>
            <ExtraPropose></ExtraPropose>
            <Products openModal={openModal}></Products>
            <Hits openModal={openModal}></Hits>
            <SmallInfo></SmallInfo>
            <Types></Types>
            <Footer></Footer>
          </div>
          <div className="light-container">
            <div className="light x1"></div>
            <div className="light x2"></div>
            <div className="light x3"></div>
            <div className="light x4"></div>
            <div className="light x5"></div>
            <div className="light x6"></div>
            <div className="light x7"></div>
            <div className="light x8"></div>
            <div className="light x9"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
