export class Project {
  id: number;
  position: string;
  left: string;
  right: string;
  offset: string;
  name: string;
  subtitle: string;
  img: Array<Img>;
  snip: Array<Snip>;
  btn: Array<Btn>;
}

export class Img {
  link: string;
}

export class Snip {
  id: string;
  catagory: string;
  text: string;
}

export class Btn {
  id: string;
  name: string;
  snip: string;
  delay: string;
}
