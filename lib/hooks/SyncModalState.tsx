import { useRef, useState } from "react";

function wait(ms = 100) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useSyncModalState<T = any>() {
  const [open, setOpen] = useState(false);

  const isCompleteRef = useRef(false);
  const returnValueRef = useRef<T>(null);

  const resetState = () => {
    // Reset the state
    isCompleteRef.current = false;
    setOpen(false);
    returnValueRef.current = null;
  };

  const openModal = async () => {
    setOpen(true);

    // Wait forever until the endRef is set to true
    while (!isCompleteRef.current) {
      await wait();
    }

    const returnValue = returnValueRef.current;

    // Reset the state
    resetState();

    return returnValue;
  };

  const closeModal = (returnValue: T) => {
    returnValueRef.current = returnValue;
    isCompleteRef.current = true;
    setOpen(false);
  };

  return {
    value: open,
    openModal,
    closeModal,
  };
}
