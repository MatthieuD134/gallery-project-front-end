import { BubbleButton } from "../ui/button";

export default function BoardGames() {
  return (
    <section id="board-games" className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 py-40 md:grid-cols-12">
        <div className="flex justify-end md:col-span-7">
          <div className="flex max-w-3xl flex-col p-2 ">
            <h2 className="text-balance text-5xl uppercase">Jeux de société</h2>
            <p className="my-8 text-lg">
              Plongez dans l&apos;univers des Comics avec nos jeux de société
              passionnants ! Ces jeux vous transporteront dans le même univers
              que nos bandes dessinées, vous permettant de vivre des aventures
              uniques avec vos amis et votre famille.
              <br /> Chaque jeu est conçu avec soin et comporte des mécanismes
              de jeu captivants qui vous tiendront en haleine pendant des
              heures. Préparez-vous à affronter des défis, à prendre des
              décisions stratégiques et à vivre des moments de pure excitation.
              Découvrez nos jeux de société dès maintenant !
            </p>
            <BubbleButton className="w-fit uppercase" variant="secondary">
              Voir le projet!
            </BubbleButton>
          </div>
        </div>
        <div className="col-span-5"></div>
      </div>
    </section>
  );
}
