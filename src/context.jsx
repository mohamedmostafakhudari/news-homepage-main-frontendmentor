import { createContext, useContext, useState } from "react";

const ActiveContext = createContext();
const ActiveUpdateContext = createContext();

export function useActive() {
  return useContext(ActiveContext);
}
export function useActiveToggle() {
  return useContext(ActiveUpdateContext);
}
export function ActiveStateProvider({ children }) {
  const [active, setActive] = useState(false);

  function toggleActive() {
    setActive(!active);
  }

  return (
    <ActiveContext.Provider value={active}>
      <ActiveUpdateContext.Provider value={toggleActive}>
        {children}
      </ActiveUpdateContext.Provider>
    </ActiveContext.Provider>
  );
}
