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
function toggleKey(key) {
  key.classList.toggle("active")
  playNote(key)
}
function playNote(key) {
  NOTE_DETAILS.forEach((note) => {
    if (note.note == key.dataset.note) {
      console.log(note.frequency)
    }
  })
}

KEYS.forEach((key) => {
  key.addEventListener("click", (e) => {
    console.log(e)
    toggleKey(key)
  })
})
document.addEventListener("keypress", (e) => {
  console.log(e)
})
