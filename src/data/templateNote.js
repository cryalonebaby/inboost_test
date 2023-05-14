import { v4 as uuidv4 } from 'uuid'

export const generateEmptyNote = () => {
  return {
    id: uuidv4(),
    date: new Date(),
    text: ''
  }
}