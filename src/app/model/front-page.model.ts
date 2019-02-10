export interface Project {
  id: number;
  position: string;
  title: string;
  subtitle: string;
  snip: Array<Snip>;
}
export interface Snip {
  id: string;
  catagory: string;
  text: string;
  btnName: string;
  img: string;
}
