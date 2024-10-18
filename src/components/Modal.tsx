import { useMask } from "@react-input/mask";
import "../styles/Modal.scss";
import { useState } from "react";
import { getFormSubmissionCount, incrementFormSubmissionCount } from "../api/localStorageHelper";
import { sendMessage } from "../api/telegram";
import { message } from "antd";

const messages = [
  {
    messageSuccess: "Ваша заявка успішно надіслана!",
  },
  {
    messageError: "Заповніть усі поля!",
  },
  {
    messageLimit: "Ви досягли максимальної кількості заявок.",
  },
];

const Modal = ({ openModal, setMessageFromChild }: any) => {
  const inputRef = useMask({ mask: "+38(___)-___-__-____", replacement: { _: /\d/ } });
  const [messageApi, contextHolder] = message.useMessage();
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const messageSuccess = () => {
    setMessageFromChild("success");
  };

  const messageError = () => {
    messageApi.open({
      type: "error",
      content: messages[1].messageError,
      className: "Message",
    });
  };

  const messageLimit = () => {
    messageApi.open({
      type: "warning",
      content: messages[2].messageLimit,
      className: "Message",
    });
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file" && files.length > 0) {
      setFormValues({
        ...formValues,
        [name]: files[0],
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submissionCount = getFormSubmissionCount();

    if (submissionCount >= 3) {
      messageLimit();
      return;
    }

    try {
      if (formValues.name && formValues.phone && formValues.message) {
        const message = `Нове повідомлення з сайту Завжди Світло: %0A- Ім'я: ${formValues.name} %0A- Номер телефону: ${formValues.phone} %0A- Коментар: ${formValues.message}`;
        await sendMessage(message);
        openModal();
        messageSuccess();
        incrementFormSubmissionCount();
      } else {
        messageError();
      }
    } catch (e) {
      console.log("Error");
    } finally {
    }
  };
  return (
    <div className="Modal">
      {contextHolder}
      <div className="ModalOverlay" onClick={openModal}></div>
      <div className="ModalBody">
        <div className="form">
          <div className="title">Вітаю!</div>
          <div className="subtitle">Залишайте повідомлення, і наші менеджери зв'яжуться з вами :)</div>

          <form action="submit">
            <div className="input-container ic1">
              <input
                id="name"
                type="text"
                name="name"
                placeholder=""
                className="input"
                value={formValues.name}
                onChange={handleChange}
                required
              />
              <div className="cut"></div>
              <label className="iLabel">Ваше ім'я</label>
            </div>

            <div className="input-container ic2">
              <input
                placeholder="+38(___)-___-__-__"
                type="tel"
                className="input"
                id="phone"
                name="phone"
                ref={inputRef}
                value={formValues.phone}
                onChange={handleChange}
                required
              />
              <div className="cut"></div>
              <label className="iLabel">Телефон</label>
            </div>
            <div className="input-container ic2">
              <input
                placeholder=""
                type="text"
                className="input"
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
              />
              <div className="cut"></div>
              <label className="iLabel">Повідомлення</label>
            </div>
            <button className="submit" onClick={handleSubmit}>
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
