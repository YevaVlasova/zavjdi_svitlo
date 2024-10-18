import { useRef } from "react";
import "../styles/Types.scss";
import "../styles/TypesAdaptive.scss";

const Types = () => {
  const accordionItemRefs = useRef<HTMLDivElement[]>([]);
  const toggleAccordion = (index: number) => {
    for (let i = 0; i < accordionItemRefs.current.length; i++) {
      if (accordionItemRefs.current[i]) {
        accordionItemRefs.current[i].classList.remove("open");
      }
    }
    if (accordionItemRefs.current[index]) {
      accordionItemRefs.current[index].classList.add("open");
    }
  };
  return (
    <div className="Types" id="products">
      <h4 className="Types__small_title">Продукція</h4>
      <h1 className="Types__title">Наша Компанія Налічує Різноманітні Товари для Збереження Вашого Світла</h1>
      <p className="Types__text">Аккумулятори, інвертори, сонячні панелі та кабеля для різного об'єму та потужності.</p>
      <div className="Types__body">
        <div className="Types_accordeon">
          <div className="accordion">
            {data.map((item, index) => (
              <div
                className="accordion-item"
                ref={(el) => (accordionItemRefs.current[item.id] = el as HTMLDivElement)}
                onClick={() => toggleAccordion(item.id)}
                key={index}
              >
                <div className="accordion-item-header">
                  <span className="accordion-item-header-title">{item.headerUa}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down accordion-item-header-icon"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div className="accordion-item-description-wrapper">
                  <div className="accordion-item-description">
                    <hr />
                    <div className="TimeLineData">
                      <p>{item.bodyUa}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Types__image">
          <img src={process.env.PUBLIC_URL + "types.webp"} alt="" className="Types__image_big" />
        </div>
      </div>
    </div>
  );
};

export default Types;

const data = [
  {
    id: 0,
    headerUa: "Батареї",
    bodyUa:
      "Батареї для зберігання енергії дозволяють накопичувати електроенергію, яку можна використовувати в моменти, коли сонце не світить або відключено живлення. Наприклад, літій-іонна батарея на 10 кВт·год може забезпечити електроенергією середній будинок протягом 8-10 годин, заощаджуючи до 50% рахунків за електроенергію.",
  },
  {
    id: 1,
    headerUa: "Інвертори",
    bodyUa:
      "Інвертор перетворює постійний струм, що виробляється сонячними панелями або батареями, в змінний струм для живлення побутових приладів. Інвертор потужністю 5 кВт може забезпечити роботу кількох важливих пристроїв у будинку, таких як холодильник, освітлення та інтернет-роутер протягом 6-8 годин.",
  },
  {
    id: 2,
    headerUa: "Сонячні панелі",
    bodyUa:
      "Сонячні панелі генерують електроенергію, перетворюючи сонячне світло в електричний струм. Середня панель потужністю 400 Вт може виробляти близько 1,5-2 кВт·год електроенергії на день, що за рік дає до 730 кВт·год безкоштовної енергії для вашого будинку.",
  },
];
