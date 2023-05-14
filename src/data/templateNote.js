import { v4 } from 'uuid'

export const generateEmptyNote = () => {
  return {
    id: v4(),
    date: new Date(),
    text: ''
  }
}