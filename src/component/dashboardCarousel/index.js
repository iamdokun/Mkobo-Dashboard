import React from 'react';
import "./dashboardCarousel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AccountBalance from '../accountBalance.js';
import OtherCardPlan from '../otherCardPlan';


const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  768: { items: 2},
  1400: { items: 3 },
};

const DashboardCarousel = () => {

    const items = [
      <div className="item" data-value="1">
        <AccountBalance />
      </div>,
      <div className="item" data-value="2">
        <OtherCardPlan
          style={{
            background:
              "linear-gradient(89.79deg, #D4D4FF 1.82%, #D4D4FF 100%)",
          }}
          plan="Car Purchase Plan"
          planPercent="75"
          interest="20,000"
        />
      </div>,
      <div className="item" data-value="3">
        <OtherCardPlan
          style={{
            background:
              "linear-gradient(89.79deg, #FFD4DF 1.82%, #FFD4DF 100%)",
          }}
          plan="Birthday Plan"
          planPercent="75"
          interest="20,000"
        />
      </div>,
      <div className="item" data-value="4">
        <OtherCardPlan
          style={{
            background:
              "linear-gradient(89.79deg, #D4D4FF 1.82%, #D4D4FF 100%)",
          }}
          plan="Car Purchase Plan"
          planPercent="75"
          interest="20,000"
        />
      </div>,
      <div className="item" data-value="5">
        <OtherCardPlan
          style={{
            background:
              "linear-gradient(89.79deg, #FFD4DF 1.82%, #FFD4DF 100%)",
          }}
          plan="Car Purchase Plan"
          planPercent="75"
          interest="20,000"
        />
      </div>,
    ];

  return (
    <div className="carouselWrap">
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default DashboardCarousel