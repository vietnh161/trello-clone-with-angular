export type DeviceScreenType = 'Small' | 'Medium' | 'Large' | 'X-Large' | null;

export class SideBarItem {
  title: string = '';
  icon: string = '';
  link: string = '';
  group?: boolean;
  childrens?: SideBarItem[];
}
