import AccardionRWStars from "./AccardionRWStars";

function AccardionRWWrap({ isActiveStatusAcc, setIsActiveStatusAcc }) {
  return (
    <div className="rw_gl-accardion">
      <div className="rw-wrap_gl-accardion">
        <div className="rw-wrap_gl-accardion_title-container">
          <h2 className="rw-acc-title">Get your favorites for free</h2>
          <AccardionRWStars
            isActiveStatusAcc={isActiveStatusAcc}
            setIsActiveStatusAcc={setIsActiveStatusAcc}
          />
        </div>
      </div>
    </div>
  );
}

export default AccardionRWWrap;
