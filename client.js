window.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('file')
  const codeElement = document.getElementById('code')
  const classesElement = document.getElementById('classes')

  fileInput.addEventListener('change', function () {
    try {
      this.files[0].text().then(text => {
        codeElement.innerHTML = text

        classesElement.innerHTML = ''
        text.match(/.\b(\w|-)*\b/igm)
          .filter(item => item.indexOf('.') !== -1)
          .sort()
          .forEach(item => classesElement.innerHTML += item + '<br/>')
      })
    } catch { }
  })
})
