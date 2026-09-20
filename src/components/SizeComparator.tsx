"use client";

import { useMemo, useState } from "react";
import data from "@/data/starbucks-nutrition.json";

type Size = "tall" | "grande" | "venti";

const SIZE_LABEL: Record<Size, string> = { tall: "Tall", grande: "Grande", venti: "Venti" };
const SIZE_OZ: Record<Size, number> = {
  tall: data._meta.sizes_oz.tall,
  grande: data._meta.sizes_oz.grande,
  venti: data._meta.sizes_oz.venti_hot,
};
const SIZES: Size[] = ["tall", "grande", "venti"];

// Drinks with a full tall/grande/venti calorie row set in the dataset.
const drinks = data.drinks.filter((d) => {
  const sizesPresent = new Set(d.rows.map((r) => r.size));
  return SIZES.every((s) => sizesPresent.has(s));
});

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

export default function SizeComparator() {
  const [drinkId, setDrinkId] = useState(drinks[0].id);
  const drink = drinks.find((d) => d.id === drinkId)!;

  const rows = useMemo(() => {
    return SIZES.map((size) => {
      // Prefer the drink's most common milk for a consistent basis across sizes.
      const candidates = drink.rows.filter((r) => r.size === size);
      const row = candidates.find((r) => r.milk === "whole" || r.milk === "2percent" || r.milk === "none") ?? candidates[0];
      const oz = SIZE_OZ[size];
      return {
        size,
        calories: row.calories,
        oz,
        calPerOz: round1(row.calories / oz),
      };
    });
  }, [drink]);

  const maxCalories = Math.max(...rows.map((r) => r.calories), 1);

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-6 sm:p-8">
      <label className="block text-sm font-semibold mb-2">Drink</label>
      <select
        className="w-full rounded-lg border border-black/15 px-3 py-2 mb-6"
        value={drinkId}
        onChange={(e) => setDrinkId(e.target.value)}
      >
        {drinks.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>

      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.size}>
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-semibold">
                {SIZE_LABEL[r.size]} <span className="text-black/50 font-normal text-sm">({r.oz} oz)</span>
              </span>
              <span className="text-sm text-black/60">
                {r.calories} cal &middot; {r.calPerOz} cal/oz
              </span>
            </div>
            <div className="h-7 rounded bg-black/5 overflow-hidden">
              <div
                className="h-full rounded bg-[#00704A]"
                style={{ width: `${Math.max(6, (r.calories / maxCalories) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-black/5 px-4 py-3 text-sm text-black/70">
        <strong>Iced Venti holds 24 oz, not 20.</strong> This comparator uses
        hot-size ounces (Tall 12 / Grande 16 / Venti 20). Order the same drink
        iced and the Venti gets 4 extra ounces of ice and liquid, which is why
        an iced calories-per-ounce figure runs lower even when the calorie
        total is similar.
      </div>
    </div>
  );
}
