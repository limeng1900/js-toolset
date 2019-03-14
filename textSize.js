function textSize (fontSize, fontFamily, text) {
  if (fontSize && fontFamily && text) {
    let spanEl = document.createElement('span')
    let result = {
      width: spanEl.offsetWidth,
      height: spanEl.offsetHeight
    }
    spanEl.style = {
      visibility: 'hidden',
      fontSize: fontSize,
      fontFamily: fontFamily,
      display: 'inline-block'
    }
    document.body.appendChild(spanEl)
    if (typeof spanEl.textContent !== 'undefined') {
      spanEl.textContent = text
    } else {
      spanEl.innerText = text
    }
    result.width = parseFloat(window.getComputedStyle(spanEl).width) - result.width
    result.height = parseFloat(window.getComputedStyle(spanEl).height) - result.height
    return result
  } else {
    return 0
  }
}

export default textSize
