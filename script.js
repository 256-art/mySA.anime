    document.getElementById('search-box').addEventListener('input', function () {
      const searchQuery = this.value.toLowerCase();
      const filmElements = document.querySelectorAll('.deskripsi-film > .deskripsi');

      filmElements.forEach(film => {
        const judulElement = film.previousElementSibling; // Elemen <judul>
        if (judulElement && judulElement.textContent.toLowerCase().includes(searchQuery)) {
          film.style.display = ''; // Tampilkan
          judulElement.style.display = ''; // Tampilkan judul
        } else {
          film.style.display = 'none'; // Sembunyikan
          if (judulElement) {
            judulElement.style.display = 'none'; // Sembunyikan judul
          }
        }
      });
    });