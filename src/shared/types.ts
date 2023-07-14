export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  Contact = "contact",
  Blogs = "blogs",
}
export interface CardType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface User {
  email: string;
  id: string;
  firstname: string | null;
  lastname: string | null;
  photoUrl: string | null;
}
