import { useEffect, useRef } from "react";

export function usePrevios(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
