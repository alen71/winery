import React, { useCallback } from 'react'
import { Group, IWine } from 'src/type/wine.type'

type Props = {
  wines: IWine[]
  wine: IWine
}

const useFindPrevOrNextGroup = ({ wines, wine }: Props) => {
  const uniqueGroups = Array.from(new Set(wines.map(wine => wine.group)))
  const currentGroupIndex = uniqueGroups.indexOf(wine.group)

  const findPrevGroup = useCallback(() => {
    let prevIndex = currentGroupIndex - 1
    if (prevIndex < 0) {
      prevIndex = uniqueGroups.length - 1
    }

    const prevGroup = uniqueGroups[prevIndex]
    const wineFromPrevGroup = wines.find(wine => wine.group === prevGroup)

    return wineFromPrevGroup?.slug
  }, [currentGroupIndex, uniqueGroups, wines])

  const findNextGroup = useCallback(() => {
    let nextIndex = currentGroupIndex + 1
    if (nextIndex > uniqueGroups.length - 1) {
      nextIndex = 0
    }

    const nextGroup = uniqueGroups[nextIndex]
    const wineFromNextGroup = wines.find(wine => wine.group === nextGroup)

    return wineFromNextGroup?.slug
  }, [currentGroupIndex, uniqueGroups, wines])

  return { findNextGroup, findPrevGroup, uniqueGroups, currentGroupIndex }
}

export default useFindPrevOrNextGroup
