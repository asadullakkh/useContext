import { createContext } from "react";
import { defaultValue } from "./ParentStates";

export const ParentContext = createContext(
  {} as ReturnType<typeof defaultValue>
);

interface ParentProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ParentProvider = ({ children }: ParentProviderProps) => {
  return (
    <ParentContext.Provider value={defaultValue()}>
      {children}
    </ParentContext.Provider>
  );
};
