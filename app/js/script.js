document.addEventListener('DOMContentLoaded', () => {
  console.log('true');
  // images setup
  const images = [
      "../img/1.jpeg",
      // "../img/2.jpg",
      // "../img/3.jpg",
      // "../img/4.jpg",
      // "../img/5.jpg",
  ];

  // content setup
  const texts = [
      ["Mirrorless", "Take your vision into a picture"],
      // Другие тексты
  ];

  // Инициализируем плагин
  const rgbKineticSlider = new rgbKineticSlider({
      slideImages: images,
      itemsTitles: texts,
      // Прочие настройки твоего плагина...
  });

  // RGB смещение от мыши
  document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Вычисляем смещение цветов на основе позиции мыши
      const r = Math.floor((mouseX / width) * 255);
      const g = Math.floor((mouseY / height) * 255);
      const b = 255 - Math.floor(((mouseX + mouseY) / (width + height)) * 255);

      // Применяем эти значения к элементам
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      document.querySelector('h1').style.transform = `translate(${mouseX / 30}px, ${mouseY / 30}px)`;
      document.querySelector('p').style.transform = `translate(${mouseX / 50}px, ${mouseY / 50}px)`;

      // Для кнопки можно применить эффект изменения RGB
      document.querySelector('button').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
});