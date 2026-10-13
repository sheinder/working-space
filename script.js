const form = document.getElementById("reservasi");
const nama = document.getElementById("nama");
const jam = document.getElementById("jam");
const jumlah = document.getElementById("jumlah");
const hint = document.getElementById("hint");
const sukses = document.getElementById("sukses");

function resetError() {
  jumlah.classList.remove("invalid");
  hint.classList.remove("err");
  hint.textContent = "Maks. 4 orang per meja";
}

jumlah.addEventListener("input", () => {
  sukses.classList.remove("show");
  if (Number(jumlah.value) > 4) {
    jumlah.classList.add("invalid");
    hint.classList.add("err");
  } else {
    resetError();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const total = Number(jumlah.value);

  if (nama.value.trim() === "" || !total || total < 1) {
    hint.textContent = "Isi nama dan jumlah orang dengan benar.";
    hint.classList.add("err");
    return;
  }

  // Validasi JS: jumlah orang > 4
  if (total > 4) {
    jumlah.classList.add("invalid");
    hint.classList.add("err");
    alert("Kapasitas meja maksimal 4 orang. Silakan sewa ruang meeting.");
    return;
  }

  resetError();
  sukses.textContent = "Reservasi berhasil! " + nama.value.trim() + ", meja untuk " + total + " orang menunggumu pukul " + jam.value + ".";
  sukses.classList.add("show");
  form.reset();
  jam.value = "13.00";
});
