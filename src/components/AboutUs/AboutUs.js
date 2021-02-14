import React from "react";

import classes from "./AboutUs.module.css";

const aboutUs = (props) => (
  <div className={classes.aboutUs}>
    <div className={classes.logoContainter}>
      <p className={classes.Title}>Flume</p>
      <p className={classes.subTitle}>Z wami od 1989 r.</p>
    </div>
    <div>
      <p className={classes.Title}>Historia</p>
    </div>
    <div className={classes.shopContainter}>
      <p>Sklep Stacjonarny</p>
      <p>Gdynia</p>
      <p>ul Świętojańska 138</p>
    </div>
    <div className={classes.longTextContainer}>
      <p className={classes.longText}>
        Sklep Flume.pl powstał w 1989 roku. Główną naszą domeną jest sprzedaż
        stacjonarna i internetowa, jednak nie ograniczamy się tylko do usług
        sprzedażowych. Wychodząc naprzeciw oczekiwaniom naszych klientów sklep
        Flume cały czas się rozwija. Współpracujemy z gronem znakomitych
        fotografów, z którymi wymieniamy się wiedzą i poszerzamy swoje
        horyzonty. Organizujemy liczne warsztaty tematyczne i spotkania z
        przedstawicielami wielu firm specjalizujących się w różnych dziedzinach
        fotografii. Można nas również spotkać na imprezach fotograficznych.
        Działamy także w sieci, gdzie możecie znaleźć nasze testy sprzętu
        fotograficznego. Bogaty wybór znajdą u nas zarówno doświadczeni zawodowi
        fotografowie, jak i miłośnicy na różnych stopniach zaawansowania. Do
        Państwa dyspozycji mamy także stacjonarną wypożyczalnię sprzętu
        fotograficznego. Wpadajcie śmiało, testujcie i dobierzcie sprzęt, który
        spełnia Wasze oczekiwania. Wśród naszych partnerów są znane i cenione w
        fotograficznym świecie marki, takie jak Olympus, Fujifilm, Samyang,
        Sigma, Profoto, Quadralite, Eizo, Epson i wiele innych. Chętnie
        podzielimy się z Państwem naszym 32-letnim doświadczeniem i doradzimy w
        wyborze idealnego zestawu fotograficznego. Zapraszamy Państwa do naszego
        sklepu stacjonarnego w Gdyni i kontaktu drogą elektroniczną.
      </p>
    </div>
  </div>
);

export default aboutUs;
