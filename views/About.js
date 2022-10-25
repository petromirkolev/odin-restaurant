export default function aboutView(content) {
  content.innerHTML = "";
  content.insertAdjacentHTML(
    "afterbegin",
    `<section class="about">
            <h1>Odin Restaurant - about us out of this world</h1>
            <p>
              Founded in more-than-you-can-count years before you were born, we
              were serving tasty burgers to the gods of the universe.
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
