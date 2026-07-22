import { useState, useRef, useEffect } from "react";

import "./Popover.css";

export default function Popover({
  trigger,
  children,
}) {
  const [open, setOpen] = useState(false);

  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="sg-popover"
      ref={popoverRef}
    >
      <button
        className="sg-popover__trigger"
        type="button"
        onClick={() =>
          setOpen(!open)
        }
      >
        {trigger}
      </button>

      {open && (
        <div className="sg-popover__content">
          {children}
        </div>
      )}
    </div>
  );
}