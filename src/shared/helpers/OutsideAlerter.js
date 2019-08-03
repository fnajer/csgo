import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, isOpen, close, exceptionElement = { current: null }) {

  function handleClickOutside(event) {
    const hasException = Boolean(exceptionElement.current)

    if (hasException) {
      if (ref.current && !ref.current.contains(event.target)
        && !exceptionElement.current.contains(event.target)) {
        close()
      }
      return
    }
    if ((ref.current && !ref.current.contains(event.target))) {
      close()
    }
  }

  useEffect(() => {
    if (!isOpen) return
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.isOpen, props.close, props.exceptionElement);

  return <div hidden={!props.isOpen} ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;
