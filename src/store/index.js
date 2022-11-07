import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const textState = atom({
  key: 'textState',
  default: '',
})










// export const textLengthAndIs = selector({
//   key: 'textLengthState',
//   get: ({ get }) => {
//     const text = get(textState)
//     const textLength = text.length
//     const isText = textLength ? true : false
//     return [textLength, isText];
//   }
// })