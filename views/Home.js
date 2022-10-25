export default function homeView(content) {
  content.innerHTML = "";
  content.insertAdjacentHTML(
    "afterbegin",
    `<section class="home">
        <h1>Odin Restaurant - taste out of this world</h1>
        <p>
        Our meals are prepared with love, care and ingridients that are
        out of this world. One can surely say that our burgers are Thor
        worthy.
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
