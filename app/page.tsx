"use client";

import { FormEvent, useEffect, useState } from "react";

const PHONE = "923008111232";
const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${ASSET_BASE}${path}`;

const treatmentSteps = [
  { n: "01", title: "Map", text: "A specialist maps your density, scalp condition, and hair-loss pattern." },
  { n: "02", title: "Prime", text: "Your scalp is cleansed and comfortably prepared for precise delivery." },
  { n: "03", title: "Signal", text: "Micro-channels help deliver concentrated exosome signals where they matter." },
  { n: "04", title: "Renew", text: "Your personalised aftercare plan supports stronger, healthier-looking growth." },
];

const faqs = [
  ["Is the treatment painful?", "Most clients describe only mild pressure or tingling. A topical numbing solution is used to keep the 45â€“60 minute session comfortable."],
  ["How many sessions will I need?", "Your plan depends on your scalp health and pattern of hair loss. Many clients are advised a short course, followed by maintenance only when needed."],
  ["When can I expect to see a change?", "Hair cycles take time. Early changes may appear over several weeks, with density and strength continuing to improve over the following months."],
  ["Is there any downtime?", "Downtime is minimal. Mild redness or sensitivity can occur for a short period, and your specialist will give you simple aftercare instructions."],
  ["Who is a good candidate?", "It is generally best suited to early-to-moderate thinning, increased shedding, weak hair, or a receding hairline. A consultation confirms suitability."],
  ["What does a session cost?", "Treatment plans start from PKR 80,000. Your consultation includes a personalised recommendation and a transparent final quote."],
];

function Countdown() {
  const [seconds, setSeconds] = useState(23 * 3600 + 42 * 60 + 18);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => (value > 0 ? value - 1 : 24 * 3600)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return <span className="countdown" aria-label={`Offer ends in ${hours} hours, ${minutes} minutes and ${secs} seconds`}>{hours}:{minutes}:{secs}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hi Rizthetics, I'd like to book a free Hair Exosome consultation.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Concern: ${data.get("concern")}`,
      `Preferred date: ${data.get("date") || "Flexible"}`,
    ].join("\n");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="offer-bar"><span>20% off this week</span><i /> <span>12 appointments remain</span><i /> <Countdown /></div>

      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="Rizthetics home">
          <span className="brand-mark">R</span>
          <span>RIZTHETICS<small>HAIR LAB</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <a href="#science" onClick={() => setMenuOpen(false)}>The science</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Stories</a>
          <a href="tel:03008111232" onClick={() => setMenuOpen(false)}>0300-8111232</a>
        </nav>
        <a className="nav-cta" href="#booking">Book consultation <span>â†—</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>MENU</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Advanced regenerative hair care</p>
          <h1>Wake up<br />what&apos;s <em>within.</em></h1>
          <p className="hero-lede">A non-surgical, science-led treatment designed to support dormant follicles and restore the look of stronger, denser hair.</p>
          <div className="hero-actions">
            <a className="button primary" href="#booking">Claim 20% off <span>â†—</span></a>
            <a className="text-link" href="#science">Explore the science <span>â†“</span></a>
          </div>
          <div className="trust-row">
            <div className="faces" aria-hidden="true"><b>AR</b><b>AM</b><b>SA</b></div>
            <p><strong>4.9 / 5</strong><br />Loved across Lahore</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img src={asset("/images/hair-portrait.jpg")} alt="Portrait highlighting healthy, glossy hair" />
            <div className="scan-line" />
            <span className="photo-index">RX / 01</span>
          </div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="molecule-card">
            <div className="molecule"><i /><i /><i /><i /><i /></div>
            <p><span>EXOSOME SIGNALS</span>Precision at a cellular scale</p>
          </div>
          <div className="hero-note"><span>01</span><p>No surgery<br />Minimal downtime<br />45â€“60 minutes</p></div>
        </div>
      </section>

      <section className="marquee" aria-label="Treatment benefits">
        <div>REACTIVATE <span>âœ¦</span> REINFORCE <span>âœ¦</span> RENEW <span>âœ¦</span> REACTIVATE <span>âœ¦</span> REINFORCE <span>âœ¦</span> RENEW</div>
      </section>

      <section className="science section" id="science">
        <div className="section-label"><span>01</span> The science</div>
        <div className="science-grid">
          <div className="science-heading">
            <h2>Not a cover-up.<br /><em>A wake-up call.</em></h2>
            <p>Hair Exosome Therapy delivers concentrated growth-factor signals into the scalp, helping create a healthier environment for active follicles.</p>
          </div>
          <div className="signal-visual" aria-hidden="true">
            <div className="signal-core">EXO<small>SIGNAL</small></div>
            <span className="signal-ring ring-a" /><span className="signal-ring ring-b" /><span className="signal-ring ring-c" />
            <i className="dot d1" /><i className="dot d2" /><i className="dot d3" /><i className="dot d4" />
          </div>
          <div className="science-facts">
            <article><b>01</b><h3>Targeted delivery</h3><p>Micro-channels support absorption exactly where your scalp needs it.</p></article>
            <article><b>02</b><h3>Growth signalling</h3><p>Bioactive messengers support the natural communication around follicles.</p></article>
            <article><b>03</b><h3>Healthier foundation</h3><p>The goal: stronger-looking strands, improved density, and a revived scalp.</p></article>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div><strong>500+</strong><span>clients treated</span></div>
        <div><strong>4.9</strong><span>Google rating</span></div>
        <div><strong>02</strong><span>Lahore clinics</span></div>
        <div><strong>60</strong><span>minutes or less</span></div>
      </section>

      <section className="process section" id="process">
        <div className="section-label light"><span>02</span> Your session</div>
        <div className="process-intro">
          <h2>Four movements.<br /><em>One considered plan.</em></h2>
          <p>Every session is mapped around your scalp, your pattern, and your goalsâ€”not a one-size-fits-all protocol.</p>
        </div>
        <div className="process-layout">
          <div className="process-photo">
            <img src={asset("/images/clinic-detail.jpg")} alt="A specialist carrying out a precise cosmetic treatment" />
            <div className="image-caption"><span>Precision-led care</span><span>Lahore, PK</span></div>
          </div>
          <div className="steps">
            {treatmentSteps.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p><i>â†—</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="candidates section">
        <div className="section-label"><span>03</span> Your fit</div>
        <div className="candidate-grid">
          <div className="candidate-copy">
            <h2>Is your scalp<br /><em>asking for more?</em></h2>
            <p>Exosome therapy is designed for men and women experiencing early-to-moderate changesâ€”not complete or long-standing baldness.</p>
            <a className="button dark" href="#booking">Check my suitability <span>â†—</span></a>
          </div>
          <div className="concern-list">
            {["Increased shedding", "Thinning density", "Receding hairline", "Weak, brittle strands", "Post-pregnancy shedding", "Dry, unhealthy scalp"].map((item, i) => (
              <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p><b>+</b></div>
            ))}
          </div>
        </div>
      </section>

      <section className="outcomes">
        <div className="outcome-photo"><img src={asset("/images/hair-closeup.jpg")} alt="Close-up of healthy flowing hair" /></div>
        <div className="outcome-copy">
          <p className="eyebrow"><span /> Results, naturally</p>
          <h2>Stronger.<br />Fuller.<br /><em>Still you.</em></h2>
          <p>The treatment is designed to work with your biology. No artificial hairline. No surgical recovery. Just a clinically guided path toward healthier-looking hair.</p>
          <div className="outcome-tags"><span>Density</span><span>Strength</span><span>Scalp health</span><span>Confidence</span></div>
          <small>Individual results vary. Suitability and expected outcomes are assessed during consultation.</small>
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-label"><span>04</span> Client notes</div>
        <div className="reviews-head">
          <h2>Good hair days,<br /><em>in their own words.</em></h2>
          <div className="rating"><strong>4.9</strong><span>â˜…â˜…â˜…â˜…â˜…<small>Google rating</small></span></div>
        </div>
        <div className="review-grid">
          <article className="featured-review"><span>â€œ</span><blockquote>My crown looks noticeably denser and the whole experience felt considered from start to finish.</blockquote><footer><b>Abdulrehman M.</b><small>Verified Google review</small></footer></article>
          <article><span>â€œ</span><blockquote>My postpartum shedding finally slowed down. The team explained every step and never rushed me.</blockquote><footer><b>Ayesha R.</b><small>Verified Google review</small></footer></article>
          <article><span>â€œ</span><blockquote>Non-surgical, clean, and surprisingly comfortable. I feel much more confident about my hairline.</blockquote><footer><b>Xenia M.</b><small>Verified Google review</small></footer></article>
        </div>
      </section>

      <section className="social-section">
        <div className="social-head">
          <div>
            <p className="eyebrow"><span /> Inside the clinic</p>
            <h2>Seen on <em>Instagram.</em></h2>
          </div>
          <a href="https://www.instagram.com/rizthetics/" target="_blank" rel="noreferrer">Follow @rizthetics <span>â†—</span></a>
        </div>
        <div className="reel-track">
          {[
            [asset("/images/clinic-detail.jpg"), "Precision scalp care"],
            [asset("/images/hair-portrait.jpg"), "Real hair conversations"],
            [asset("/images/hair-editorial.jpg"), "Inside Rizthetics"],
            [asset("/images/client-care.jpg"), "Meet the specialists"],
          ].map(([image, label], index) => (
            <a className="reel-card" href="https://www.instagram.com/rizthetics/" target="_blank" rel="noreferrer" key={image} aria-label={`Watch ${label} on Instagram`}>
              <div className="reel-profile">
                <span className="reel-avatar">R</span>
                <p><strong>rizthetics</strong><small>Original audio</small></p>
                <b>View profile</b>
              </div>
              <div className="reel-media">
                <img src={image} alt="" />
                <span className="play-button">â–¶</span>
                <p>{label}</p>
                <small>0{index + 1} / REEL</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="booking section" id="booking">
        <div className="booking-copy">
          <p className="eyebrow"><span /> Private consultation</p>
          <h2>Your next chapter<br />starts at the <em>root.</em></h2>
          <p>Tell us what you are noticing. A Rizthetics coordinator will confirm your appointment and answer your questions on WhatsApp.</p>
          <div className="price-line"><span>Plans from</span><strong>PKR 80,000</strong><small>Transparent quote after assessment</small></div>
        </div>
        <form className="booking-form" onSubmit={submitBooking}>
          <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="e.g. Ayesha Khan" /></div>
          <div className="field"><label htmlFor="phone">WhatsApp number</label><input id="phone" name="phone" required inputMode="tel" placeholder="03XX XXXXXXX" /></div>
          <div className="field full"><label htmlFor="concern">Primary concern</label><select id="concern" name="concern" required defaultValue=""><option value="" disabled>Select one</option><option>Hair fall / shedding</option><option>Thinning density</option><option>Receding hairline</option><option>Weak or damaged hair</option><option>Post-pregnancy shedding</option><option>Other</option></select></div>
          <div className="field full"><label htmlFor="date">Preferred date</label><input id="date" name="date" type="date" /></div>
          <button className="button booking-button" type="submit">Request my consultation <span>â†—</span></button>
          <p className="form-note">No payment required. We&apos;ll use your details only to confirm your appointment.</p>
        </form>
      </section>

      <section className="faq section">
        <div className="section-label"><span>05</span> The fine print</div>
        <div className="faq-grid">
          <div><h2>Questions,<br /><em>answered.</em></h2><p>Still unsure? Call <a href="tel:03008111232">0300-8111232</a> or message our coordinator.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article key={question} className={activeFaq === index ? "active" : ""}>
                <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>{activeFaq === index ? "âˆ’" : "+"}</b></button>
                <div><p>{answer}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top"><div className="footer-word">RIZTHETICS</div><a href="#top" aria-label="Back to top">â†‘</a></div>
        <div className="footer-grid">
          <div><p>Advanced aesthetics.<br />Considered around you.</p></div>
          <div><span>Contact</span><a href="tel:03008111232">0300-8111232</a><a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">WhatsApp</a></div>
          <div><span>Visit</span><p>Lahore, Pakistan<br />Two clinic locations</p></div>
          <div><span>Social</span><a href="https://www.instagram.com/rizthetics/" target="_blank" rel="noreferrer">Instagram â†—</a><a href="https://www.google.com/search?q=Rizthetics+Lahore+reviews" target="_blank" rel="noreferrer">Google reviews â†—</a></div>
        </div>
        <div className="footer-bottom"><span>Â© 2026 Rizthetics</span><span>Results vary by individual Â· Consultation required</span></div>
      </footer>

      <a className="whatsapp-float" href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span>Let&apos;s talk</span><b>â†—</b></a>
    </main>
  );
}

