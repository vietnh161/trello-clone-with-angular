import { DeviceScreenType } from "../models/comon-model";

export function getDeviceScreenFromWindowWidth(width: number): DeviceScreenType {
    if (width < 768) {
      return 'Small';
    } else if (width < 1200) {
      return 'Medium';
    } else if (width < 1400) {
      return 'Large';
    } else {
      return 'X-Large';
    }
  }