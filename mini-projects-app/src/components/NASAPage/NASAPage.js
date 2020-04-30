import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadImages } from "../../actions/NASA";

const NASAPage = () => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.NASA.images);

  useEffect(() => {
    if (images.length < 1) {
      dispatch(startLoadImages());
    }
  }, [dispatch, images.length]);

  return (
    <div>
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={`img_${index}`} alt={`img_${index}`} src={image} />
        ))
      ) : (
        <p>no images yet</p>
      )}
    </div>
  );
};

export default NASAPage;
