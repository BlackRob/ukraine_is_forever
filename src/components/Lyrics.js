import * as React from "react";

const wrapIndent = {
  paddingLeft: "0.5rem",
  textIndent: "-0.5rem",
  display: "inline-block",
};

const Lyrics = () => {
  return (
    <div id="UIF_lyrics">
      <h3>Ukraine is Forever</h3>
      <p>
        <span style={wrapIndent}>We’ve been here a thousand years,</span> <br />
        <span style={wrapIndent}>Invaders come and go.</span> <br />
        <span style={wrapIndent}>Now it’s Russia’s turn to learn</span> <br />
        <span style={wrapIndent}>What we have always known.</span>
      </p>
      <p>
        <span style={wrapIndent}>That people born on this rich land</span>{" "}
        <br />
        Will fight until they’re free. <br />
        It’s not because we want to— <br />
        Seems that’s just our destiny.
      </p>
      <p>
        Like a field of sunflowers, <br />
        Reaching for the sky. <br />
        Ukraine will never give up, <br />
        Ukraine will never die.
      </p>
      <p style={{ paddingLeft: "2rem" }}>
        [chorus] <br />
        La! La! La! <br />
        Ukraine is forever! <br />
        Ha! Ha! Ha! <br />
        Ukraine is forever! <br />
        Nah! Nah! Nah! <br />
        Ukraine is forever! <br />
        Ukraine is forever! <br />
      </p>
      <p>
        <span style={wrapIndent}>The Russians like to talk about</span> <br />
        Some rabid fantasy, <br />
        <span style={wrapIndent}>Where they’re always the hero—</span> <br />
        We remember differently.
      </p>
      <p>
        We remember* Holodomor, <br />
        And we remember when <br />
        Our people died in gulags: <br />
        It’ll never happen again.
      </p>
      <p>
        <span style={wrapIndent}>Never again to Moscow’s thumb,</span> <br />
        Never again to tyranny. <br />
        <span style={wrapIndent}>Ukrainians will rule themselves,</span> <br />
        We will write our history. <br />
      </p>
      <p style={{ paddingLeft: "2rem" }}>
        <i>chorus</i>
      </p>
      <p>
        <span style={wrapIndent}>The Russians need to understand</span> <br />
        That they can never win. <br />
        <span style={wrapIndent}>That even if they knock us down,</span> <br />
        Ukraine will rise again.
      </p>
      <p>
        From Kherson and Crimea, <br />
        From the Donbas to Chernihiv, <br />
        Our heroes will keep fighting <br />
        Until all the rashists leave.
      </p>
      <p>
        It’s not that we hate Russians, <br />
        <span style={wrapIndent}>Some of them** are so, so brave.</span> <br />
        <span style={wrapIndent}>
          We hope someday they’ll join us when
        </span>{" "}
        <br />
        We dance on Putin’s grave.
      </p>
      <p style={{ paddingLeft: "2rem" }}>
        <i>chorus</i>
      </p>
      <p>
        Slava Ukraini! *** <br />
        Mariupol forever! <br />
        Kharkiv is forever! <br />
        Ukraine is forever!
      </p>
      <hr />
      <p>
        <span style={wrapIndent}>
          * "Remember" is stressed here as “REmemBER”.{" "}
        </span>
        <br />
        <span style={wrapIndent}>
          ** This refers to the Russians protesting the war.{" "}
        </span>{" "}
        <br />
        <span style={wrapIndent}>
          *** The coda is optional and flexible. Change it as you see fit.{" "}
        </span>
      </p>
      <p>
        <a href="/lyrics_01.pdf">Download the lyrics as a PDF</a>
      </p>
    </div>
  );
};

export default Lyrics;
