

// tạo biến dữ liệu lưu thời giangian
let timerInterval = null;
let seconds = 0;
let minutes = 0;

// lấy id El
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const btnStartStop = document.getElementById("btnStartStop");

function updateDisplay() {
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

function startTimer() {
  // Reset về 0 trước khi chạy
  minutes = 0;
  seconds = 0;
  updateDisplay();

  timerInterval = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  // Lấy dữ liệu cũ từ localStorage
  let history = JSON.parse(localStorage.getItem("clockHistory")) || [];

  // Thêm bản ghi mới vào danh sách
  history.push({
    minutes,
    seconds,
    timeText: `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
    date: new Date().toLocaleString()
  });

  // Lưu lại toàn bộ danh sách vào localStorage
  localStorage.setItem("clockHistory", JSON.stringify(history));
}

btnStartStop.addEventListener("click", () => {
  if (timerInterval) {
    // Đang chạy → dừng
    stopTimer();
    btnStartStop.textContent = "Start";
  } else {
    // Đang dừng → chạy lại từ đầu
    startTimer();
    btnStartStop.textContent = "Stop";
  }
});

