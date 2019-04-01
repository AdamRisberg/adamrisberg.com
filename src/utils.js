import React from "react";
import throttle from "lodash.throttle";

export function useInView(ref, offset) {
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    checkInView(ref.current, offset, setInView);

    const handleScroll = throttle(() => {
      if (inView) return;
      checkInView(ref.current, offset, setInView);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return inView;
}

function checkInView(el, offset, cb) {
  const scrollY = window.scrollY || window.pageYOffset;
  const viewBottom = scrollY + window.innerHeight;
  const elementTop = el.offsetTop + offset;

  if (elementTop <= viewBottom) {
    cb(true);
  }
}
