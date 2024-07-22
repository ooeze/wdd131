document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.navigation a');
    const hamButton = document.querySelector('.navigation');



    loadPage('home');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        let html = '';
        switch (page) {
            case 'home':
                html = `
                    <section class="hero" id="hero">
                        <div class="slider">
                            <div class="slides">
                                <div class="slide active">
                                    <img src="images/pexels-diva-plavalaguna-5710884.jpg" alt="Slide 1">
                                    <div class="caption">
                                        <h2>Convinience</h2>
                                        <p>You can shop from the convinience of your home, no need to go to the market</p>
                                    </div>
                                </div>
                                <div class="slide">
                                    <img src="images/pexels-greta-hoffman-9706144.jpg" alt="Slide 2">
                                    <div class="caption">
                                        <h2>Safety</h2>
                                        <p>Be sure that all our products are sources from the most sanitary places</p>
                                    </div>
                                </div>
                                <div class="slide">
                                    <img src="images/pexels-omotayo-tajudeen-1650120-3213283.jpg" alt="Slide 3">
                                    <div class="caption">
                                        <h2>Local</h2>
                                        <p>We love and support locally made products as a way to support our community</p>
                                    </div>
                                </div>
                                <div class="slide">
                                    <img src="images/pexels-denniz-futalan-339724-18717510.jpg" alt="Slide 4">
                                    <div class="caption">
                                        <h2>Affordable</h2>
                                        <p>Buying in bulk enables you to stop food wastage while getting it a affordable rates</p>
                                    </div>
                                </div>
                            </div>
                            <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
                            <button class="next" onclick="changeSlide(1)">&#10095;</button>
                        </div>
                    </section>
                    <section class="benefits">
                        <div class="benefit">
                            <h2><i class="fas fa-tags"></i> Lower Prices</h2>
                            <p>Group buying allows you to get products at discounted prices by leveraging the power of a group.</p>
                        </div>
                        <div class="benefit">
                            <h2><i class="fas fa-gift"></i> Better Deals</h2>
                            <p>With group buying, you can access exclusive deals and offers that are not available to individual buyers.</p>
                        </div>
                        <div class="benefit">
                            <h2><i class="fas fa-hand-holding-usd"></i> Increased Buying Power</h2>
                            <p>By joining a group, you can pool your resources and increase your buying power to negotiate better prices.</p>
                        </div>
                    </section>

                    <h1>Explore</h1>
                   

                    <section 

                    </section>


                    <section class="products" id="products">
                        <div class="product">
                            <img src="images/rice.png" alt="Slide 1">
                            <h3>Rice</h3>
                            <p>Product Description</p>
                            <p>Price: $103</p>
                            <button id="share-btn">Share</button>
                        </div>
                        <div class="product">
                        <img src="images/yam.png" alt="Slide 1">
                            <h3>Yam</h3>
                            <p>Product Description</p>
                            <p>Price: $45.00</p>
                            <button id="share-btn">Share</button>
                        </div>
                        <div class="product">
                         <img src="images/oni.png" alt="Slide 1">
                            <h3>Onion</h3>
                            <p>Product Description</p>
                            <p>Price: $10.20</p>
                            <button id="share-btn">Share</button>
                        </div>
                    </section>
                `;
                break;
            case 'community-forum':
                html = `
                    <section class="community-forum" id="community-forum">
                        <h2><i class="fas fa-users"></i> Community Forum</h2>
                        <nav class="forum-nav">
                            <ul>
                                <li><a href="#">Latest Discussions</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Search</a></li>
                                <li><a href="#">Create Discussion</a></li>
                            </ul>
                        </nav>
                        <div class="discussion">
                            <h3>Discussion Title</h3>
                            <p>Author: John Doe</p>
                            <p>Date: XX/XX/XXXX</p>
                        </div>
                        <div class="discussion">
                            <h3>Discussion Title</h3>
                            <p>Author: Jane Smith</p>
                            <p>Date: XX/XX/XXXX</p>
                        </div>
                    </section>
                `;
                break;
            case 'sales-page':
                html = `
                    <section class="sales-page" id="sales-page">
                        <h2><i class="fas fa-shopping-cart"></i> Sales Page</h2>
                        <nav class="sales-nav">
                            <ul>
                                <li><a href="#">All Products</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Search</a></li>
                                <li><a href="#">My Cart</a></li>
                            </ul>
                        </nav>
                        <div class="sales-product">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <p>Price: $XX.XX</p>
                        </div>
                        <div class="sales-product">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <p>Price: $XX.XX</p>
                        </div>
                    </section>
                `;
                break;
            case 'blog':
                html = `
                    <section class="blog" id="blog">
                        <h2><i class="fas fa-blog"></i> Blog</h2>
                        <nav class="blog-nav">
                            <ul>
                                <li><a href="#">Latest Articles</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Search</a></li>
                                <li><a href="#">Create Article</a></li>
                            </ul>
                        </nav>
                        <div class="article">
                            <h3>Article Title</h3>
                            <p>Author: John Doe</p>
                            <p>Date: XX/XX/XXXX</p>
                        </div>
                        <div class="article">
                            <h3>Article Title</h3>
                            <p>Author: Jane Smith</p>
                            <p>Date: XX/XX/XXXX</p>
                        </div>
                    </section>
                    
                `;
                break;
        }
        content.innerHTML = html;
        if (page === 'home') {
            initializeSlider();
        }
    }

    function initializeSlider() {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
        }

        showSlide(currentSlide);

        document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
        document.querySelector('.next').addEventListener('click', () => changeSlide(1));
    }
});
