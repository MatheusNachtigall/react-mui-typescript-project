import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const UseDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldIsDrawerOpen) => !oldIsDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
