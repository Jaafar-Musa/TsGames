import React from "react";
import { useHistory } from "react-router";

interface Props {
  title: string;
  description: string;
  isReady: boolean;
}

const ImageCarouselInfo: React.FC<Props> = ({
  title,
  description,
  isReady,
}) => {
  const histroy = useHistory();
  let route = title.replace(/\s/g,'').replace(title[0],title[0].toLowerCase())
  return (
    <section className="ImageCarouselInfo">
      <h3>{title}</h3>
      <p>{description}</p>
      <button disabled={!isReady} onClick={() => {
        return histroy.push("/games/" + route)
      }}>
        Play
      </button>
    </section>
  );
};

export default ImageCarouselInfo;
