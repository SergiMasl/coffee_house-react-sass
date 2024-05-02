import ImgStart from "../../../styles/img/star-svg.svg";

function AccardionRWStars({ isActiveStatusAcc, setIsActiveStatusAcc }) {
  const listStartAcc = [24, 100, 200, 300, 400];

  const checkStatus = (index) => {
    setIsActiveStatusAcc((status) => ({
      [index]: !status[index],
    }));
  };

  return (
    <ul className="rw-acc-ul">
      {listStartAcc.map((item, index) => (
        <li className="rw-acc-item" key={item}>
          <a
            href="#"
            className="rw-acc-link"
            onClick={() => checkStatus(index)}
          >
            <p className="rw-acc-link-text">{item} </p>
            <img
              className="rw-acc-link-img"
              src={ImgStart}
              alt={`star ${index}`}
            />
          </a>
          <div
            className={
              isActiveStatusAcc[index]
                ? "rw-acc-activ-link"
                : "rw-acc-default-link"
            }
          ></div>
        </li>
      ))}
    </ul>
  );
}

export default AccardionRWStars;
