const textEl = document.getElementById('text')

const localEl = document.getElementById('save-local')
const sessionEl = document.getElementById('save-session')

localEl.addEventListener('click', () => {
    const text = textEl.value

    localStorage.setItem('test', text)
})

sessionEl.addEventListener('click', () => {
    const text = textEl.value

    sessionStorage.setItem('test', text)
})

