import "./_rewards.sass";
import RewardHead from "./RewardHead";
import AccardionRWWrap from "./accardion-rw/AccardionRWWrap";
import React, { useState } from "react";
import AccardionRWDetals from "./accardion-rw/AccardionRWDetals";

function Rewards() {
  const [isActiveStatusAcc, setIsActiveStatusAcc] = useState({ 0: true });
  return (
    <section className="rewards">
      <RewardHead />
      <AccardionRWWrap
        isActiveStatusAcc={isActiveStatusAcc}
        setIsActiveStatusAcc={setIsActiveStatusAcc}
      />
      <AccardionRWDetals isActiveStatusAcc={isActiveStatusAcc} />
    </section>
  );
}

export default Rewards;
