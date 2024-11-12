// Funzione per gestire il salvataggio e la rimozione del nome
const nameInput = document.getElementById('nameInput')
const savedNameDiv = document.getElementById('savedName')
const saveButton = document.getElementById('saveButton')
const removeButton = document.getElementById('removeButton')

// Mostra il nome già salvato, se presente
function displaySavedName() {
  const savedName = localStorage.getItem('userName')
  if (savedName) {
    savedNameDiv.textContent = `Nome salvato: ${savedName}`
    nameInput.value = savedName
  } else {
    savedNameDiv.textContent = ''
  }
}

// Salva il nome nel localStorage
saveButton.addEventListener('click', () => {
  const name = nameInput.value
  localStorage.setItem('userName', name)
  displaySavedName()
})

// Rimuove il nome dal localStorage
removeButton.addEventListener('click', () => {
  localStorage.removeItem('userName')
  displaySavedName()
})

// Contatore di tempo usando sessionStorage
let startTime = sessionStorage.getItem('startTime')
if (!startTime) {
  startTime = Date.now()
  sessionStorage.setItem('startTime', startTime)
}

function updateCounter() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
  document.getElementById('time').textContent = elapsedTime
}

setInterval(updateCounter, 1000)

// Mostra il nome salvato all'avvio
displaySavedName()
