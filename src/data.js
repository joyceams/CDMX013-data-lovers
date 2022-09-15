export const filterByTag = (champions, tagSelected, difficultySelected) => {
  
  let allTags = []
  if (tagSelected === 'All' && difficultySelected === 'All') {
    allTags = champions
  } else {
    allTags = champions.filter(champion => {
      let result = false
      if (tagSelected === 'All') {
        return champion.info.difficulty === Number(difficultySelected)
      } else if (difficultySelected === 'All') {
        for (let j = 0; j < champion.tags.length; j++) {
          if (champion.tags[j] === tagSelected) {
            result = true
            break
          }
        }
      } else {
        for (let j = 0; j < champion.tags.length; j++) {
          if ((champion.tags[j] === tagSelected) && (champion.info.difficulty === Number(difficultySelected))) {
            result = true
            break
          }
        }
      }
      return result
    })
  }
  return allTags
}

export const sortChampionsAscend = (champions) => {
  return champions.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    } else { return 1 }
  }
  )
}

export const sortChampionsDescend = (champions) => {
  return champions.sort((a, b) => {
    if (a.name > b.name) {
      return -1
    } else { return 1 }
  }
  )
}

