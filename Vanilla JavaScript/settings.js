

// Notification Preferences
const notificationSelect = document.getElementById('notification-select');

notificationSelect.addEventListener('change', function() {
    const selected = this.value;

    if (selected === 'none') {
        alert("None selected, notification preferences set to None.");
    } else if (selected === 'important') {
        alert("Important Only selected, notification preferences set to Important Only.");
    } else if (selected === 'all') {
        alert("All Notifications selected, notification preferences set to All Notifications.");
    }
});













const progressSelect = document.getElementById('progress-style-select');

const bars = [
    document.getElementById('bar1'),
    document.getElementById('bar2'),
    document.getElementById('bar3')
];

// Sayfa yüklendiğinde default linear animasyonu uygula
window.addEventListener('DOMContentLoaded', () => {
    bars.forEach(bar => {
        bar.className = 'progress-fill'; // önce sıfırla
        void bar.offsetWidth; // animasyonu tetiklemek için reflow
        bar.classList.add('linear');
    });
});

// Seçim değişince tüm barlara uygula
progressSelect.addEventListener('change', function() {
    const style = this.value.toLowerCase();

    bars.forEach(bar => {
        bar.className = 'progress-fill'; // önce tüm sınıfları temizle
        void bar.offsetWidth; // animasyonu tetiklemek için reflow
        if(style === 'linear') {
            bar.classList.add('linear');
        } else if(style === 'gradient') {
            bar.classList.add('gradient');
        } else if(style === 'animated') {
            bar.classList.add('animated');
        }
    });
});


function updateGears() {
  for (let i = 1; i <= 3; i++) {
    const bar = document.getElementById(`bar${i}`);
    const gear = document.getElementById(`gear${i}`);

    const width = bar.offsetWidth; // bar genişliği
    gear.style.left = `${width - gear.offsetWidth / 2}px`; // simgeyi bar ucuna taşı
  }
}

// Her 50ms’de bir konumu güncelle
setInterval(updateGears, 20);