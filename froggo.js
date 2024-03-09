const buttons = document.querySelectorAll(".froggo");
let currentlyPlayingAudio = null;
let paragraph = document.getElementById("changeme");
let imaggio = document.getElementById("imagechangeyup");
let susTimeout = null;

buttons.forEach((froggo) => {
  froggo.addEventListener("click", () => {
    makeSound(froggo);
  });
});

function makeSound(button) {
  clearTimeout(susTimeout);
  switch (true) {
    case button.classList.contains("happy"):
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      paragraph.innerHTML = "One of the very best sounds I make, happy Froggo in the centre of my home, well, for you it might seems the centre of a swamp... No judging here!";
      imaggio.src = "../Froggo/starry.png";
      let hap = new Audio("sounds/happysound.mp3");
      currentlyPlayingAudio = hap;
      hap.play();
      break;

    case button.classList.contains("cry"):
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      paragraph.innerHTML = "That's a sound of an upset Froggo! It's short but shows that I'm at my limit. Don't make things worse in this case, would you? Pretty please?";
      imaggio.src = "../Froggo/bigcry.png";

      let sad = new Audio("sounds/cry.mp3");
      sad.play();
      currentlyPlayingAudio = sad;
      break;

    case button.classList.contains("seduce"):
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      paragraph.innerHTML = "Ah, the sound of an active searching for a partner. Very alluring, don't you think? I'm an irresistable frog after all.";
      imaggio.src = "../Froggo/lovely.png";

      let seduce = new Audio("sounds/seducive.mp3");
      seduce.play();
      currentlyPlayingAudio = seduce;
      break;

    case button.classList.contains("curious"):
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      paragraph.innerHTML = "When I don't undestand what's going on, or showing concern, you may say I make this sound. It sounds like I'm worrying, isn't it?";
      imaggio.src = "../Froggo/dontunderstand.png";

      let cur = new Audio("sounds/curiousfrog.mp3");
      cur.play();
      currentlyPlayingAudio = cur;
      break;

    case button.classList.contains("sip"):
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      paragraph.innerHTML = "Just listen to it, it's like I'm having a dinner with sophisticated glasses and making Cin-Cin with a certain someone! We're the frogs of culture, didn't you know?";
      imaggio.src = "../Froggo/beeee.png";

      let sssip = new Audio("sounds/sipsound.mp3");
      sssip.play();
      currentlyPlayingAudio = sssip;
      break;

    case button.classList.contains("sus"):
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      paragraph.innerHTML = "Let's see what sound I make when I'm very suspicious of someone. Surely never happens, me, suspect somebody? Impossible, but let's hear it out.";
      imaggio.src = "../Froggo/nonono.png";
      clearTimeout(susTimeout);
      susTimeout = setTimeout(() => {
        paragraph.innerHTML = "What the hell?! That's some sort of a very sus frog playing outta there. Hope you know what kind of a frog it is and never meet it.";
        imaggio.src = "../Froggo/donotdoitpls.png";
      }, 5000);

      let sussy = new Audio("sounds/sussound.mp3");
      sussy.play();
      currentlyPlayingAudio = sussy;
      break;

    default:
      console.log("sus");
  }
}
