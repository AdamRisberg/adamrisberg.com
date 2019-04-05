import React from "react";
import throttle from "lodash.throttle";

export function useInView(ref, offset) {
  const [inView, setInView] = React.useState(false);
  const doneRef = React.useRef(false);

  React.useEffect(() => {
    checkInView(ref.current, offset, setInView, doneRef);

    const handleScroll = throttle(() => {
      if (doneRef.current) return;
      checkInView(ref.current, offset, setInView, doneRef);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return inView;
}

function checkInView(el, offset, cb, doneRef) {
  const scrollY = window.scrollY || window.pageYOffset;
  const viewBottom = scrollY + window.innerHeight;
  const elementTop = el.offsetTop + offset;

  if (elementTop <= viewBottom) {
    doneRef.current = true;
    cb(true);
  }
}

export function handleLinkClick(ref, cb) {
  return e => {
    e.preventDefault();
    const targetY = ref.current.getBoundingClientRect().top;
    window.scrollTo({ top: targetY, behavior: "smooth" });
    cb && cb();
  };
}
