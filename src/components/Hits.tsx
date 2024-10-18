import "../styles/Hits.scss";
import "../styles/HitsAdaptive.scss";

const Hits = ({ openModal }: any) => {
  return (
    <div className="Hits">
      <h4 className="Types__small_title">Під ключ</h4>
      <h1 className="Types__title">Ми Пропонуємо Рішення Під Кожен Ваш Запит</h1>
      <p className="Types__text">
        В залежності від потреб наших клієнтів ми підберемо ідеальне рішення для збереження вашого світла.
      </p>
      <div className="Hits_body">
        <div className="card">
          <div className="bg">
            <img src={process.env.PUBLIC_URL + "pr1.webp"} alt="" className="hit_img" />
            <br />
            <div className="card_text">
              <h2 style={{ margin: "5px 0px" }}>Маленьке рішення</h2>
              <p className="name">Рішення для побутових потреб у квартирах</p>
              <button className="btn_card" onClick={openModal}>
                Оговорити вартість
              </button>
            </div>
          </div>
          <div className="blob"></div>
        </div>
        <div className="card">
          <div className="bg">
            <img src={process.env.PUBLIC_URL + "pr6.webp"} alt="" className="hit_img" />
            <br />
            <div className="card_text">
              <h2 style={{ margin: "5px 0px" }}>Звичайне рішення</h2>
              <p className="name">Рішення для великих квартир, офісів або частних будинків</p>
              <button className="btn_card" onClick={openModal}>
                Оговорити вартість
              </button>
            </div>
          </div>
          <div className="blob"></div>
        </div>
        <div className="card">
          <div className="bg">
            <img src={process.env.PUBLIC_URL + "prHit.webp"} alt="" className="hit_img" />
            <br />
            <div className="card_text">
              <h2 style={{ margin: "5px 0px" }}>Промислове рішення</h2>
              <p className="name">
                Рішення для спільного використання у всьому домі або селищі. Співпрацюємо з ОСББ та відправляємо
                спеціалістів для замірів.
              </p>
              <button className="btn_card" onClick={openModal}>
                Оговорити вартість
              </button>
            </div>
          </div>
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
};

export default Hits;
