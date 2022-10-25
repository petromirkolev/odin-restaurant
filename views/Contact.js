export default function contactView(content) {
  content.innerHTML = "";
  content.insertAdjacentHTML(
    "afterbegin",
    ` <section class="contact">
            <h1>Odin Restaurant - contact us out of this world</h1>
            <p>
              You literally cannot contact us because we are located on another
              planet so your only chance of contacting us is by visiting us
              yourself, which will be pretty damn hard.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              dicta esse architecto sit omnis aliquid, voluptas, exercitationem
              doloremque quis quasi autem voluptates deserunt, rem cumque velit
              iusto fugit nobis. Neque?
            </p>
          </section>`
  );
}
