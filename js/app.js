document.addEventListener("DOMContentLoaded", function() {
  // Timeout, um den weißen Bildschirm für 3 Sekunden zu halten
  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 3000);

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Links
      const sectionId = this.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.classList.remove("active");
  });
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add("active");
  }

  // Verhindert das Scrollen zum Abschnitt
  window.scrollTo(0, 0);

  // Ändere die Hintergrundfarbe der gradient-box basierend auf der aktiven Sektion
  const gradientBox = document.querySelector('.gradient-box');
  gradientBox.classList.remove('home', 'projekte', 'about', 'lebenslauf', 'tools', 'bewerbungsdossier'); // Entferne alle spezifischen Klassen
  if (sectionId === 'home') {
    gradientBox.classList.add('home');
  } else if (sectionId === 'projekte') {
    gradientBox.classList.add('projekte');
  }else if (sectionId === 'about') {
    gradientBox.classList.add('about');
  }else if (sectionId === 'lebenslauf') {
    gradientBox.classList.add('lebenslauf');
  }else if (sectionId === 'tools') {
    gradientBox.classList.add('tools');
  }else if (sectionId === 'bewerbungsdossier') {
  gradientBox.classList.add('bewerbungsdossier');
  }
}



// Modal-Elemente abrufen
var modal = document.getElementById("pdfModal");
var btn = document.getElementById("pdfBtn");
var span = document.getElementsByClassName("close")[0];

// Modal öffnen
btn.onclick = function() {
  modal.style.display = "block";
}

// Modal schließen
span.onclick = function() {
  modal.style.display = "none";
}

// Modal schließen, wenn der Benutzer außerhalb des Modals klickt
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


