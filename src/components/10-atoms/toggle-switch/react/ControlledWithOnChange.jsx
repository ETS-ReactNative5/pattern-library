import React, { useState } from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

const ControlledWithOnChange = () => {
  const [active, setActive] = useState(false);

  const change = () => {
    setActive(!active);
  };

  return <AXAToggleSwitchReact active={active} onChange={change} />;
};

export default ControlledWithOnChange;
