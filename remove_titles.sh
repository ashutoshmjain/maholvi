#!/bin/bash
# This script removes the H1 title from the markdown files in the "Rasta Tau Mile" section.

cd src

files=(
    "jagtaPatthar.md"
    "jidd.md"
    "rastaTauMile.md"
    "humDono.md"
    "usPaar.md"
    "khushbu.md"
    "lunchTime.md"
    "bolKavi.md"
    "lekin.md"
    "usNe.md"
    "pyaas.md"
    "padYatra.md"
    "krishn.md"
    "aaBandh.md"
    "jangKiBaarish.md"
    "anantShunya.md"
    "raahGujarKeLiye.md"
    "aasPaas.md"
    "mujheKhatLikhna.md"
    "andhereSaybaan.md"
    "ekNaamAas.md"
    "kahaanMiloge.md"
    "alaav.md"
    "namumkin.md"
    "koiTauPataHoga.md"
    "yoonhiKhadaHoon.md"
    "kisLiye.md"
    "ekKabira.md"
    "nayaSaal.md"
    "tereNakshePaa.md"
    "tumAakhir.md"
    "lekinTumHo.md"
    "aagJaltiRahe.md"
    "meriMehboobaSi.md"
    "kabhi.md"
    "dharmDwaar.md"
    "kuchDoorYoohin.md"
    "kurukshetra.md"
    "chooneTak.md"
    "kisiModPe.md"
    "achchaHua.md"
    "maangeHueLamhe.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        # Use sed to delete the line containing the h1 tag
        sed -i '/<h1>.*<\/h1>/d' "$file"
        echo "  -> Removed H1 title."
    else
        echo "Skipping $file (not found)."
    fi
done

echo "Title removal complete."
