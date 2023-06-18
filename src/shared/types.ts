export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  Contact = "contact",
  Blogs = "blogs",
}
export interface CardType {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}
