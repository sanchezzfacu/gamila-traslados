export function renderStarColor (currentPuntuation, starPosition) {
  const yellow = "#fdb61d"
  const grey = "#b0b0b0"

  if(currentPuntuation >= starPosition) return yellow 
  return grey
}