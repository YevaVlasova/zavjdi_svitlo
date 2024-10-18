import "../styles/Main.scss";
import "../styles/MainAdaptive.scss";

const Main = ({ openModal }: any) => {
  const scrollToProds = () => {
    const aboutElement = document.getElementById("prods") as HTMLElement;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Main" id="main">
      <div className="Main__container">
        <div className="Main__logos">
          <img src={process.env.PUBLIC_URL + "deye.png"} alt="deye_logo" />
          <img src={process.env.PUBLIC_URL + "felicity.png"} alt="felicity_logo" />
        </div>
        <h1 className="Main__title">Сучасне Рішення для Освітлення в Вашому Домі!</h1>
        <p className="Main__text">
          Felec - компанія, яка допоможе вам забути про 12-ті годинні відключення світла! Ми маємо великий асортимент
          для освітлення вашої будівлі.
        </p>
        <button className="Main__button" onClick={openModal}>
          <div className="Main__button_img"></div>
          Замовити Світло у свій дім
        </button>
      </div>
      <div className="Main__image">
        <div className="Main__image_small_container1">
          <div className="Main__image_body" onClick={scrollToProds}>
            <img src={process.env.PUBLIC_URL + "Main_2.png"} alt="" className="Main__image_small" />
            <p>LUX-X-48050LG01</p>
            <h5>2,56~10,24 кВт-год</h5>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "Main_1.png"} alt="" className="Main__image_big" />
        <div className="Main__image_small_container2">
          <div className="Main__image_body" onClick={scrollToProds}>
            <img src={process.env.PUBLIC_URL + "Main_3.png"} alt="" className="Main__image_small" />
            <p>LUX-X-48050LG01</p>
            <h5>2,56~10,24 кВт-год</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
