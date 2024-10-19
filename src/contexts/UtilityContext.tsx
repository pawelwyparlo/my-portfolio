import React, { createContext, useContext, ReactNode } from 'react';
import { Grid } from 'antd';

interface UtilityContextProps {
  isMobileScreenSize: boolean;
}

const UtilityContext = createContext<UtilityContextProps | undefined>(
  undefined,
);

export const UtilityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { lg: isDesktopScreenSize } = Grid.useBreakpoint();

  return (
    <UtilityContext.Provider
      value={{
        isMobileScreenSize: !isDesktopScreenSize,
      }}
    >
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtilityContext = (): UtilityContextProps => {
  const context = useContext(UtilityContext);
  if (!context) {
    throw new Error('useUtilityContext must be used within a UtilityProvider');
  }
  return context;
};
