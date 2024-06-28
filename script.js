document.addEventListener('DOMContentLoaded', () => {
    const dogContainer = document.getElementById('dog-container');
    let imageCount = 0;

    // Функция для получения и отображения изображения
    async function fetchDogImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            displayDogImage(data.message);
            imageCount++;

            // Останавливаем интервал после отображения 10 изображений
            if (imageCount >= 10) {
                clearInterval(intervalId);
            }
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    }

    // Функция для отображения изображения
    function displayDogImage(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Dog Image';
        img.className = 'dog-image';
        dogContainer.appendChild(img);
    }

    // Устанавливаем интервал для получения изображений каждые 3 секунды
    const intervalId = setInterval(fetchDogImage, 3000);

    // Получаем первое изображение сразу
    fetchDogImage();
});
