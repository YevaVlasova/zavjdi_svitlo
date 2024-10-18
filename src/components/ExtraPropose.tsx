import DeliverIcon from "../icons/DeliverIcon";
import GuaranteeIcon from "../icons/GuaranteeIcon";
import PaymentIcon from "../icons/PaymentIcon";
import "../styles/ExtraPropose.scss";
import "../styles/ExtraProposeAdaptive.scss";

const ExtraPropose = () => {
  return (
    <div className="ExtraPropose">
      <div className="ExtraPropose_body">
        <div className="ExtraPropose_item">
          <PaymentIcon></PaymentIcon>
          <div className="ExtraPropose_item_text">
            <h2>Оплата</h2>
            <p>- Готівка</p>
            <p>- Безготівкова на р/р ФОП</p>
            <p>- Безготівкова на р/р ТОВ з ПДВ</p>
          </div>
        </div>
        <div className="ExtraPropose_item">
          <DeliverIcon></DeliverIcon>
          <div className="ExtraPropose_item_text">
            <h2>Доставка</h2>
            <p>- Самовивіз</p>
            <p>- Нова пошта</p>
            <p>- Об’єктна доставка (по узгодженню)</p>
          </div>
        </div>
        <div className="ExtraPropose_item">
          <GuaranteeIcon></GuaranteeIcon>
          <div className="ExtraPropose_item_text">
            <h2>Гарантія</h2>
            <p>- Гарантійний ремонт</p>
            <p>- Сервісний центр</p>
            <p>- Післягарантійне обслуговування</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPropose;
