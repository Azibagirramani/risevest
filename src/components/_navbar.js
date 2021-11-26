function NavBar() {
  return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
          <a href="/#">Logo </a>
        </div>
        <i class="fa fa-bars"></i>
        <ul className="nav--bar-ul">
          <li href="/#">Home</li>
          <li href="/#">Products</li>
          <li href="/#">Investment Club</li>
          <li href="/#">Blog</li>
          <li href="/#">About Us</li>
          <li href="/#">FAQs</li>
        </ul>
      </div>
  );
}

export default NavBar;
