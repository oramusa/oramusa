import Link from "next/link";
import "./ember.css";

export const metadata = {
  title: "EMBER Restaurant Website Template",
  description: "A warm, reservation-focused website template for restaurants, cafés, bistros, and chef-led dining rooms.",
  alternates: { canonical: "/templates/ember" },
};

const menu = [
  ["Charred sourdough", "Cultured butter · smoked sea salt", "$9"],
  ["Roasted beet", "Whipped chèvre · pistachio · citrus", "$16"],
  ["Wild mushroom pappardelle", "Brown butter · parmesan · thyme", "$28"],
  ["Ember-roasted chicken", "Preserved lemon · jus · market greens", "$34"],
  ["Day-boat fish", "Fennel · saffron broth · herbs", "$38"],
  ["Olive oil cake", "Seasonal citrus · crème fraîche", "$12"],
];

export default function EmberTemplate() {
  return <main className="ember">
    <header className="eNav">
      <Link className="eLogo" href="#top">EMBER<span>KITCHEN & TABLE</span></Link>
      <nav><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#visit">Visit</a></nav>
      <a className="eReserve" href="#reserve">Reserve a table</a>
    </header>

    <section className="eHero" id="top">
      <img src="/ember-restaurant-hero.jpg" alt="Warm, intimate dining room prepared for evening service"/>
      <div className="eHeroShade"/>
      <div className="eHeroCopy">
        <p>SEASONAL COOKING · ORLANDO, FLORIDA</p>
        <h1>Gather around<br/>something <i>memorable.</i></h1>
        <p>Ingredient-led cooking, warm hospitality, and a table waiting for you.</p>
        <div><a className="ePrimary" href="#reserve">Reserve your table</a><a href="#menu">Explore the menu ↓</a></div>
      </div>
      <div className="eHeroFoot"><span>DINNER · TUESDAY–SUNDAY</span><span>407 555 0188</span></div>
    </section>

    <section className="eIntro" id="story">
      <p className="eEyebrow">WELCOME TO EMBER</p>
      <div><h2>Food with a sense<br/>of <i>place.</i></h2><p>We cook with the seasons and serve with generosity. Our menu begins with Central Florida farms, coastal waters, and the simple pleasure of sharing a meal together.</p></div>
    </section>

    <section className="eFeature">
      <div className="eFeatureImage"><img src="/ember-restaurant-hero.jpg" alt="Ember restaurant dining room"/></div>
      <div><p className="eEyebrow">THE EXPERIENCE</p><h2>Thoughtful by nature.<br/>Relaxed by design.</h2><p>From the first pour to the last course, every detail is considered—never complicated. Come for dinner, stay for another glass.</p><ul><li>Seasonal à la carte menu</li><li>Chef’s counter seating</li><li>Private dining for up to 24</li><li>Curated wine and cocktails</li></ul><a href="/templates#start">Plan your evening →</a></div>
    </section>

    <section className="eMenu" id="menu">
      <div className="eMenuHead"><div><p className="eEyebrow">A TASTE OF EMBER</p><h2>Tonight’s menu.</h2></div><p>Our menu changes with the market. These are a few current favorites from the kitchen.</p></div>
      <div className="eMenuGrid">{menu.map(([name,details,price]) => <article key={name}><div><h3>{name}</h3><span>{price}</span></div><p>{details}</p></article>)}</div>
      <a className="eMenuLink" href="/templates#start">View full menu ↗</a>
    </section>

    <section className="eBooking" id="reserve">
      <div className="eBookingIntro"><p className="eEyebrow">RESERVATIONS</p><h2>Your table<br/>is waiting.</h2><p>Choose your preferred evening and party size. Every customer version can connect directly to OpenTable, Resy, Toast, Square, or another reservation platform.</p></div>
      <form className="eBookingCard" action="/templates#start">
        <div><label htmlFor="reservation-date">Date</label><input id="reservation-date" type="date" required/></div>
        <div><label htmlFor="reservation-time">Time</label><select id="reservation-time" defaultValue="" required><option value="" disabled>Select a time</option><option>5:00 PM</option><option>5:30 PM</option><option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option></select></div>
        <div><label htmlFor="party-size">Party size</label><select id="party-size" defaultValue="2 guests"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option><option>7+ guests</option></select></div>
        <button type="submit">Find a table →</button>
        <p>Template demonstration — your live website will connect to your restaurant’s booking provider.</p>
      </form>
    </section>

    <section className="eQuote"><blockquote>“The kind of restaurant you hope to discover—and immediately plan to visit again.”</blockquote><p>— ORLANDO TABLE</p></section>

    <section className="eVisit" id="visit">
      <div><p className="eEyebrow">COME TO THE TABLE</p><h2>Dinner starts<br/>at <i>five.</i></h2><a className="ePrimary" href="#reserve">Make a reservation</a></div>
      <div className="eVisitDetails"><article><span>ADDRESS</span><p>128 E. New England Avenue<br/>Winter Park, FL 32789</p></article><article><span>HOURS</span><p>Tuesday–Thursday · 5–10 PM<br/>Friday–Saturday · 5–11 PM<br/>Sunday · 5–9 PM</p></article><article><span>CONTACT</span><p>(407) 555-0188<br/>hello@emberkitchen.com</p></article></div>
    </section>

    <footer className="eFooter"><Link className="eLogo" href="#top">EMBER<span>KITCHEN & TABLE</span></Link><p>Seasonal cooking.<br/>Genuine hospitality.</p><div><a href="/templates#start">Reservations</a><a href="#menu">Menu</a><a href="#visit">Visit</a></div><small>© 2026 Ember Kitchen & Table · Website template by Oramusa</small></footer>
  </main>;
}
