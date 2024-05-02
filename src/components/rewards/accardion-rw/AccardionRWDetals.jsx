import React from "react";
import img1 from "../../../styles/img/25.png";
import img2 from "../../../styles/img/100.png";
import img3 from "../../../styles/img/200.png";
import img4 from "../../../styles/img/300.png";
import img5 from "../../../styles/img/400.png";

function AccardionRWDetals({ isActiveStatusAcc }) {
  const keys = Object.keys(isActiveStatusAcc); // Get an array of keys
  const firstIndex = parseInt(keys[0]); // Parse the first key to an integer
  console.log(firstIndex);
  const listDescriptionRW = [
    {
      id: 0,
      img: img1,
      title: "Customize your drink",
      desxription:
        "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.",
    },
    {
      id: 1,
      img: img2,
      title:
        "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
      desxription:
        "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
    },
    {
      id: 2,
      img: img3,
      title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
      desxription:
        "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
    },
    {
      id: 3,
      img: img4,
      title: "Sandwich, protein box or at-home coffee",
      desxription:
        "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
    },
    {
      id: 4,
      img: img5,
      title: "Select Starbucks® merchandise",
      desxription:
        "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
    },
  ];

  return (
    <div className="rw_gl-accardion acc-description">
      <div className="rw-wrap_gl">
        <div className="rw-wrap_gl-accardion_title-container">
          {listDescriptionRW.map((e) => (
            <div key={e.id} className="rw-wrap_gl-accardion-description-wrap">
              {e.id == firstIndex ? (
                <>
                  <div className="img-wrap">
                    <img src={e.img} className="tabContentSectioc-img" />
                  </div>
                  <div className="tabContentSectioc">
                    <h2>{e.title}</h2>
                    <p>{e.desxription}</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccardionRWDetals;
