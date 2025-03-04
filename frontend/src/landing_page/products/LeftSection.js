import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p> {productDescription} </p>
          <div>
          <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
          <a href={learnMore} style={{marginLeft:"40px"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-3">
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt=""/></a>
          <a href={appStore}><img src="media/images/googlePlayBadge.svg" alt=""  style={{marginLeft:"40px"}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
