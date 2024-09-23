// import { UserCheckOut } from '@/Models/UserCheckout'
// import { create } from 'zustand'

// interface Props {
//   getUser: () => UserCheckOut | {}
//   setUser: (user: UserCheckOut) => void
//   deleteUser: () => void
// }

// const getUser: () => UserCheckOut | {} = () => {
//   const user = JSON.parse(localStorage.getItem("user") || "")
//   if (user) {
//     return user as UserCheckOut
//   }
//   return {};
// };

// export const useUserCheckOut = create<Props>(
//   () => ({
//     getUser: () => {
//       return getUser
//     },
//     setUser: (user: UserCheckOut) => {
//       localStorage.setItem("user", JSON.stringify(user))
//     },
//     deleteUser: () => {
//       localStorage.removeItem("user")
//     }

//   })
// )