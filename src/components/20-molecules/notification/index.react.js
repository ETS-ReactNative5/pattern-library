import withReact from '../../../utils/with-react';
import AXANotification from './index';

export default (createElement, version) =>
  withReact(createElement, AXANotification, version);
