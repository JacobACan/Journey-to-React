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
  let noteDetailsKey = getNoteDetails(e.key) // Get the object key in js based on key press
  console.log(noteDetailsKey)

  if (noteDetailsKey == null) return
  noteDetailsKey.active = true
  playNotes()
})

function getNoteDetails(keyboardKey) {
  return NOTE_DETAILS.find(
    (noteDetailsKey) => keyboardKey === noteDetailsKey.key.toLowerCase()
  )
}

function playNotes() {
  let htmlKey = document.querySelectorAll(".active")
  console.log(htmlKey)
}
