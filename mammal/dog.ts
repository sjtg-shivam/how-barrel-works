export default interface Dog {
  name: string;
  age: string;
}

export interface Poodle extends Dog {
  height: number;
}
