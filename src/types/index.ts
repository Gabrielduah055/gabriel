export interface Project {
  id: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}
