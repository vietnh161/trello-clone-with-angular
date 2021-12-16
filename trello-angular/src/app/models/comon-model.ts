export class SideBarItem {
  title: string = '';
  icon: string = '';
  link: string = '';
  group?: boolean;
  childrens?: SideBarItem[];
}
