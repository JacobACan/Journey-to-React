const audioContext = new AudioContext()

const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
]
// // My Solution
// const KEYS = document.querySelectorAll(".key")
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)()

// function pressKey(key) {
//   playNote(key)
//   key.classList.add("active")
// }
// function unpressKey(key) {
//   stopNote(key)
//   key.classList.remove("active")
// }

// function playNote(key) {
//   NOTE_DETAILS.forEach((note) => {
//     if (note.note == key.dataset.note) {
//       oscillator = audioCtx.createOscillator()
//       createNote(note.frequency, oscillator)
//     }
//   })
// }
// function stopNote(key) {
//   NOTE_DETAILS.forEach((note) => {
//     if (note.note == key.dataset.note) {
//       oscillator.stop()
//     }
//   })
// }

// function createNote(frequency, oscillator) {
//   oscillator.type = "saw"
//   oscillator.frequency.value = frequency
//   oscillator.connect(audioCtx.destination)
//   oscillator.start()
// }

// KEYS.forEach((key) => {
//   key.addEventListener("mouseup", (e) => {
//     keysClasses = key.classList
//     console.log(e)
//     unpressKey(key)
//   })
// })
// KEYS.forEach((key) => {
//   key.addEventListener("mousedown", (e) => {
//     console.log(e)
//     pressKey(key)
//   })
// })
// document.addEventListener("keyup", (e) => {
//   NOTE_DETAILS.forEach((key) => {
//     if (key.key.toLowerCase() == e.key) {
//       KEYS.forEach((htmlKey) => {
//         if (key.note == htmlKey.dataset.note) {
//           unpressKey(htmlKey)
//         }
//       })
//     }
//   })
// })
// document.addEventListener("keydown", (e) => {
//   if (e.repeat) return
//   NOTE_DETAILS.forEach((key) => {
//     if (key.key.toLowerCase() == e.key) {
//       KEYS.forEach((htmlKey) => {
//         if (key.note == htmlKey.dataset.note) {
//           pressKey(htmlKey)
//         }
//       })
//     }
//   })
// })

// Boss Man's Solution
document.addEventListener("keydown", (e) => {
  if (e.repeat) return // if key is being held then don't continue
  const noteDetailsKey = getNoteDetails(e.key) // Get the object key in js based on key press

  if (noteDetailsKey == null) return
  noteDetailsKey.active = true
  playNotes()
})

document.addEventListener("keyup", (e) => {
  const noteDetailsKey = getNoteDetails(e.key) // Get the object key in js based on key press

  if (noteDetailsKey == null) return
  noteDetailsKey.active = false
  playNotes()
})

function getNoteDetails(keyboardKey) {
  return NOTE_DETAILS.find(
    (noteDetailsKey) => keyboardKey === noteDetailsKey.key.toLowerCase()
  )
}

function playNotes() {
  NOTE_DETAILS.forEach((note) => {
    htmlKey = document.querySelector(`[data-note="${note.note}"]`)
    htmlKey.classList.toggle("active", note.active)
    if (note.oscillator != null) {
      note.oscillator.stop()
      note.oscillator.disconnect()
    }
  })

  //Get only active notes
  const activeNotes = NOTE_DETAILS.filter((note) => {
    return note.active
  })
  const gain = 1 / activeNotes.length
  activeNotes.forEach((note) => {
    startNote(note, gain)
  })
}
function startNote(note, gain) {
  const gainNode = audioContext.createGain()
  gainNode.gain.value = gain
  const oscillator = audioContext.createOscillator()
  oscillator.frequency.value = note.frequency
  oscillator.type = "sawtooth"
  oscillator.connect(gainNode).connect(audioContext.destination)
  oscillator.start()

  note.oscillator = oscillator
}
