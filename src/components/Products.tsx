import { useRef, useState } from "react";
import "../styles/Products.scss";
import "../styles/ProductsAdaptive.scss";
import "swiper/css";
import "swiper/css/navigation";

const Products = ({ openModal }: any) => {
  const accordionItemRefs = useRef<HTMLDivElement[]>([]);
  const toggleAccordion = (index: number) => {
    if (accordionItemRefs.current[index]) {
      accordionItemRefs.current[index].classList.toggle("open");
    }
  };

  const [prods, setProds] = useState(initialProds);

  const toggleDropdown = (categoryId: number, productId: number) => {
    const updatedProds = prods.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          prod_list: category.prod_list.map((item) =>
            item.id === productId ? { ...item, isOpen: !item.isOpen } : item
          ),
        };
      }
      return category;
    });
    setProds(updatedProds);
  };

  return (
    <div className="Products" id="prods">
      <div className="Products__container">
        <div className="Products_accordeon">
          <div className="prod_accordion">
            {prods.map((category) => (
              <div
                className="prod_accordion-item open"
                ref={(el) => (accordionItemRefs.current[category.id] = el as HTMLDivElement)}
                key={category.id}
              >
                <div className="accordion-item-header" onClick={() => toggleAccordion(category.id)}>
                  <span className="accordion-item-header-title">{category.title}</span>
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
                    {category.prod_list.map((item) => (
                      <div className={item.label === "true" ? "products_item_hit" : "products_item"} key={item.id}>
                        <img src={process.env.PUBLIC_URL + item.img} alt="" />
                        {item.label === "true" && <div className="products_item_label">ХІТ Продажів</div>}
                        <div className="products_item_title">
                          <p>{item.title}</p>
                        </div>
                        <div className="products_item_params">
                          <div className="products_item_param">
                            <p>{item.text1}</p>
                          </div>
                          <div className="products_item_param">
                            <p>{item.text2}</p>
                          </div>
                          <div className="products_item_param">
                            <p>{item.text3}</p>
                          </div>
                        </div>
                        <p className="products_item_price">
                          Ціна: <p style={{ color: "#f3e065", margin: "10px 0px" }}>{item.price}</p>
                        </p>
                        {item.documentation && (
                          <div className={`dropdown ${item.isOpen ? "open" : ""}`}>
                            <button
                              className={`dropdown-toggle ${item.isOpen ? "open" : ""}`}
                              onClick={() => toggleDropdown(category.id, item.id)}
                            >
                              Документація
                              <span className={`chevron ${item.isOpen ? "open" : ""}`}>
                                <svg
                                  width="14"
                                  height="12"
                                  viewBox="0 0 24 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21.0564 0.886871C21.5555 0.433179 22.3177 0.433359 22.8166 0.887285C23.3869 1.40628 23.3868 2.30353 22.8163 2.82236L13.2889 11.4866C13.1191 11.6419 12.9173 11.7651 12.695 11.8492C12.4728 11.9333 12.2344 11.9766 11.9936 11.9766C11.7528 11.9766 11.5144 11.9333 11.2922 11.8492C11.0699 11.7651 10.8681 11.6419 10.6984 11.4866L1.16585 2.82224C0.595255 2.3036 0.595216 1.40631 1.16577 0.88763C1.66433 0.434387 2.42573 0.434352 2.92434 0.887549L10.6455 7.90551C11.4084 8.59888 12.5733 8.59883 13.3361 7.90538L21.0564 0.886871Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </button>
                            {item.isOpen && (
                              <ul className="dropdown-content">
                                {item.documentation.map((doc: string, index: number) => (
                                  <li key={index}>
                                    <a href={`/docs/${doc}`} target="_blank" rel="noopener noreferrer">
                                      {doc}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                        <button className="order-button" onClick={openModal}>
                          Замовити
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

const initialProds = [
  {
    id: 1,
    title: "Настінні",
    prod_list: [
      {
        id: 1,
        img: "pr3.webp",
        title: "Акумуляторна батарея LPBF48200-H",
        text1: "10 кВт-год",
        text2: "200Ah",
        text3: "51.2V",
        price: "1850$",
        label: "true",
        isOpen: false,
        documentation: ["Інструкції-LPBF48200-H.pdf"],
      },
      {
        id: 2,
        img: "pr1.webp",
        title: "Акумуляторна батарея LUX-E-48100LG04",
        text1: "5 кВт-год",
        text2: "100Ah",
        text3: "51.2V",
        price: "1130$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LUX-E-48100LG04.pdf", "Характеристики-LUX-E-48100LG04.pdf"],
      },
      {
        id: 3,
        img: "pr2.webp",
        title: "Акумуляторна батарея BOS-GM5.1 Deye",
        text1: "5.12 кВт-год",
        text2: "100Ah",
        text3: "51.2V",
        price: "1180$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-BOS-GM51-Deye.pdf"],
      },
      {
        id: 4,
        img: "pr4.webp",
        title: "Акумуляторна батарея LPBA48200",
        text1: "10 кВт-год",
        text2: "200Ah",
        text3: "51.2V",
        price: "2500$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LPBA48200.pdf", "Характеристики-LPBA48200.pdf"],
      },
      {
        id: 5,
        img: "pr28.png",
        title: "Акумуляторна батарея LPBF24200-M",
        text1: "5 кВт-год",
        text2: "200Ah",
        text3: "25.6V",
        price: "1100$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LPBF24200-M.pdf", "Характеристики-LPBF24200-M.pdf"],
      },
    ],
  },
  {
    id: 2,
    title: "Стаціонарні на колесиках",
    prod_list: [
      {
        id: 1,
        img: "pr5.webp",
        title: "Акумуляторна батарея LUX-E-48250LG03",
        text1: "12.5 кВт-год",
        text2: "250Ah",
        text3: "51.2V",
        price: "2660$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LUX-E-48250LG03.pdf", "Характеристики-LUX-E-48250LG03.pdf"],
      },
      {
        id: 2,
        img: "pr6.webp",
        title: "Акумуляторна батарея LPBF48300",
        text1: "15 кВт-год",
        text2: "300Ah",
        text3: "51.2V",
        price: "2350$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LPBF48300.pdf", "Характеристики-LPBF48300.pdf"],
      },
      {
        id: 3,
        img: "pr7.webp",
        title: "Акумуляторна батарея LUX-Y-48300LG01",
        text1: "15 кВт-год",
        text2: "300Ah",
        text3: "51.2V",
        price: "3000$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LUX-Y-48300LG01.pdf", "Характеристики-LUX-Y-48300LG01.pdf"],
      },
      {
        id: 4,
        img: "pr8.webp",
        title: "Акумуляторна батарея LPBF48350",
        text1: "17.5 кВт-год",
        text2: "350Ah",
        text3: "51.2V",
        price: "3550$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LPBF48350.pdf", "Характеристики-LPBF48350.pdf"],
      },
      {
        id: 5,
        img: "pr9.webp",
        title: "Акумуляторна батарея LPBF48500",
        text1: "25.5 кВт-год",
        text2: "500Ah",
        text3: "51.2V",
        price: "4750$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LPBF48500.pdf"],
      },
    ],
  },
  {
    id: 3,
    title: "Наборні",
    prod_list: [
      {
        id: 1,
        img: "pr10.webp",
        title: "Акумуляторна батарея FLS 48100-C",
        text1: "5 кВт-год",
        text2: "100Ah",
        text3: "51.2V",
        price: "1150$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-FLS-48100-C.pdf"],
      },
      {
        id: 2,
        img: "pr11.webp",
        title: "Акумуляторна батарея LUX-X-48100LMG01",
        text1: "5 кВт-год",
        text2: "100Ah",
        text3: "51.2V",
        price: "1100$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-LUX-X-48100LMG01.pdf", "Характеристики-LUX-X-48100LMG01.pdf"],
      },
      {
        id: 4,
        img: "pr26.webp",
        title: "Акумуляторна батарея SE-G5.1 Pro-B Deye",
        text1: "5,12 кВт-год",
        text2: "100Ah",
        text3: "51.2V",
        price: "1330$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-SE-G5.1-Pro-B-Deye.pdf"],
      },
      {
        id: 3,
        img: "pr22.webp",
        title: "Високовольтна акумуляторна батарея BOS-GM5.1 Deye",
        text1: "5,12 кВт-год",
        text2: "100Ah",
        text3: "51.2V",
        price: "1400$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-BOS-GM51-Deye.pdf"],
      },
    ],
  },
  {
    id: 4,
    title: "Інвертори",
    prod_list: [
      {
        id: 4,
        img: "pr23.webp",
        title: "Гібридний інвертор IVEM5048-LV",
        text1: "5 кВт",
        text2: "1 фазa",
        text3: "1 MMPT",
        price: "650$",
        label: "true",
        isOpen: false,
        documentation: ["Інструкції-IVEM5048-LV.pdf"],
      },
      {
        id: 5,
        img: "pr23.webp",
        title: "Гібридний інвертор IVEM8048-LV",
        text1: "8 кВт",
        text2: "1 фазa",
        text3: "1 MMPT",
        price: "950$",
        label: "true",
        isOpen: false,
        documentation: ["Інструкції-IVEM8048-LV.pdf", "Характеристики-IVEM8048-LV.pdf"],
      },
      {
        id: 1,
        img: "pr12.webp",
        title: "Гібридний інвертор T-REX-5KLP1G01",
        text1: "5 кВт",
        text2: "1 фаза",
        text3: "1 MMPT",
        price: "1190$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-T-REX-5KLP1G01.pdf", "Характеристики-T-REX-5KLP1G01.pdf"],
      },
      {
        id: 2,
        img: "pr13.webp",
        title: "Гібридний інвертор T-REX-10KLP3G01",
        text1: "10 кВт",
        text2: "3 фази",
        text3: "1 MMPT",
        price: "2040$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-T-REX-10KLP3G01.pdf", "Характеристики-T-REX-10KLP3G01.pdf"],
      },
      {
        id: 3,
        img: "pr14.webp",
        title: "Гібридний інвертор Apollo-5KLP1G01-MX",
        text1: "5 кВт",
        text2: "1 фазa",
        text3: "1 MMPT",
        price: "1500$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-Apollo-5KLP1G01-MX.pdf", "Характеристики-Apollo-5KLP1G01-MX.pdf"],
      },
      {
        id: 6,
        img: "pr24.webp",
        title: "Гібридний інвертор SUN-12K-SG04LP3-EU",
        text1: "12 кВт",
        text2: "3 фази",
        text3: "2 MMPT",
        price: "2800$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-SUN-12K-SG04LP3-EU.pdf"],
      },
      {
        id: 7,
        img: "pr25.webp",
        title: "Гібридний інвертор SUN-50K-SG01HP3-EU-BM4",
        text1: "50 кВт",
        text2: "3 фази",
        text3: "4 MMPT",
        price: "7200$",
        label: "false",
        isOpen: false,
        documentation: ["Інструкції-SUN-50K-SG01HP3-EU-BM4.pdf"],
      },
    ],
  },
  {
    id: 5,
    title: "Сонячні панелі",
    prod_list: [
      {
        id: 17,
        img: "pr17.webp",
        title: "Двосторонній Фотоелектричний модуль DHN-60X16/DG",
        text1: "480W",
        text2: "26 кг",
        text3: "30 Ампер",
        price: "102$",
        label: "true",
        isOpen: false,
        documentation: ["Характеристики-DHN-60X16-DG.pdf"],
      },
      {
        id: 15,
        img: "pr15.webp",
        title: "Двосторонній Фотоелектричний модуль DHN-78X16/DG",
        text1: "630W",
        text2: "34.2 кг",
        text3: "25 Ампер",
        price: "160$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-DHN-78X16-DG.pdf"],
      },
      {
        id: 16,
        img: "pr15.webp",
        title: "Двосторонній Фотоелектричний модуль DHN-72X16/DG",
        text1: "585W",
        text2: "30.5 кг",
        text3: "25 Ампер",
        price: "155$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-DHN-72X16-DG.pdf"],
      },
      {
        id: 16,
        img: "pr15.webp",
        title: "Двосторонній Фотоелектричний модуль DHM-72X10",
        text1: "550W",
        text2: "28 кг",
        text3: "25 Ампер",
        price: "135$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-DHM-72X10.pdf"],
      },
      {
        id: 18,
        img: "pr18.webp",
        title: "Односторонній Фотоелектричний модуль DHN-54X16/FS",
        text1: "440W",
        text2: "20.1 кг",
        text3: "25 Ампер",
        price: "97$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-DHN-54X16-FS.pdf"],
      },
      {
        id: 18,
        img: "pr27.webp",
        title: "Двосторонній Фотоелектричний модуль DHN-54X16/FS",
        text1: "435W",
        text2: "16.6 кг",
        text3: "25 Ампер",
        price: "98$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-DHN-54X16-FS-435.pdf"],
      },
    ],
  },
  {
    id: 6,
    title: "Комутація",
    prod_list: [
      {
        id: 19,
        img: "pr20.webp",
        title: "Кабель для сон. батарей KBE Solar DB+",
        text1: "500 м",
        text2: "IEC 62930",
        text3: "2 PFG",
        price: "640$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-KBE-Solar-DB.pdf"],
      },
      {
        id: 20,
        img: "pr21.webp",
        title: "Кабель для сон. батарей KBE Solar DB+",
        text1: "500 м",
        text2: "IEC 62930",
        text3: "2 PFG",
        price: "640$",
        label: "false",
        isOpen: false,
        documentation: ["Характеристики-KBE-Solar-DB.pdf"],
      },
    ],
  },
];
