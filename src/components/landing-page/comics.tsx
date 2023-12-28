import { BubbleButton } from "../ui/button";

export default function Comics() {
  return (
    <section id="comics" className="bg-background text-foreground">
      <div className="grid grid-cols-1  py-40 md:grid-cols-12">
        <div className="md:col-span-5"></div>
        <div className="flex justify-start md:col-span-7">
          <div className="max-w-3xl p-2">
            <h2 className="text-balance text-5xl uppercase">
              Présentation des comics
            </h2>
            <p className="my-8 max-w-2xl text-lg">
              Découvrez nos Comics captivants ! Plongez dans des récits épiques,
              des personnages saisissants et des aventures incroyables qui vous
              tiendront en haleine à chaque page. Nos bandes dessinées sont un
              mélange passionnant d&apos;histoire alternative et de super-héros,
              qui vous emmèneront dans un voyage à travers le temps et
              l&apos;espace.
              <br /> Explorez des mondes fantastiques, des batailles épiques et
              des enjeux palpitants. Nos personnages sont vibrants et complexes,
              et vous vous attacherez à eux dès les premières pages.
              Rejoignez-nous dans cette aventure inoubliable !
            </p>
            <div className="flex justify-end">
              <BubbleButton
                className="w-fit uppercase"
                variant="tertiary"
                invertBubbleTriangle
              >
                Voir le projet!
              </BubbleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
