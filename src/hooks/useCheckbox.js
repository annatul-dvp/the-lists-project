export function setCheckboxStyle (checkboxClass, status) {
  if (status) {
    return `${checkboxClass}_chosen`
  } else {
    return ''
  }
}
