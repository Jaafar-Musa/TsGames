import React, { useEffect, useState } from "react";
import Games from "../../model/Games";
import ImageCarouselInfo from "./ImageCarouselInfo";

const ImageCarousel: React.FC = () => {
  const [slideNo, setSlideNo] = useState(0);

    useEffect(() => {
      const c = setInterval(() => {
        setSlideNo(slideNo < Games.length - 1 ? slideNo + 1 : 0);
      }, 4500);
      return () => {
        clearInterval(c);
      };
    }, [slideNo]);

  return (
    <section className="ImageCarousel">
      <img
        src={require(`../../assets/${Games[slideNo].imgName}`).default}
        alt={Games[slideNo].imgName}
        key={Games[slideNo].imgName}
      />
      <ImageCarouselInfo
        isReady={Games[slideNo].isReady}
        description={Games[slideNo].description}
        title={Games[slideNo].title}
      />
    </section>
  );
};

export default ImageCarousel;
