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

export function useModalNav() {
  const [navOpen, setNavOpen] = React.useState(false);
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  const scrollY = window.scrollY || window.pageYOffset;

  React.useEffect(() => {
    if (navOpen) {
      document.body.style.top = `-${scrollY || 0}px`;
      document.body.style.position = "fixed";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.paddingRight = "0px";

      window.scrollTo(0, scrollY || 0);
    }
  }, [navOpen]);

  return [navOpen, setNavOpen, navOpen ? scrollBarWidth : 0];
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

export function useBoolDelay(bool, trueDelay, falseDelay) {
  const [delayedBool, setDelayedBool] = React.useState(bool);

  React.useEffect(() => {
    setTimeout(
      () => {
        setDelayedBool(bool);
      },
      bool ? trueDelay : falseDelay
    );
  }, [bool]);

  return delayedBool;
}

export function handleLinkClick(ref, cb) {
  return e => {
    e.preventDefault();
    const targetY = ref.current.getBoundingClientRect().top;
    const scrollY = window.scrollY || window.pageYOffset;
    window.scrollTo({ top: targetY + scrollY, behavior: "smooth" });
    cb && cb();
  };
}
