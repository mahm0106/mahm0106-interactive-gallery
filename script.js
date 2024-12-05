const imageData = [
    { src: 'image_1.jpg', hdSrc: 'image_1-hd.jpg', caption: 'Image 1' },
    { src: 'image_2.jpg', hdSrc: 'image_2-hd.jpg', caption: 'Image 2' },
    { src: 'image_3.jpg', hdSrc: 'image_3-hd.jpg', caption: 'Image 3' },
    { src: 'image_4.jpg', hdSrc: 'image_4-hd.jpg', caption: 'Image 4' },
    { src: 'image_5.jpg', hdSrc: 'image_5-hd.jpg', caption: 'Image 5' },
    { src: 'image_6.jpg', hdSrc: 'image_6-hd.jpg', caption: 'Image 6' },
    { src: 'image_7.jpg', hdSrc: 'image_7-hd.jpg', caption: 'Image 7' },
    { src: 'image_8.jpg', hdSrc: 'image_8-hd.jpg', caption: 'Image 8' },
    { src: 'image_9.jpg', hdSrc: 'image_9-hd.jpg', caption: 'Image 9' },
    { src: 'image_10.jpg', hdSrc: 'image_10-hd.jpg', caption: 'Image 10' },
    { src: 'image_11.jpg', hdSrc: 'image_11-hd.jpg', caption: 'Image 11' },
    { src: 'image_12.jpg', hdSrc: 'image_12-hd.jpg', caption: 'Image 12' },
    { src: 'image_13.jpg', hdSrc: 'image_13-hd.jpg', caption: 'Image 13' },
    { src: 'image_14.jpg', hdSrc: 'image_14-hd.jpg', caption: 'Image 14' }
];

document.addEventListener('DOMContentLoaded', function() {

    function populateGallery() {
        const gallery = document.getElementById('gallery');

        imageData.forEach(image => {
            const img = document.createElement('img');
            img.src = `images/${image.src}`;
            img.alt = image.caption;
            img.dataset.hdSrc = `images/${image.hdSrc}`;
            img.dataset.caption = image.caption;
            gallery.appendChild(img);
        });
    }


    const modal = document.getElementById('modal');

   
    document.getElementById('gallery').addEventListener('click', function(event) {
        const target = event.target;
        const modalContent = modal.querySelector('.modal-content');
        const caption = modal.querySelector('#caption');

        if (target.tagName === 'IMG' && target.parentNode === this) {
          
            modal.style.display = 'block';
            modalContent.src = target.dataset.hdSrc;
            caption.textContent = target.dataset.caption;
        }
    });

    
    modal.addEventListener('click', function(event) {
        const clickedElement = event.target;
        const isModalContent = clickedElement.classList.contains('modal-content');
    
        if (isModalContent) {
            modal.style.display = 'none';
        }
    });


    populateGallery();
});
