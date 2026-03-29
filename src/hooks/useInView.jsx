import { useRef, useState, useEffect } from "react";
import { useInView as useFramerInView } from "framer-motion";

const useIsInView = (threshold = 0.3) => {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { threshold });

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true); // Trigger sekali aja
    }
  }, [isInView, hasBeenInView]);

  return { ref, hasBeenInView }; // Return yang udah final
};

export default useIsInView;
