import { useMask } from "@react-input/mask";
import PhoneIcon from "../icons/PhoneIcon";
import TelegramIcon from "../icons/TelegramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import "../styles/Footer.scss";
import "../styles/FooterAdaptive.scss";
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

const Footer = () => {
  const inputRef = useMask({ mask: "+38(___)-___-__-____", replacement: { _: /\d/ } });
  const [messageApi, contextHolder] = message.useMessage();
  const [formValues, setFormValues] = useState({
    phone: "",
  });

  const messageSuccess = () => {
    messageApi.open({
      type: "success",
      content: messages[0].messageSuccess,
      className: "Message",
    });
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
      if (formValues.phone) {
        const message = `Користувач залишив номер телефону для зворотнього зв'язку на сайті Завжди Світло: %0A- Номер телефону: ${formValues.phone}`;
        await sendMessage(message);
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


  function CurrentYear() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return <span>{currentYear}</span>;
  };

  return (
    <div className="Footer" id="contacts">
      {contextHolder}
      <div className="Footer__body">
        <div className="Footer__content">
          <div className="Footer__logo">
            <img src={process.env.PUBLIC_URL + "logo.svg"} alt="" style={{ width: "160px" }} />
          </div>
          <h2 className="Footer__title">Залиште свій контактний номер</h2>
          <div className="Footer__section">
            <div className="Footer__inputs">
              <input
                id="phone"
                placeholder="+38(___)-___-__-__"
                ref={inputRef}
                type="tel"
                name="phone"
                required
                value={formValues.phone}
                onChange={handleChange}
              />
              <button onClick={handleSubmit}>Залишити заявку</button>
            </div>
            <div className="Footer__contacts">
              <button>
                <WhatsappIcon></WhatsappIcon>
              </button>
              <button>
                <a href="https://t.me/felec_energy" rel="noopener noreferrer">
                  {" "}
                  <TelegramIcon></TelegramIcon>
                </a>
              </button>
              <button>
                <a href="tel:+380673692211" rel="noopener noreferrer">
                  <PhoneIcon></PhoneIcon>
                </a>
              </button>
            </div>
          </div>
          <div className="Footer__credits">
            <p>© <CurrentYear /> Zavjdi Svitlo. All rights reserved.</p>
            <a href="https://abc-digital.com/">Made by ABC Digital</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
