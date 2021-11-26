import NavBar from "./components/_navbar";

import Footer from "./components/_footer";
import HeroImage from "./assets/Subtract.png";
import Partner from "./assets/partners.PNG";

import CommunityImg from "./assets/community.PNG";
import PlayStore from "./assets/playstore.PNG";
import AppStore from "./assets/appleStore.PNG";

import HeroAppStore from "./assets/heroapple.PNG";
import HeroPlayStore from "./assets/googleButton.PNG";

function IconLinks() {
  return (
    <a href="#/" className="h-link">
      Learn how Stocks work
    </a>
  );
}
function Hero() {
  return (
    <div className="hero parent">
      <div className="hero-text">
        <h1>Dollar investments that help you grow</h1>
        <p>
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>
        <div className="apps">
        <img src={HeroPlayStore} alt="partners" />
        <img src={HeroAppStore} alt="partners" />
      </div>
      </div>
      <div className="hero-img">
        <img src={HeroImage} alt="hero" />
      </div>
      
    </div>
  );
}
function AssestCards() {
  return (
    <div className="assest-cards">
      <div className="asset-header">
        <h1>Asset Classes</h1>
        <p>It’s your money, choose where you invest it</p>
      </div>
      <div className="row">
        <div className="col">
          <div className="assest-card">
            <div className="assest-card-top first-card">
              <img src={HeroImage} alt="partner" />
            </div>
            <div className="assest-card-body">
              <h1 className="assest-card-title">Stocks</h1>
              <p>
                We help you invest and manage your money by investing in our
                portfolio of 30 high-growth stocks across the US market with our
                equity portfolio of power stocks.
              </p>
              <p>Historical returns: 14% per annum </p>
              <p style={{ margin: 0 }}>Risk Level: Medium</p>
            </div>
            <div className="assest-card-footer">
              <IconLinks />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="assest-card">
            <div className="assest-card-top second-card">
              <img src={HeroImage} alt="partner" />
            </div>
            <div className="assest-card-body">
              <h1 className="assest-card-title">Stocks</h1>
              <p>
                We help you invest and manage your money by investing in our
                portfolio of 30 high-growth stocks across the US market with our
                equity portfolio of power stocks.
              </p>
              <p>Historical returns: 14% per annum </p>
              <p style={{ margin: 0 }}>Risk Level: Medium</p>
            </div>
            <div className="assest-card-footer">
              <IconLinks />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="assest-card">
            <div className="assest-card-top third-card">
              <img src={HeroImage} alt="partner" />
            </div>
            <div className="assest-card-body">
              <h1 className="assest-card-title">Stocks</h1>
              <p>
                We help you invest and manage your money by investing in our
                portfolio of 30 high-growth stocks across the US market with our
                equity portfolio of power stocks.
              </p>
              <p>Historical returns: 14% per annum </p>
              <p style={{ margin: 0 }}>Risk Level: Medium</p>
            </div>
            <div className="assest-card-footer">
              <IconLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Apartner() {
  return (
    <div className="apartners">
      <img src={Partner} alt="apartner" />
    </div>
  );
}
function Testimonials() {
  return (
    <div className="testimonials">
      <h1 className="text-center fc-primary fw-600 mb-2">
        From The People Who Use Rise
      </h1>
      <p className="fs-normal text-center mt-3">
        Our mission at Risevest is to empower more people just like you <br />{" "}
        to achieve your personal financial goals.
      </p>

      <div className="row">
        <div className="testimonials-card">
          <div className="testimonials-card-body m-0 p-0">
            <p className="fs-1 fw-500">
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="flex-2">
              <img src={HeroImage} alt="partner" />
              <p className="fw-800">Jesse</p>
            </div>
          </div>
        </div>
        <div className="testimonials-card">
          <div className="testimonials-card-body m-0 p-0">
            <p className="fs-1 fw-500">
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="flex-2">
              <img src={HeroImage} alt="partner" />
              <p className="fw-800">Jesse</p>
            </div>
          </div>
        </div>
        <div className="testimonials-card">
          <div className="testimonials-card-body m-0 p-0">
            <p className="fs-1 fw-500">
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="flex-2">
              <img src={HeroImage} alt="partner" />
              <p className="fw-800">Jesse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Ads() {
  return (
    <div className="ads">
      <div className="text-area">
        <p className="fc-primary fw-800 subtitle">Download The Rise App</p>
        <p className="fs-2x m-0 fw-400 responsive-text">
          Join our 100,000 users investing and setting long term goals!
        </p>
        <p className="fw-300 subtitle-2">
          Dollar investments that help you grow.
        </p>
        <div className="flex-2">
          <img src={AppStore} alt="partner" />
          <img src={PlayStore} alt="partner" />
        </div>
      </div>
      <div className="img-cover">
        <img src={HeroImage} alt="partner" />
      </div>
    </div>
  );
}
function Community() {
  return (
    <div className="community">
      <div className="community-text">
        <h1>Join The Rise Community</h1>
        <p>
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <button>Join our Community</button>
      </div>
      <div className="communnity-img">
        <img src={CommunityImg} alt="partner" />
      </div>
    </div>
  );
}
function Entry() {
  return (
    <div className="container">
     <NavBar />
      <Hero />
      <AssestCards />
      <Testimonials /> 
      <Community />
      <Ads />
      <Footer />
    </div>
  );
}

export default Entry;
