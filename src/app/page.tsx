import type { Metadata } from "next";
import SizeComparator from "@/components/SizeComparator";

export const metadata: Metadata = {
  title: "Tall vs Grande vs Venti | Starbucks Size Calorie Comparator",
  description:
    "See calories and calories-per-ounce for any Starbucks drink across Tall, Grande, and Venti — and why sizing up isn't always proportional.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <header className="mb-8">
        <p className="text-sm font-semibold text-[#00704A] uppercase tracking-wide">
          Size Comparator
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
          Tall vs Grande vs Venti
        </h1>
        <p className="mt-3 text-black/70">
          Pick a drink and compare all three sizes side by side — total
          calories and calories per ounce.
        </p>
      </header>

      <SizeComparator />

      <article className="prose prose-neutral max-w-none mt-14 space-y-5 text-[15px] leading-7">
        <p>
          Sizing up feels like the obvious lever for cutting or adding
          calories, but "bigger cup, more calories" isn't the whole story.
          Some sizes add calories fast, others barely move the number, and
          the reason has to do with what's actually filling the extra space
          in the cup. If you want the full breakdown for{" "}
          <a
            href="https://starbucks-calorie-calculators.us/"
            className="text-[#00704A] underline underline-offset-2 font-medium"
          >
            starbucks calories
          </a>{" "}
          across the entire menu, that's what a complete calculator is for —
          this page is just about the size lever specifically.
        </p>

        <h2 className="text-xl font-bold pt-2">What each size actually holds</h2>
        <p>
          A Tall is 12 ounces, a Grande is 16, and a hot Venti is 20 — each
          step up adds exactly 4 ounces of the same drink, which is why hot
          drinks scale up almost perfectly linearly. A latte that's 150
          calories at Tall is close to 200 at Grande and 250 at Venti,
          because the ratio of espresso to milk stays constant and there's
          simply more of both. The comparator above shows this clearly for
          milk-based drinks: the bars grow in roughly even steps, and the
          calories-per-ounce number barely moves between sizes.
        </p>
        <p>
          That's the baseline case. It's not what happens on every drink,
          which is exactly why calories-per-ounce is worth checking instead
          of just the size label.
        </p>

        <h2 className="text-xl font-bold pt-2">Where the jump is steepest</h2>
        <p>
          Drinks with a flavored syrup or a sauce base scale differently,
          because Starbucks doesn't always add syrup in the same 4-ounce
          proportion as everything else. A mocha or a heavily-flavored latte
          often adds a disproportionate pump or two at the larger sizes to
          keep the flavor from tasting diluted in a bigger cup, and that
          shows up as a rising calories-per-ounce figure rather than a flat
          one. Switch the comparator above to a drink like that and you'll
          see the bars grow faster than the ounces alone would predict — the
          Venti isn't just "more," it's more concentrated too.
        </p>
        <p>
          This is the detail that makes "just get a smaller size" imperfect
          advice on its own. For a straightforward latte, dropping from Venti
          to Grande saves a predictable, proportional amount. For a
          syrup-heavy specialty drink, the saving can be larger than the
          ounce difference alone would suggest, because you're also cutting
          a size where the recipe adds extra flavoring on top of just more
          liquid.
        </p>

        <h2 className="text-xl font-bold pt-2">The iced-size exception</h2>
        <p>
          Here's the fact that trips up more orders than anything else on
          this page: a hot Venti is 20 ounces, but an iced Venti is 24. The
          extra 4 ounces isn't extra drink — it's ice, which takes up cup
          space without adding calories. This means an iced Venti of the
          same drink often lands at a very similar calorie count to its hot
          counterpart, or even the same total, despite the bigger cup and
          the "biggest size" feeling like it should mean the most calories.
        </p>
        <p>
          It also means the calories-per-ounce comparison shifts once you
          switch temperature: since the liquid amount doesn't change much
          between a hot Grande and an iced Grande equivalent, but the cup
          size sometimes does, per-ounce figures for iced drinks can look
          lighter even when the drink itself is nearly identical. This isn't
          a trick or a marketing gimmick — it's just what ice does to a
          fixed cup size — but it's exactly the kind of detail that a size
          label alone doesn't tell you, and exactly why the comparator above
          separates calories from ounces instead of only showing one number.
        </p>

        <h2 className="text-xl font-bold pt-2">Where this tool stops</h2>
        <p>
          This page only compares standard sizes on standard builds — it
          doesn't account for extra syrup, milk swaps, or any other
          modification stacked on top.{" "}
          <a
            href="#"
            data-chain-target="05-gitlab-pages-keto-finder"
            className="text-[#00704A] underline underline-offset-2 font-medium"
          >
            Planning ahead helps
          </a>{" "}
          more than reacting at the register does, and knowing which size is
          actually proportional for your drink is the first decision, before
          any of the smaller modifications even come up.
        </p>
      </article>
    </main>
  );
}
