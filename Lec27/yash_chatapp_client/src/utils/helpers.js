export const GRADS = [
    "from-indigo-500 to-violet-500",
    "from-rose-500 to-orange-500",
    "from-emerald-500 to-teal-500",
    "from-sky-500 to-indigo-500",
    "from-fuchsia-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-lime-500 to-emerald-500",
    "from-cyan-500 to-blue-500",
];

export const cn = (...xs) => xs.filter(Boolean).join(" ");

export function initials(name = "?") {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((s) => s[0]?.toUpperCase())
        .join("") || "?";
}

export function hashColor(name) {
    // deterministic 0..7
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return h % 8;
}