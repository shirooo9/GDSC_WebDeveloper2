function toggleElement(elementName) {
    const elements = document.querySelectorAll('.content span');
    elements.forEach(element => {
      element.style.display = 'none'; // Sembunyikan semua elemen span
    });
  
    const selectedElement = document.querySelector(`.${elementName}`);
    selectedElement.style.display = 'block'; // Tampilkan elemen yang sesuai dengan nama kelas
}