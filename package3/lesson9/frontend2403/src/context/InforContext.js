import { createContext } from "react";
const user = {
  firstName: 'example',
  lastName: 'example',
  age: 'example',
  address: 'example'
}
export const InfoPageContext = createContext(user)