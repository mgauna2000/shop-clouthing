const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    <div class="footer-content">
    <img src="img/light-logo.png" alt="" class="logo">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae quaerat ipsa unde esse mollitia doloremque nam dolores placeat facere iste explicabo tenetur facilis qui, fuga suscipit nemo, aut amet odio soluta, magnam ad eius incidunt? Molestias, ipsum. Fugiat eum, blanditiis voluptates doloremque quis facilis quisquam corrupti libero voluptatem qui ad aspernatur ipsum minus neque distinctio vitae tempore in molestiae corporis consequatur consequuntur hic debitis! Omnis magnam perspiciatis libero nisi itaque voluptatibus dolores corporis quam eum nulla doloribus veniam, vero tempora eligendi voluptate totam odio assumenda alias earum. Magnam id, earum accusantium quas illo tempora dolores eius necessitatibus enim aut.</p>
<p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
<p class="info">telephone - 0-800-000-888</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">term & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online store</p>

    `;
}

createFooter();