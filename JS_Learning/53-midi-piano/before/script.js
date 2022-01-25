const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626 },
  { note: "Db", key: "S", frequency: 277.183 },
  { note: "D", key: "X", frequency: 293.665 },
  { note: "Eb", key: "D", frequency: 311.127 },
  { note: "E", key: "C", frequency: 329.628 },
  { note: "F", key: "V", frequency: 349.228 },
  { note: "Gb", key: "G", frequency: 369.994 },
  { note: "G", key: "B", frequency: 391.995 },
  { note: "Ab", key: "H", frequency: 415.305 },
  { note: "A", key: "N", frequency: 440 },
  { note: "Bb", key: "J", frequency: 466.164 },
  { note: "B", key: "M", frequency: 493.883 },
]
const KEYS = document.querySelectorAll(".key")
var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
var oscillator = audioCtx.createOscillator()

function pressKey(key) {
  if (!key.classList.contains("active")) {
    key.classList.add("active")
    playNote(key)
  }
}
function playNote(key) {
  NOTE_DETAILS.forEach((note) => {
    if (note.note == key.dataset.note) {
      createNote(note.frequency, oscillator)
    }
  })
}
function unpressKey(key) {
  key.classList.remove("active")
  stopNote(key)
}
function stopNote(key) {
  NOTE_DETAILS.forEach((note) => {
    if (note.note == key.dataset.note) {
      oscillator.stop()
    }
  })
}

function createNote(frequency, oscillator) {
  oscillator.type = "saw"
  oscillator.frequency.value = frequency
  oscillator.connect(audioCtx.destination)
  oscillator.start()
}

KEYS.forEach((key) => {
  key.addEventListener("mouseup", (e) => {
    keysClasses = key.classList
    console.log(e)
    unpressKey(key)
  })
})
KEYS.forEach((key) => {
  key.addEventListener("mousedown", (e) => {
    console.log(e)
    pressKey(key)
  })
})
document.addEventListener("keyup", (e) => {
  NOTE_DETAILS.forEach((key) => {
    if (key.key.toLowerCase() == e.key) {
      KEYS.forEach((htmlKey) => {
        if (key.note == htmlKey.dataset.note) {
          unpressKey(htmlKey)
        }
      })
    }
  })
})
document.addEventListener("keydown", (e) => {
  NOTE_DETAILS.forEach((key) => {
    if (key.key.toLowerCase() == e.key) {
      KEYS.forEach((htmlKey) => {
        if (key.note == htmlKey.dataset.note) {
          pressKey(htmlKey)
        }
      })
    }
  })
})
