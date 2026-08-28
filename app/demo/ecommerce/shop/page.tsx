"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { UIChip } from "@/designs/data-display/chip/Component";
import { UICombobox } from "@/designs/inputs/combobox/Component";
import { UISlider } from "@/designs/inputs/slider/Component";
import { UIPagination } from "@/designs/navigation/pagination/Component";
import { UIEmpty } from "@/designs/data-display/empty/Component";
import { ProductCard } from "@/demos/ecommerce/components/ProductCard";
import { PRODUCTS, CATEGORIES, BRANDS, type ProductCategory } from "@/demos/ecommerce/data";
import { chipStyle, comboboxStyle, sliderStyle, paginationStyle, emptyStyle } from "@/demos/ecommerce/styles";

const PAGE_SIZE = 8;
const MAX_PRICE = 900;
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Top rated", value: "rating" },
];
const BRAND_OPTIONS = [{ label: "All brands", value: "all" }, ...BRANDS.map((b) => ({ label: b, value: b }))];

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopPageInner />
    </Suspense>
  );
}

function ShopPageInner() {
  const params = useSearchParams();
  const initialCategory = (params.get("category") as ProductCategory | null) ?? "all";

  const [category, setCategory] = useState<ProductCategory | "all">(initialCategory);
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.price <= maxPrice);
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (brand !== "all") list = list.filter((p) => p.brand === brand);

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, brand, sort, maxPrice]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function setCategoryAndResetPage(next: ProductCategory | "all") {
    setCategory(next);
    setPage(1);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold tracking-tight text-white">Shop all gear</h1>
        <p className="text-sm text-white/60">{filtered.length} product{filtered.length === 1 ? "" : "s"}</p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        <UIChip styleConfig={chipStyle} selected={category === "all"} onClick={() => setCategoryAndResetPage("all")}>All</UIChip>
        {CATEGORIES.map((c) => (
          <UIChip key={c.id} styleConfig={chipStyle} selected={category === c.id} onClick={() => setCategoryAndResetPage(c.id)}>
            {c.label}
          </UIChip>
        ))}
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-3">
        <div>
          <p className="mb-2 text-xs font-medium text-white/70">Brand</p>
          <UICombobox
            styleConfig={comboboxStyle}
            options={BRAND_OPTIONS}
            value={brand}
            onChange={(v) => { setBrand((v as string) ?? "all"); setPage(1); }}
            placeholder="All brands"
          />
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-white/70">Sort by</p>
          <UICombobox
            styleConfig={comboboxStyle}
            options={SORT_OPTIONS}
            value={sort}
            onChange={(v) => setSort((v as string) ?? "featured")}
            placeholder="Featured"
          />
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-white/70">Max price: ${maxPrice}</p>
          <UISlider
            styleConfig={sliderStyle}
            showValue={false}
            min={0}
            max={MAX_PRICE}
            step={10}
            value={[maxPrice]}
            onValueChange={(v) => { setMaxPrice((v as number[])[0]); setPage(1); }}
          />
        </div>
      </div>

      {pageItems.length === 0 ? (
        <UIEmpty
          styleConfig={emptyStyle}
          title="No gear matches those filters"
          description="Try a higher max price or a different brand."
        />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pageItems.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <UIPagination styleConfig={paginationStyle} page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
