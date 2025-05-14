///## Intersection Types

// a union type, we can say a variable or a function parameter can be one of
// another technique for combining types called intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/
//type typeAB = typeA & typeB;

//Example
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
