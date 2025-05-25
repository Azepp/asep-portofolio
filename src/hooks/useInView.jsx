import { useRef } from "react";
import { useInView } from "framer-motion";

const useIsInView = (threshold = 0.3, once = false) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    threshold,
    once,
  });

  return { ref, isInView };
};

export default useIsInView;