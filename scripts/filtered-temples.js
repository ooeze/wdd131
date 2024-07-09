const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerTitle = document.querySelector('#headerTitle');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    headerTitle.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    // Temple data
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Provo City Center",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/7-Rome-Temple-2160340.jpg"
        },
        {
            templeName: "Accra Ghana",
            location: "Accra Ghana",
            dedicated: "2004, January, 11",
            area: 17500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
        }
    ];

    const album = document.getElementById('album');

    function displayTemples(filter) {
        album.innerHTML = '';
        let filteredTemples = temples;

        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
                break;
        }

        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');
            const details = document.createElement('p');

            img.src = temple.imageUrl;
            img.alt = `${temple.templeName} Temple`;
            img.loading = "lazy";

            figcaption.textContent = `${temple.templeName} Temple`;
            details.textContent = `Location: ${temple.location}\nDedicated: ${temple.dedicated}\nArea: ${temple.area} sq ft`;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            figure.appendChild(details);
            album.appendChild(figure);
        });
    }

    displayTemples('all');

    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelectorAll('.navigation a').forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            const filter = link.getAttribute('data-filter');
            displayTemples(filter);
        });
    });
});