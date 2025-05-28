// Fungsi untuk konversi Celsius ke Fahrenheit
function convert() {
  const celsiusInput = document.getElementById("celsius").value.trim();
  const celsius = parseFloat(celsiusInput);

  if (isNaN(celsius)) {
    alert("Masukkan angka yang valid untuk Celsius!");
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
  document.getElementById("calc").value = `${celsius}°C × (9/5) + 32 = ${fahrenheit}°F`;
}

// Fungsi untuk mereset seluruh field
function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calc").value = "";
}

// Fungsi untuk konversi Fahrenheit ke Celsius (Reverse)
function reverse() {
  const fahrenheitInput = document.getElementById("fahrenheit").value.trim();
  const fahrenheit = parseFloat(fahrenheitInput);

  if (isNaN(fahrenheit)) {
    alert("Masukkan angka yang valid untuk Fahrenheit!");
    return;
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;
  const celsiusRounded = celsius.toFixed(2);

  document.getElementById("celsius").value = celsiusRounded;
  document.getElementById("calc").value = `(${fahrenheit}°F - 32) × 5/9 = ${celsiusRounded}°C`;
}
