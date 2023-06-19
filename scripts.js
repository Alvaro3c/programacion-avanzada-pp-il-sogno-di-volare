const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil() {
        return this.civilImages[Math.floor(Math.random() * this.civilImages.length)]
    }

    getRandomMilitary() {
        return this.militaryImages[Math.floor(Math.random() * this.militaryImages.length)]
    }

    getAll() {
        return [...this.civilImages, ...this.militaryImages]
    }
}

class Painter {
    constructor() {
        this.gallery = document.createElement('section');
    }

    createGallery() {
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        let elements = `
        <picture>
        <img src="${imageUrl}" />
        </picture>`
        return elements
    }

    paintSingleImage(imageUrl) {
        this.gallery.innerHTML = this.createImageTag(imageUrl)
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(imageURL => {
            this.gallery.innerHTML += `
            <picture>
            <img src="${imageURL}" />
            </picture>`
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);

// Pruebas de Gallery con aircrafts
console.log(aircrafts.getRandomCivil())
console.log(aircrafts.getRandomMilitary())
console.log(aircrafts.getAll())

// Pruebas de Gallery con helicopters
console.log(helicopters.getRandomCivil())
console.log(helicopters.getRandomMilitary())
console.log(helicopters.getAll())

const painter = new Painter()
painter.createGallery()
painter.createImageTag('assets/helicoptero-militar-3.jpg')