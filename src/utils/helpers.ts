import { DataObj } from '@/features/users/userSlice'

export function isEmptyObject(o: Object) {
  return Object.keys(o).length === 0
}

var NegrilPassword = (function () {
  var negrilPassword = ''
  var getPassword = function () {
    return typeof window !== 'undefined'
      ? localStorage.getItem('negrilPassword')
      : ''
    // Or pull this from cookie/localStorage
  }

  var setPassword = function (password: string) {
    negrilPassword = password
    if (typeof window !== 'undefined') {
      localStorage.setItem('negrilPassword', password)
    }

    // Also set this in cookie/localStorage
  }
  var checkPassword = function (password: string) {
    if (password !== process.env.NEXT_PUBLIC_PASSWORD) {
      return false
    }
    return true
    // Also set this in cookie/localStorage
  }

  return {
    getPassword: getPassword,
    setPassword: setPassword,
    checkPassword: checkPassword,
  }
})()

export default NegrilPassword

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const filterByCategory = (
  category: string,
  array: any[] | undefined
) => {
  return array?.filter((guide: DataObj) => guide.category === category)
}
export const filterBySubCategory = (
  sub_category: string,
  array: DataObj[] | undefined
) => {
  return array?.filter((guide: DataObj) => guide.sub_category === sub_category)
}
