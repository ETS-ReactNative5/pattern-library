import React from 'react';

export interface AXANotificationProps {
  context?: string;
  buttontext?: string;
  buttonlink?: string;
  noicon?: boolean;
}

declare function createAXANotif(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXANotificationProps>;

export default createAXANotif;
