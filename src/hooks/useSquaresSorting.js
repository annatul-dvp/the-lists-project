export function randomGridTemplateAreas (items) {
  let temp = ''
  let line = ''
  let count = 0

  for (const item of items) {
    for (const sq of item.squares) {
      const randomNumber = Math.floor(Math.random() * 2)
      if (line === '') {
        line = line + 'square-' + sq.id
      } else if (randomNumber === 0) {
        line = line + ' ' + 'square-' + sq.id
      } else {
        line = 'square-' + sq.id + ' ' + line
      }

      count += 1

      if (count === 30) {
        temp = temp + '"' + line + '" '
        line = ''
        count = 0
      }
    }
  }

  if (count !== 0) {
    for (let c = count; c < 30; c += 1) {
      line = line + ' .'
    }
    temp = temp + '"' + line + '" '
  }

  return temp.trim()
}

export function standartGridTemplateAreas (items) {
  let temp = ''
  for (const item of items) {
    temp = temp + '"'
    for (let i = 0; i < 30; i += 1) {
      // console.log(temp)
      if (item.squares[i] !== undefined && i !== 0) {
        temp = temp + ' ' + 'square-' + item.squares[i].id
      } else if (item.squares[i] !== undefined && i === 0) {
        temp = temp + 'square-' + item.squares[i].id
      } else {
        temp = temp + ' ' + '.'
      }
    }
    temp = temp + '" '
  }
  return temp.trim()
}
