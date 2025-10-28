import React, { useEffect } from "react";

const ServiceForm = () => {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/m6bMdo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="400"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Tally Form"
    ></iframe>
  );
};

export default ServiceForm;
