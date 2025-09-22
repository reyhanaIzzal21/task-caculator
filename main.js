let currentResult = 0;

function calculate(operation) {
    const angka1 = parseFloat(document.getElementById('angkaPertama').value);
    const angka2 = parseFloat(document.getElementById('angkaKedua').value);
    const hasilElement = document.getElementById('hasil');

    // Validasi input
    if (isNaN(angka1) || isNaN(angka2)) {
        hasilElement.textContent = 'Input tidak valid. Harap masukkan angka yang benar.';
        hasilElement.className = hasilElement.className.replace('text-gray-700', 'text-red-500');
        return;
    }

    let hasil = 0;

    switch (operation) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if (angka2 === 0) {
                hasilElement.textContent = 'Input tidak valid. Harap masukkan angka yang benar.';
                hasilElement.className = hasilElement.className.replace('text-gray-700', 'text-red-500');
                return;
            }
            hasil = angka1 / angka2;
            break;
        default:
            return;
    }

    // Format hasil untuk menampilkan desimal jika diperlukan
    currentResult = hasil;

    // Reset warna ke normal untuk hasil yang berhasil
    hasilElement.className = hasilElement.className.replace('text-red-500', 'text-gray-700');

    if (Number.isInteger(hasil)) {
        hasilElement.textContent = hasil.toString();
    } else {
        hasilElement.textContent = hasil.toFixed(2);
    }

    // Animasi hasil
    hasilElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        hasilElement.style.transform = 'scale(1)';
    }, 200);
}

function clearAll() {
    document.getElementById('angkaPertama').value = '';
    document.getElementById('angkaKedua').value = '';
    document.getElementById('hasil').textContent = '0';
    currentResult = 0;

    // Reset warna ke normal
    const hasilElement = document.getElementById('hasil');
    hasilElement.className = hasilElement.className.replace('text-red-500', 'text-gray-700');
}

// Event listener untuk Enter key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.id === 'angkaPertama' || activeElement.id === 'angkaKedua') {
            calculate('+'); // Default operation ketika Enter ditekan
        }
    }

    // Keyboard shortcuts untuk operasi
    switch (event.key) {
        case '+':
            event.preventDefault();
            calculate('+');
            break;
        case '-':
            event.preventDefault();
            calculate('-');
            break;
        case '*':
            event.preventDefault();
            calculate('*');
            break;
        case '/':
            event.preventDefault();
            calculate('/');
            break;
        case 'Escape':
            clearAll();
            break;
    }
});