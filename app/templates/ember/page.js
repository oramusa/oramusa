import Link from "next/link";
import "./ember.css";

export const metadata = {
  title: "EMBER Neighborhood Kitchen Website Template",
  description: "A friendly, food-forward website template for neighborhood restaurants, cafés, grills, pizza shops, and family dining.",
  alternates: { canonical: "/templates/ember" },
};

const favorites = [
  ["Ember Double Burger", "Two smashed patties, cheddar, pickles, house sauce", "$15"],
  ["Street Tacos", "Grilled chicken, pico, avocado crema, warm tortillas", "$14"],
  ["Crispy Chicken Sandwich", "Slaw, pickles, honey hot sauce, brioche", "$14"],
  ["Southwest Power Bowl", "Grilled chicken, corn, black beans, avocado", "$13"],
  ["Loaded House Fries", "Cheddar, scallions, bacon, ranch", "$9"],
  ["Warm Brownie Sundae", "Vanilla ice cream, chocolate sauce", "$8"],
];

export default function EmberTemplate() {
  return <main className="ember">
    <div className="eTopbar"><span>Open today 11 AM–10 PM</span><a href="tel:+14075550188">Call (407) 555-0188</a></div>
    <header className="eNav">
      <Link className="eLogo" href="#top"><b>EMBER</b><span>NEIGHBORHOOD KITCHEN</span></Link>
      <nav><a href="#menu">Menu</a><a href="#about">About</a><a href="#visit">Hours & Location</a></nav>
      <div className="eNavActions"><a className="eOrder" href="/templates#start">Order online</a><a className="eReserve" href="#reserve">Reserve</a></div>
    </header>

    <section className="eHero" id="top">
      <img src="/ember-neighborhood-hero.jpg" alt="Burger, tacos, salad, and drinks at a lively neighborhood restaurant"/>
      <div className="eHeroShade"/>
      <div className="eHeroCopy">
        <span>GOOD FOOD · GOOD PEOPLE · GOOD TIMES</span>
        <h1>Your neighborhood<br/>table is ready.</h1>
        <p>Burgers, tacos, fresh bowls, and family favorites—made from scratch and served with a smile.</p>
        <div><a className="ePrimary" href="/templates#start">Order online</a><a className="eSecondary" href="#menu">View our menu</a></div>
      </div>
    </section>

    <section className="eQuick">
      <a href="/templates#start"><b>🛍️</b><span><strong>Order Online</strong><small>Pickup made easy</small></span></a>
      <a href="#menu"><b>🍔</b><span><strong>View Menu</strong><small>See what’s cooking</small></span></a>
      <a href="tel:+14075550188"><b>☎</b><span><strong>Call Us</strong><small>(407) 555-0188</small></span></a>
      <a href="#visit"><b>⌖</b><span><strong>Directions</strong><small>Winter Park, FL</small></span></a>
    </section>

    <section className="eWelcome" id="about">
      <div><p className="eEyebrow">WELCOME TO EMBER</p><h2>Made for everyday moments.</h2></div>
      <p>Whether it’s a quick lunch, dinner with the family, or catching the game with friends, there’s always a seat for you. Come hungry—we’ll handle the rest.</p>
    </section>

    <section className="eMenu" id="menu">
      <div className="eMenuHead"><div><p className="eEyebrow">CUSTOMER FAVORITES</p><h2>Something for everyone.</h2></div><p>Big flavor, familiar favorites, and honest prices. Dine in, take out, or order online.</p></div>
      <div className="eMenuGrid">{favorites.map(([name,details,price]) => <article key={name}><div><h3>{name}</h3><strong>{price}</strong></div><p>{details}</p></article>)}</div>
      <div className="eMenuActions"><a className="ePrimary" href="/templates#start">View full menu</a><a className="eTextLink" href="/templates#start">Start an online order →</a></div>
    </section>

    <section className="ePromo"><div><span>WEEKDAY SPECIAL</span><h2>Lunch made easy.</h2><p>Choose any burger, sandwich, or bowl with a fountain drink for $14. Monday–Friday, 11 AM–3 PM.</p><a href="#menu">See lunch favorites →</a></div></section>

    <section className="eBooking" id="reserve">
      <div><p className="eEyebrow">SAVE YOUR SPOT</p><h2>Planning dinner?</h2><p>Book a table for your family or group. Walk-ins are always welcome too.</p></div>
      <form action="/templates#start">
        <label>Date<input type="date" required/></label>
        <label>Time<select defaultValue="" required><option value="" disabled>Select time</option><option>5:00 PM</option><option>5:30 PM</option><option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option></select></label>
        <label>Party size<select defaultValue="2 guests"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option><option>7+ guests</option></select></label>
        <button type="submit">Find a table</button>
        <small>Demo reservation form—customer sites connect to their existing booking provider.</small>
      </form>
    </section>

    <section className="eVisit" id="visit">
      <div><p className="eEyebrow">COME SEE US</p><h2>Lunch, dinner,<br/>and everything between.</h2><div className="eVisitButtons"><a className="ePrimary" href="/templates#start">Get directions</a><a href="tel:+14075550188">Call restaurant</a></div></div>
      <div className="eVisitCard"><article><span>ADDRESS</span><p>128 E. New England Avenue<br/>Winter Park, FL 32789</p></article><article><span>HOURS</span><p>Monday–Thursday · 11 AM–10 PM<br/>Friday–Saturday · 11 AM–11 PM<br/>Sunday · 11 AM–9 PM</p></article><article><span>CONTACT</span><p>(407) 555-0188<br/>hello@emberkitchen.com</p></article></div>
    </section>

    <footer className="eFooter"><Link className="eLogo" href="#top"><b>EMBER</b><span>NEIGHBORHOOD KITCHEN</span></Link><p>Good food. Good people. Right around the corner.</p><div><a href="#menu">Menu</a><a href="/templates#start">Order Online</a><a href="#reserve">Reservations</a></div><small>© 2026 Ember Neighborhood Kitchen · Website template by Oramusa</small></footer>
  </main>;
}
