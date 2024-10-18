import "../styles/SmallInfo.scss";
import "../styles/SmallInfoAdaptive.scss";

const SmallInfo = () => {
  return (
    <div className="SmallInfo">
      <div className="SmallInfo__body">
        <div className="SmallInfo__Big">
          <h1>10K</h1> <p>Задоволених Клієнтів</p>
        </div>
        <div className="SmallInfo__Big">
          <h1>30K</h1> <p>Проданих Акумуляторів</p>
        </div>
        <div className="SmallInfo__Big">
          <h1>100%</h1> <p>Клієнтів Забули про Відключення</p>
        </div>
      </div>
    </div>
  );
};

export default SmallInfo;
