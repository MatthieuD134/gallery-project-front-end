import { BubbleButton } from "../ui/button";

export default function Artist() {
  return (
    <section id="artist" className="bg-background text-foreground">
      <div className="grid grid-cols-1  py-40 md:grid-cols-12">
        <div className="md:col-span-5"></div>
        <div className="flex justify-start md:col-span-7">
          <div className="max-w-3xl p-2">
            <h2 className="text-balance text-5xl uppercase">
              Présentation de l&apos;Artiste
            </h2>
            <p className="my-8 max-w-2xl text-lg">
              Découvrez l&apos;esprit créatif derrière ces mondes fantastiques!
              Notre artiste talentueux a une passion inébranlable pour la
              narration visuelle et l&apos;art. Avec plus de 20 ans
              d&apos;expérience, il a su captiver les cœurs et les esprits des
              fans du monde entier.
              <br />
              Son talent exceptionnel pour créer des personnages uniques et des
              mondes imaginatifs a fait de lui un artiste incontournable dans le
              domaine des comics et des jeux de société. Nous sommes fiers de
              collaborer avec lui pour donner vie à nos aventures incroyables.
              Découvrez-en plus sur l&apos;artiste derrière les Comics et les
              jeux qui vous passionnent tant !
            </p>
            <div className="flex justify-end">
              <BubbleButton
                className="w-fit uppercase"
                variant="tertiary"
                invertBubbleTriangle
              >
                En apprendre plus
              </BubbleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
