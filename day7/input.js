const inputTest = [
  {
    color: "light red",
    contain: [
      { count: 1, color: "bright white" },
      { count: 2, color: "muted yellow" },
    ],
  },
  {
    color: "dark orange",
    contain: [
      { count: 3, color: "bright white" },
      { count: 4, color: "muted yellow" },
    ],
  },
  { color: "bright white", contain: [{ count: 1, color: "shiny gold" }] },
  {
    color: "muted yellow",
    contain: [
      { count: 2, color: "shiny gold" },
      { count: 9, color: "faded blue" },
    ],
  },
  {
    color: "shiny gold",
    contain: [
      { count: 1, color: "dark olive" },
      { count: 2, color: "vibrant plum" },
    ],
  },
  {
    color: "dark olive",
    contain: [
      { count: 3, color: "faded blue" },
      { count: 4, color: "dotted black" },
    ],
  },
  {
    color: "vibrant plum",
    contain: [
      { count: 5, color: "faded blue" },
      { count: 6, color: "dotted black" },
    ],
  },
  { color: "faded blue", contain: [] },
  { color: "dotted black", contain: [] },
];

const input = [
  {
    color: "posh teal",
    contain: [
      { count: 2, color: "faded coral" },
      { count: 3, color: "striped crimson" },
      { count: 1, color: "faded red" },
    ],
  },
  {
    color: "mirrored chartreuse",
    contain: [
      { count: 3, color: "clear beige" },
      { count: 3, color: "shiny silver" },
      { count: 3, color: "bright green" },
    ],
  },
  { color: "dotted red", contain: [{ count: 4, color: "light chartreuse" }] },
  {
    color: "faded chartreuse",
    contain: [
      { count: 1, color: "striped black" },
      { count: 1, color: "dim coral" },
      { count: 5, color: "mirrored maroon" },
    ],
  },
  {
    color: "bright teal",
    contain: [
      { count: 3, color: "light black" },
      { count: 4, color: "striped fuchsia" },
      { count: 1, color: "dark chartreuse" },
    ],
  },
  {
    color: "dull orange",
    contain: [
      { count: 5, color: "striped green" },
      { count: 3, color: "plaid plum" },
      { count: 3, color: "pale gray" },
    ],
  },
  {
    color: "dotted tomato",
    contain: [
      { count: 5, color: "plaid blue" },
      { count: 2, color: "dull maroon" },
      { count: 1, color: "mirrored maroon" },
      { count: 3, color: "posh brown" },
    ],
  },
  {
    color: "drab tan",
    contain: [
      { count: 1, color: "striped chartreuse" },
      { count: 5, color: "dull lavender" },
    ],
  },
  {
    color: "mirrored indigo",
    contain: [
      { count: 3, color: "mirrored fuchsia" },
      { count: 2, color: "striped green" },
    ],
  },
  {
    color: "bright white",
    contain: [
      { count: 2, color: "dark green" },
      { count: 4, color: "bright yellow" },
    ],
  },
  {
    color: "dotted cyan",
    contain: [
      { count: 1, color: "posh orange" },
      { count: 2, color: "faded white" },
    ],
  },
  { color: "vibrant orange", contain: [{ count: 1, color: "faded silver" }] },
  {
    color: "plaid lime",
    contain: [
      { count: 4, color: "shiny olive" },
      { count: 5, color: "dim olive" },
      { count: 1, color: "dotted gray" },
      { count: 2, color: "clear black" },
    ],
  },
  {
    color: "pale green",
    contain: [
      { count: 2, color: "plaid silver" },
      { count: 5, color: "dark blue" },
      { count: 1, color: "muted blue" },
      { count: 3, color: "posh white" },
    ],
  },
  {
    color: "dotted brown",
    contain: [
      { count: 3, color: "dark bronze" },
      { count: 5, color: "posh fuchsia" },
      { count: 3, color: "plaid cyan" },
    ],
  },
  {
    color: "muted yellow",
    contain: [
      { count: 2, color: "vibrant fuchsia" },
      { count: 4, color: "striped brown" },
      { count: 3, color: "muted tan" },
      { count: 1, color: "shiny plum" },
    ],
  },
  {
    color: "light crimson",
    contain: [
      { count: 3, color: "bright lavender" },
      { count: 1, color: "shiny olive" },
    ],
  },
  {
    color: "striped black",
    contain: [
      { count: 2, color: "drab aqua" },
      { count: 1, color: "clear black" },
      { count: 5, color: "mirrored teal" },
      { count: 3, color: "dark chartreuse" },
    ],
  },
  { color: "faded olive", contain: [{ count: 2, color: "drab aqua" }] },
  { color: "clear black", contain: [] },
  { color: "dark coral", contain: [{ count: 4, color: "drab magenta" }] },
  {
    color: "striped brown",
    contain: [
      { count: 1, color: "bright lavender" },
      { count: 1, color: "wavy lime" },
      { count: 2, color: "dark chartreuse" },
      { count: 2, color: "dim aqua" },
    ],
  },
  {
    color: "dull blue",
    contain: [
      { count: 5, color: "plaid purple" },
      { count: 1, color: "drab chartreuse" },
    ],
  },
  {
    color: "dark indigo",
    contain: [
      { count: 5, color: "vibrant white" },
      { count: 3, color: "bright lavender" },
      { count: 1, color: "bright tan" },
      { count: 4, color: "drab aqua" },
    ],
  },
  { color: "shiny tomato", contain: [{ count: 1, color: "dark chartreuse" }] },
  {
    color: "plaid maroon",
    contain: [
      { count: 5, color: "striped black" },
      { count: 5, color: "drab green" },
    ],
  },
  {
    color: "plaid brown",
    contain: [
      { count: 5, color: "plaid indigo" },
      { count: 5, color: "shiny gray" },
    ],
  },
  { color: "dark yellow", contain: [{ count: 2, color: "vibrant cyan" }] },
  { color: "bright maroon", contain: [{ count: 4, color: "shiny beige" }] },
  {
    color: "muted maroon",
    contain: [
      { count: 3, color: "striped bronze" },
      { count: 4, color: "clear gold" },
      { count: 1, color: "light red" },
    ],
  },
  {
    color: "plaid purple",
    contain: [
      { count: 1, color: "faded magenta" },
      { count: 5, color: "dotted turquoise" },
    ],
  },
  {
    color: "wavy chartreuse",
    contain: [
      { count: 2, color: "clear purple" },
      { count: 2, color: "drab green" },
      { count: 3, color: "wavy maroon" },
    ],
  },
  {
    color: "posh indigo",
    contain: [
      { count: 3, color: "striped crimson" },
      { count: 5, color: "mirrored maroon" },
      { count: 1, color: "mirrored crimson" },
      { count: 2, color: "drab orange" },
    ],
  },
  { color: "drab black", contain: [{ count: 1, color: "drab plum" }] },
  {
    color: "striped gray",
    contain: [
      { count: 5, color: "shiny teal" },
      { count: 2, color: "vibrant magenta" },
    ],
  },
  {
    color: "light yellow",
    contain: [
      { count: 4, color: "clear black" },
      { count: 2, color: "dim olive" },
      { count: 5, color: "wavy lavender" },
      { count: 2, color: "pale chartreuse" },
    ],
  },
  {
    color: "faded tomato",
    contain: [
      { count: 3, color: "dark aqua" },
      { count: 3, color: "pale turquoise" },
      { count: 4, color: "pale purple" },
      { count: 3, color: "posh plum" },
    ],
  },
  {
    color: "posh crimson",
    contain: [
      { count: 1, color: "drab green" },
      { count: 3, color: "dim aqua" },
    ],
  },
  { color: "muted tomato", contain: [{ count: 1, color: "dim orange" }] },
  { color: "bright indigo", contain: [{ count: 1, color: "posh brown" }] },
  {
    color: "dotted silver",
    contain: [
      { count: 4, color: "vibrant teal" },
      { count: 3, color: "wavy violet" },
      { count: 4, color: "dark black" },
      { count: 3, color: "dotted orange" },
    ],
  },
  {
    color: "dark fuchsia",
    contain: [
      { count: 3, color: "vibrant salmon" },
      { count: 3, color: "dotted gray" },
      { count: 2, color: "dull chartreuse" },
    ],
  },
  {
    color: "dull indigo",
    contain: [
      { count: 5, color: "dark gold" },
      { count: 1, color: "light crimson" },
      { count: 2, color: "light bronze" },
      { count: 5, color: "vibrant chartreuse" },
    ],
  },
  {
    color: "light gold",
    contain: [
      { count: 1, color: "plaid indigo" },
      { count: 1, color: "mirrored crimson" },
      { count: 1, color: "dull indigo" },
    ],
  },
  {
    color: "dark cyan",
    contain: [
      { count: 2, color: "dull brown" },
      { count: 5, color: "bright fuchsia" },
      { count: 3, color: "striped purple" },
    ],
  },
  {
    color: "posh chartreuse",
    contain: [
      { count: 1, color: "light gray" },
      { count: 5, color: "wavy tomato" },
    ],
  },
  {
    color: "bright gold",
    contain: [
      { count: 1, color: "clear teal" },
      { count: 1, color: "dim purple" },
      { count: 5, color: "striped bronze" },
    ],
  },
  {
    color: "striped magenta",
    contain: [
      { count: 5, color: "vibrant chartreuse" },
      { count: 3, color: "wavy olive" },
      { count: 5, color: "mirrored orange" },
    ],
  },
  {
    color: "mirrored gold",
    contain: [
      { count: 2, color: "striped fuchsia" },
      { count: 5, color: "wavy yellow" },
      { count: 5, color: "dull lime" },
    ],
  },
  { color: "dark chartreuse", contain: [] },
  {
    color: "dim bronze",
    contain: [
      { count: 3, color: "dim coral" },
      { count: 1, color: "light plum" },
      { count: 1, color: "posh orange" },
    ],
  },
  {
    color: "dim coral",
    contain: [
      { count: 3, color: "shiny teal" },
      { count: 5, color: "plaid bronze" },
      { count: 1, color: "vibrant magenta" },
      { count: 5, color: "faded yellow" },
    ],
  },
  {
    color: "bright lavender",
    contain: [
      { count: 4, color: "bright indigo" },
      { count: 4, color: "faded yellow" },
      { count: 5, color: "posh black" },
    ],
  },
  {
    color: "posh cyan",
    contain: [
      { count: 1, color: "dotted violet" },
      { count: 1, color: "shiny violet" },
      { count: 2, color: "dull chartreuse" },
      { count: 2, color: "wavy turquoise" },
    ],
  },
  {
    color: "wavy lavender",
    contain: [
      { count: 2, color: "dim fuchsia" },
      { count: 1, color: "dotted red" },
      { count: 5, color: "clear maroon" },
      { count: 1, color: "dull lime" },
    ],
  },
  {
    color: "vibrant salmon",
    contain: [
      { count: 4, color: "posh indigo" },
      { count: 2, color: "faded tomato" },
    ],
  },
  {
    color: "clear gray",
    contain: [
      { count: 5, color: "dim olive" },
      { count: 1, color: "striped turquoise" },
      { count: 4, color: "striped tan" },
      { count: 4, color: "plaid lime" },
    ],
  },
  {
    color: "bright cyan",
    contain: [
      { count: 1, color: "pale turquoise" },
      { count: 4, color: "vibrant white" },
      { count: 4, color: "muted gray" },
      { count: 2, color: "clear orange" },
    ],
  },
  {
    color: "posh purple",
    contain: [
      { count: 1, color: "striped tan" },
      { count: 1, color: "dim aqua" },
      { count: 4, color: "light bronze" },
      { count: 1, color: "bright chartreuse" },
    ],
  },
  { color: "dim yellow", contain: [{ count: 1, color: "posh lavender" }] },
  {
    color: "dim blue",
    contain: [
      { count: 4, color: "light indigo" },
      { count: 5, color: "shiny fuchsia" },
      { count: 5, color: "drab fuchsia" },
      { count: 5, color: "dark purple" },
    ],
  },
  {
    color: "wavy cyan",
    contain: [
      { count: 3, color: "clear beige" },
      { count: 4, color: "striped blue" },
      { count: 2, color: "faded coral" },
    ],
  },
  {
    color: "mirrored orange",
    contain: [
      { count: 5, color: "dark bronze" },
      { count: 3, color: "striped blue" },
      { count: 2, color: "posh orange" },
    ],
  },
  {
    color: "muted orange",
    contain: [
      { count: 5, color: "dotted violet" },
      { count: 5, color: "bright violet" },
      { count: 2, color: "vibrant salmon" },
    ],
  },
  {
    color: "vibrant coral",
    contain: [
      { count: 5, color: "bright cyan" },
      { count: 5, color: "shiny indigo" },
      { count: 2, color: "bright bronze" },
    ],
  },
  {
    color: "bright gray",
    contain: [
      { count: 1, color: "clear red" },
      { count: 5, color: "dull orange" },
      { count: 4, color: "bright cyan" },
    ],
  },
  { color: "muted bronze", contain: [{ count: 4, color: "dim lavender" }] },
  {
    color: "shiny blue",
    contain: [
      { count: 2, color: "dim chartreuse" },
      { count: 3, color: "muted beige" },
      { count: 5, color: "mirrored plum" },
    ],
  },
  {
    color: "posh bronze",
    contain: [
      { count: 3, color: "dull purple" },
      { count: 4, color: "wavy magenta" },
    ],
  },
  {
    color: "faded magenta",
    contain: [
      { count: 5, color: "clear tomato" },
      { count: 5, color: "dull plum" },
      { count: 4, color: "light red" },
    ],
  },
  {
    color: "posh tan",
    contain: [
      { count: 3, color: "clear olive" },
      { count: 4, color: "clear lavender" },
    ],
  },
  { color: "muted teal", contain: [{ count: 1, color: "striped magenta" }] },
  {
    color: "dull brown",
    contain: [
      { count: 2, color: "drab black" },
      { count: 3, color: "striped bronze" },
    ],
  },
  {
    color: "shiny white",
    contain: [
      { count: 3, color: "faded blue" },
      { count: 3, color: "dotted salmon" },
      { count: 2, color: "drab black" },
    ],
  },
  {
    color: "wavy red",
    contain: [
      { count: 4, color: "vibrant magenta" },
      { count: 3, color: "muted green" },
      { count: 4, color: "mirrored teal" },
    ],
  },
  {
    color: "dim silver",
    contain: [
      { count: 3, color: "striped purple" },
      { count: 5, color: "drab violet" },
      { count: 2, color: "striped bronze" },
      { count: 3, color: "wavy green" },
    ],
  },
  {
    color: "dull magenta",
    contain: [
      { count: 1, color: "dim crimson" },
      { count: 1, color: "light aqua" },
    ],
  },
  {
    color: "dull plum",
    contain: [
      { count: 5, color: "dim indigo" },
      { count: 2, color: "dotted red" },
    ],
  },
  {
    color: "mirrored lime",
    contain: [
      { count: 3, color: "bright tan" },
      { count: 3, color: "bright orange" },
    ],
  },
  {
    color: "muted green",
    contain: [
      { count: 3, color: "faded yellow" },
      { count: 2, color: "drab maroon" },
      { count: 1, color: "dark chartreuse" },
      { count: 2, color: "mirrored teal" },
    ],
  },
  {
    color: "clear crimson",
    contain: [
      { count: 4, color: "posh fuchsia" },
      { count: 2, color: "dull aqua" },
      { count: 3, color: "faded tan" },
    ],
  },
  { color: "drab aqua", contain: [] },
  {
    color: "dull chartreuse",
    contain: [
      { count: 4, color: "dotted gray" },
      { count: 2, color: "dim red" },
      { count: 3, color: "dull yellow" },
    ],
  },
  { color: "posh aqua", contain: [{ count: 5, color: "striped orange" }] },
  {
    color: "dark blue",
    contain: [
      { count: 2, color: "dark gold" },
      { count: 2, color: "faded yellow" },
    ],
  },
  {
    color: "posh red",
    contain: [
      { count: 2, color: "mirrored brown" },
      { count: 4, color: "shiny orange" },
      { count: 4, color: "striped lavender" },
      { count: 5, color: "light turquoise" },
    ],
  },
  {
    color: "dim lime",
    contain: [
      { count: 1, color: "muted turquoise" },
      { count: 2, color: "posh gold" },
      { count: 2, color: "dull violet" },
      { count: 3, color: "dotted lavender" },
    ],
  },
  { color: "faded yellow", contain: [] },
  {
    color: "dark red",
    contain: [
      { count: 2, color: "posh beige" },
      { count: 3, color: "shiny tomato" },
      { count: 3, color: "light salmon" },
    ],
  },
  { color: "dull purple", contain: [{ count: 3, color: "bright red" }] },
  {
    color: "dark violet",
    contain: [
      { count: 4, color: "clear salmon" },
      { count: 2, color: "dark gold" },
      { count: 1, color: "dotted cyan" },
      { count: 3, color: "dim purple" },
    ],
  },
  {
    color: "muted indigo",
    contain: [
      { count: 5, color: "striped bronze" },
      { count: 4, color: "posh olive" },
      { count: 5, color: "striped purple" },
    ],
  },
  {
    color: "plaid crimson",
    contain: [
      { count: 1, color: "bright violet" },
      { count: 3, color: "bright red" },
      { count: 5, color: "clear orange" },
      { count: 2, color: "dark purple" },
    ],
  },
  { color: "muted silver", contain: [{ count: 1, color: "clear tomato" }] },
  { color: "dull black", contain: [{ count: 4, color: "striped gold" }] },
  {
    color: "faded red",
    contain: [
      { count: 1, color: "posh indigo" },
      { count: 2, color: "striped crimson" },
      { count: 3, color: "muted indigo" },
    ],
  },
  {
    color: "muted lime",
    contain: [
      { count: 5, color: "plaid lavender" },
      { count: 4, color: "dim fuchsia" },
    ],
  },
  {
    color: "mirrored crimson",
    contain: [
      { count: 4, color: "light bronze" },
      { count: 1, color: "wavy red" },
      { count: 4, color: "drab violet" },
      { count: 4, color: "faded white" },
    ],
  },
  { color: "posh gray", contain: [{ count: 3, color: "dim olive" }] },
  {
    color: "posh violet",
    contain: [
      { count: 4, color: "mirrored white" },
      { count: 4, color: "dim indigo" },
    ],
  },
  { color: "plaid black", contain: [{ count: 5, color: "bright purple" }] },
  {
    color: "vibrant indigo",
    contain: [
      { count: 3, color: "mirrored blue" },
      { count: 4, color: "dim teal" },
      { count: 2, color: "dim beige" },
      { count: 1, color: "light black" },
    ],
  },
  {
    color: "mirrored beige",
    contain: [
      { count: 3, color: "plaid tomato" },
      { count: 5, color: "faded black" },
      { count: 3, color: "vibrant aqua" },
      { count: 4, color: "striped coral" },
    ],
  },
  { color: "pale turquoise", contain: [{ count: 2, color: "faded beige" }] },
  {
    color: "striped tomato",
    contain: [
      { count: 5, color: "dull indigo" },
      { count: 2, color: "dull plum" },
    ],
  },
  {
    color: "muted black",
    contain: [
      { count: 3, color: "faded plum" },
      { count: 5, color: "vibrant tan" },
    ],
  },
  {
    color: "dark crimson",
    contain: [
      { count: 2, color: "muted black" },
      { count: 2, color: "faded gray" },
    ],
  },
  {
    color: "dark turquoise",
    contain: [
      { count: 3, color: "posh olive" },
      { count: 1, color: "striped crimson" },
    ],
  },
  {
    color: "faded crimson",
    contain: [
      { count: 1, color: "posh tomato" },
      { count: 2, color: "dotted tomato" },
      { count: 1, color: "shiny lime" },
    ],
  },
  { color: "mirrored yellow", contain: [{ count: 2, color: "wavy gold" }] },
  {
    color: "dull silver",
    contain: [
      { count: 5, color: "plaid blue" },
      { count: 4, color: "faded green" },
    ],
  },
  {
    color: "pale salmon",
    contain: [
      { count: 1, color: "clear fuchsia" },
      { count: 3, color: "muted white" },
      { count: 4, color: "pale violet" },
      { count: 2, color: "vibrant yellow" },
    ],
  },
  { color: "pale plum", contain: [{ count: 3, color: "faded green" }] },
  { color: "shiny turquoise", contain: [{ count: 4, color: "shiny maroon" }] },
  {
    color: "plaid magenta",
    contain: [
      { count: 5, color: "posh salmon" },
      { count: 4, color: "muted tan" },
      { count: 3, color: "light silver" },
    ],
  },
  {
    color: "mirrored black",
    contain: [
      { count: 1, color: "pale plum" },
      { count: 5, color: "wavy gold" },
      { count: 1, color: "mirrored magenta" },
      { count: 4, color: "clear lime" },
    ],
  },
  {
    color: "mirrored magenta",
    contain: [
      { count: 4, color: "clear beige" },
      { count: 2, color: "plaid indigo" },
      { count: 4, color: "faded coral" },
      { count: 2, color: "clear tomato" },
    ],
  },
  {
    color: "striped lime",
    contain: [
      { count: 5, color: "muted white" },
      { count: 4, color: "faded tan" },
      { count: 1, color: "dull plum" },
    ],
  },
  {
    color: "pale coral",
    contain: [
      { count: 2, color: "posh coral" },
      { count: 2, color: "mirrored turquoise" },
      { count: 4, color: "clear yellow" },
      { count: 4, color: "wavy teal" },
    ],
  },
  {
    color: "dotted gray",
    contain: [
      { count: 2, color: "drab aqua" },
      { count: 1, color: "faded coral" },
      { count: 3, color: "clear black" },
    ],
  },
  {
    color: "faded tan",
    contain: [
      { count: 1, color: "shiny salmon" },
      { count: 5, color: "drab plum" },
      { count: 2, color: "dotted lavender" },
      { count: 3, color: "shiny yellow" },
    ],
  },
  {
    color: "dull aqua",
    contain: [
      { count: 2, color: "faded black" },
      { count: 5, color: "bright indigo" },
    ],
  },
  {
    color: "dotted violet",
    contain: [
      { count: 2, color: "posh green" },
      { count: 3, color: "plaid lime" },
    ],
  },
  {
    color: "faded aqua",
    contain: [
      { count: 3, color: "clear gold" },
      { count: 3, color: "striped bronze" },
    ],
  },
  {
    color: "vibrant yellow",
    contain: [
      { count: 4, color: "pale magenta" },
      { count: 2, color: "pale black" },
    ],
  },
  {
    color: "posh silver",
    contain: [
      { count: 3, color: "shiny black" },
      { count: 2, color: "dull purple" },
      { count: 1, color: "light lime" },
      { count: 5, color: "muted silver" },
    ],
  },
  {
    color: "vibrant purple",
    contain: [
      { count: 5, color: "pale olive" },
      { count: 3, color: "muted bronze" },
    ],
  },
  {
    color: "drab orange",
    contain: [
      { count: 4, color: "dark aqua" },
      { count: 3, color: "posh black" },
      { count: 4, color: "shiny beige" },
    ],
  },
  {
    color: "clear green",
    contain: [
      { count: 1, color: "dark lime" },
      { count: 2, color: "bright orange" },
      { count: 2, color: "mirrored maroon" },
      { count: 3, color: "dark bronze" },
    ],
  },
  { color: "dark tomato", contain: [{ count: 2, color: "drab yellow" }] },
  {
    color: "clear blue",
    contain: [
      { count: 3, color: "pale bronze" },
      { count: 3, color: "drab aqua" },
      { count: 3, color: "striped tan" },
      { count: 1, color: "shiny tan" },
    ],
  },
  {
    color: "muted red",
    contain: [
      { count: 3, color: "dark olive" },
      { count: 3, color: "faded teal" },
    ],
  },
  {
    color: "wavy olive",
    contain: [
      { count: 5, color: "faded chartreuse" },
      { count: 2, color: "striped black" },
    ],
  },
  {
    color: "pale red",
    contain: [
      { count: 4, color: "bright orange" },
      { count: 5, color: "drab orange" },
      { count: 2, color: "striped brown" },
      { count: 2, color: "striped bronze" },
    ],
  },
  { color: "dim brown", contain: [{ count: 1, color: "posh purple" }] },
  {
    color: "dotted lavender",
    contain: [
      { count: 2, color: "bright chartreuse" },
      { count: 2, color: "pale gray" },
    ],
  },
  {
    color: "clear aqua",
    contain: [
      { count: 1, color: "vibrant plum" },
      { count: 5, color: "dark plum" },
    ],
  },
  { color: "wavy fuchsia", contain: [{ count: 1, color: "pale purple" }] },
  {
    color: "dim tomato",
    contain: [
      { count: 2, color: "faded red" },
      { count: 3, color: "clear teal" },
      { count: 4, color: "striped chartreuse" },
      { count: 4, color: "shiny green" },
    ],
  },
  { color: "striped maroon", contain: [{ count: 4, color: "posh coral" }] },
  {
    color: "bright yellow",
    contain: [
      { count: 4, color: "dark tomato" },
      { count: 3, color: "pale gold" },
      { count: 4, color: "dark gold" },
      { count: 5, color: "shiny tomato" },
    ],
  },
  { color: "pale maroon", contain: [{ count: 3, color: "posh cyan" }] },
  { color: "clear lime", contain: [{ count: 4, color: "faded coral" }] },
  {
    color: "light violet",
    contain: [
      { count: 4, color: "vibrant magenta" },
      { count: 3, color: "bright yellow" },
      { count: 3, color: "dull chartreuse" },
    ],
  },
  {
    color: "dotted maroon",
    contain: [
      { count: 5, color: "mirrored salmon" },
      { count: 1, color: "striped tomato" },
      { count: 5, color: "dim coral" },
    ],
  },
  {
    color: "pale violet",
    contain: [
      { count: 1, color: "dotted tan" },
      { count: 2, color: "wavy white" },
    ],
  },
  { color: "clear salmon", contain: [] },
  {
    color: "dotted tan",
    contain: [
      { count: 3, color: "posh beige" },
      { count: 4, color: "bright chartreuse" },
      { count: 5, color: "posh fuchsia" },
      { count: 2, color: "pale gray" },
    ],
  },
  {
    color: "vibrant tan",
    contain: [
      { count: 4, color: "dark plum" },
      { count: 3, color: "clear teal" },
      { count: 2, color: "faded yellow" },
      { count: 3, color: "light chartreuse" },
    ],
  },
  { color: "pale lime", contain: [{ count: 4, color: "muted crimson" }] },
  {
    color: "muted blue",
    contain: [
      { count: 2, color: "light salmon" },
      { count: 1, color: "bright aqua" },
    ],
  },
  {
    color: "plaid silver",
    contain: [
      { count: 5, color: "striped magenta" },
      { count: 2, color: "dull chartreuse" },
    ],
  },
  {
    color: "clear gold",
    contain: [
      { count: 5, color: "shiny gray" },
      { count: 2, color: "vibrant white" },
    ],
  },
  {
    color: "dim salmon",
    contain: [
      { count: 3, color: "striped olive" },
      { count: 1, color: "faded teal" },
      { count: 3, color: "posh gold" },
    ],
  },
  {
    color: "muted gold",
    contain: [
      { count: 5, color: "shiny lavender" },
      { count: 5, color: "bright orange" },
      { count: 3, color: "dark lime" },
      { count: 2, color: "dim blue" },
    ],
  },
  { color: "dotted orange", contain: [{ count: 4, color: "muted lavender" }] },
  {
    color: "plaid yellow",
    contain: [
      { count: 2, color: "posh green" },
      { count: 5, color: "faded white" },
      { count: 5, color: "plaid blue" },
    ],
  },
  {
    color: "posh yellow",
    contain: [
      { count: 2, color: "shiny lime" },
      { count: 2, color: "mirrored cyan" },
    ],
  },
  { color: "wavy lime", contain: [{ count: 3, color: "vibrant plum" }] },
  {
    color: "clear teal",
    contain: [
      { count: 3, color: "mirrored blue" },
      { count: 3, color: "posh maroon" },
      { count: 2, color: "muted cyan" },
      { count: 2, color: "drab aqua" },
    ],
  },
  {
    color: "faded maroon",
    contain: [
      { count: 1, color: "dull magenta" },
      { count: 3, color: "dull green" },
      { count: 3, color: "muted coral" },
      { count: 5, color: "pale beige" },
    ],
  },
  {
    color: "drab salmon",
    contain: [
      { count: 5, color: "faded tomato" },
      { count: 3, color: "clear green" },
    ],
  },
  {
    color: "pale orange",
    contain: [
      { count: 4, color: "clear orange" },
      { count: 4, color: "wavy fuchsia" },
      { count: 5, color: "clear cyan" },
      { count: 5, color: "dark red" },
    ],
  },
  {
    color: "clear indigo",
    contain: [
      { count: 1, color: "shiny gold" },
      { count: 2, color: "light aqua" },
      { count: 2, color: "bright orange" },
    ],
  },
  {
    color: "faded gold",
    contain: [
      { count: 1, color: "posh maroon" },
      { count: 3, color: "faded indigo" },
      { count: 5, color: "muted purple" },
      { count: 3, color: "wavy tomato" },
    ],
  },
  {
    color: "drab cyan",
    contain: [
      { count: 1, color: "wavy white" },
      { count: 3, color: "dotted turquoise" },
    ],
  },
  { color: "striped blue", contain: [{ count: 3, color: "shiny beige" }] },
  { color: "vibrant black", contain: [{ count: 3, color: "bright blue" }] },
  {
    color: "striped green",
    contain: [
      { count: 5, color: "shiny orange" },
      { count: 5, color: "muted tomato" },
      { count: 1, color: "clear teal" },
    ],
  },
  {
    color: "posh maroon",
    contain: [
      { count: 1, color: "striped purple" },
      { count: 3, color: "striped gray" },
      { count: 1, color: "dark chartreuse" },
      { count: 5, color: "vibrant magenta" },
    ],
  },
  {
    color: "dark beige",
    contain: [
      { count: 3, color: "drab fuchsia" },
      { count: 2, color: "mirrored cyan" },
      { count: 1, color: "striped crimson" },
    ],
  },
  { color: "wavy crimson", contain: [{ count: 1, color: "mirrored aqua" }] },
  {
    color: "striped gold",
    contain: [
      { count: 1, color: "vibrant tomato" },
      { count: 5, color: "faded aqua" },
      { count: 5, color: "plaid salmon" },
      { count: 3, color: "mirrored blue" },
    ],
  },
  {
    color: "dim plum",
    contain: [
      { count: 1, color: "posh orange" },
      { count: 4, color: "vibrant chartreuse" },
    ],
  },
  {
    color: "mirrored cyan",
    contain: [
      { count: 2, color: "vibrant tomato" },
      { count: 4, color: "clear black" },
      { count: 4, color: "striped gold" },
    ],
  },
  {
    color: "plaid lavender",
    contain: [
      { count: 4, color: "shiny lime" },
      { count: 4, color: "pale gold" },
      { count: 3, color: "posh teal" },
      { count: 1, color: "dull lavender" },
    ],
  },
  { color: "wavy magenta", contain: [{ count: 1, color: "dim red" }] },
  {
    color: "wavy bronze",
    contain: [
      { count: 4, color: "shiny bronze" },
      { count: 1, color: "drab turquoise" },
      { count: 5, color: "muted tan" },
      { count: 2, color: "dotted aqua" },
    ],
  },
  { color: "drab coral", contain: [{ count: 3, color: "dim lime" }] },
  {
    color: "dull teal",
    contain: [
      { count: 1, color: "vibrant aqua" },
      { count: 4, color: "wavy lavender" },
      { count: 1, color: "dark purple" },
      { count: 4, color: "dark violet" },
    ],
  },
  {
    color: "faded beige",
    contain: [
      { count: 5, color: "plaid indigo" },
      { count: 5, color: "clear beige" },
      { count: 5, color: "dull violet" },
    ],
  },
  { color: "mirrored gray", contain: [{ count: 3, color: "light bronze" }] },
  {
    color: "dark green",
    contain: [
      { count: 1, color: "dark violet" },
      { count: 1, color: "posh black" },
      { count: 4, color: "posh fuchsia" },
      { count: 1, color: "shiny olive" },
    ],
  },
  { color: "posh coral", contain: [{ count: 1, color: "striped purple" }] },
  { color: "muted salmon", contain: [{ count: 1, color: "bright orange" }] },
  { color: "mirrored teal", contain: [] },
  {
    color: "dotted turquoise",
    contain: [
      { count: 5, color: "dark tomato" },
      { count: 1, color: "plaid plum" },
      { count: 2, color: "wavy gold" },
    ],
  },
  {
    color: "wavy tan",
    contain: [
      { count: 3, color: "dim cyan" },
      { count: 2, color: "dim maroon" },
    ],
  },
  {
    color: "light tomato",
    contain: [
      { count: 5, color: "muted cyan" },
      { count: 2, color: "dotted green" },
      { count: 4, color: "dark aqua" },
    ],
  },
  {
    color: "mirrored green",
    contain: [
      { count: 5, color: "light tomato" },
      { count: 3, color: "dim magenta" },
      { count: 4, color: "drab maroon" },
    ],
  },
  {
    color: "bright black",
    contain: [
      { count: 2, color: "mirrored violet" },
      { count: 3, color: "dull brown" },
      { count: 5, color: "clear gray" },
      { count: 3, color: "dull chartreuse" },
    ],
  },
  {
    color: "bright silver",
    contain: [
      { count: 1, color: "dotted brown" },
      { count: 4, color: "vibrant yellow" },
    ],
  },
  {
    color: "pale black",
    contain: [
      { count: 5, color: "drab magenta" },
      { count: 5, color: "vibrant magenta" },
    ],
  },
  {
    color: "wavy indigo",
    contain: [
      { count: 2, color: "dotted green" },
      { count: 1, color: "shiny orange" },
      { count: 1, color: "dark lime" },
      { count: 1, color: "mirrored blue" },
    ],
  },
  {
    color: "shiny fuchsia",
    contain: [
      { count: 1, color: "muted lavender" },
      { count: 5, color: "posh beige" },
      { count: 3, color: "clear salmon" },
      { count: 3, color: "posh brown" },
    ],
  },
  {
    color: "muted white",
    contain: [
      { count: 4, color: "posh orange" },
      { count: 4, color: "clear orange" },
    ],
  },
  {
    color: "shiny lavender",
    contain: [
      { count: 3, color: "wavy olive" },
      { count: 3, color: "dull crimson" },
    ],
  },
  { color: "clear violet", contain: [{ count: 5, color: "shiny plum" }] },
  {
    color: "striped purple",
    contain: [
      { count: 2, color: "drab maroon" },
      { count: 2, color: "vibrant magenta" },
      { count: 3, color: "shiny teal" },
    ],
  },
  { color: "clear tomato", contain: [{ count: 3, color: "posh brown" }] },
  {
    color: "wavy purple",
    contain: [
      { count: 4, color: "striped indigo" },
      { count: 5, color: "striped crimson" },
    ],
  },
  {
    color: "dark teal",
    contain: [
      { count: 2, color: "dim coral" },
      { count: 5, color: "dim fuchsia" },
    ],
  },
  { color: "drab blue", contain: [{ count: 5, color: "dim indigo" }] },
  {
    color: "faded gray",
    contain: [
      { count: 5, color: "dull brown" },
      { count: 5, color: "mirrored brown" },
      { count: 3, color: "shiny magenta" },
      { count: 5, color: "dotted violet" },
    ],
  },
  {
    color: "faded violet",
    contain: [
      { count: 3, color: "wavy purple" },
      { count: 2, color: "light maroon" },
    ],
  },
  {
    color: "pale brown",
    contain: [
      { count: 5, color: "clear red" },
      { count: 2, color: "plaid chartreuse" },
    ],
  },
  {
    color: "faded white",
    contain: [
      { count: 2, color: "drab maroon" },
      { count: 2, color: "shiny tomato" },
    ],
  },
  { color: "posh brown", contain: [] },
  {
    color: "dotted olive",
    contain: [
      { count: 3, color: "pale teal" },
      { count: 1, color: "bright purple" },
    ],
  },
  {
    color: "mirrored fuchsia",
    contain: [
      { count: 1, color: "dull maroon" },
      { count: 5, color: "dull green" },
    ],
  },
  {
    color: "dark orange",
    contain: [
      { count: 5, color: "striped lavender" },
      { count: 1, color: "posh black" },
      { count: 1, color: "dark purple" },
    ],
  },
  {
    color: "pale fuchsia",
    contain: [
      { count: 5, color: "plaid fuchsia" },
      { count: 1, color: "dull lime" },
      { count: 4, color: "pale bronze" },
      { count: 2, color: "bright cyan" },
    ],
  },
  { color: "light brown", contain: [{ count: 5, color: "vibrant bronze" }] },
  { color: "faded bronze", contain: [{ count: 4, color: "dim silver" }] },
  {
    color: "vibrant chartreuse",
    contain: [
      { count: 5, color: "shiny gray" },
      { count: 5, color: "muted lavender" },
      { count: 3, color: "posh fuchsia" },
    ],
  },
  {
    color: "dim teal",
    contain: [
      { count: 4, color: "clear red" },
      { count: 2, color: "faded silver" },
      { count: 1, color: "muted blue" },
      { count: 5, color: "wavy yellow" },
    ],
  },
  {
    color: "dotted chartreuse",
    contain: [
      { count: 4, color: "striped fuchsia" },
      { count: 3, color: "bright lavender" },
      { count: 3, color: "vibrant blue" },
      { count: 4, color: "mirrored maroon" },
    ],
  },
  { color: "dark purple", contain: [{ count: 2, color: "posh black" }] },
  { color: "mirrored olive", contain: [{ count: 3, color: "dotted brown" }] },
  {
    color: "shiny yellow",
    contain: [
      { count: 4, color: "mirrored maroon" },
      { count: 3, color: "dark plum" },
      { count: 5, color: "muted green" },
      { count: 2, color: "clear aqua" },
    ],
  },
  {
    color: "drab turquoise",
    contain: [
      { count: 3, color: "dim coral" },
      { count: 3, color: "dark chartreuse" },
    ],
  },
  {
    color: "striped orange",
    contain: [
      { count: 4, color: "striped lime" },
      { count: 1, color: "dim tan" },
      { count: 3, color: "dull yellow" },
      { count: 2, color: "vibrant cyan" },
    ],
  },
  { color: "dull turquoise", contain: [{ count: 3, color: "clear purple" }] },
  {
    color: "muted fuchsia",
    contain: [
      { count: 2, color: "wavy tomato" },
      { count: 5, color: "dark maroon" },
      { count: 3, color: "muted tomato" },
      { count: 4, color: "vibrant plum" },
    ],
  },
  { color: "faded coral", contain: [] },
  {
    color: "bright red",
    contain: [
      { count: 1, color: "dull crimson" },
      { count: 5, color: "shiny teal" },
      { count: 4, color: "shiny gold" },
    ],
  },
  {
    color: "bright purple",
    contain: [
      { count: 4, color: "plaid indigo" },
      { count: 5, color: "vibrant maroon" },
      { count: 2, color: "dim red" },
    ],
  },
  {
    color: "light plum",
    contain: [
      { count: 3, color: "drab aqua" },
      { count: 5, color: "shiny tomato" },
      { count: 4, color: "drab violet" },
    ],
  },
  {
    color: "faded orange",
    contain: [
      { count: 2, color: "shiny teal" },
      { count: 5, color: "striped gray" },
      { count: 2, color: "dull lavender" },
      { count: 4, color: "bright green" },
    ],
  },
  {
    color: "drab white",
    contain: [
      { count: 1, color: "bright orange" },
      { count: 5, color: "drab lime" },
      { count: 5, color: "drab plum" },
    ],
  },
  { color: "posh lime", contain: [{ count: 3, color: "faded chartreuse" }] },
  {
    color: "vibrant bronze",
    contain: [
      { count: 3, color: "dim green" },
      { count: 1, color: "clear gold" },
      { count: 4, color: "striped bronze" },
      { count: 4, color: "pale chartreuse" },
    ],
  },
  {
    color: "dark olive",
    contain: [
      { count: 5, color: "dim purple" },
      { count: 5, color: "mirrored maroon" },
    ],
  },
  {
    color: "striped plum",
    contain: [
      { count: 1, color: "posh brown" },
      { count: 2, color: "muted cyan" },
      { count: 3, color: "faded yellow" },
      { count: 2, color: "wavy plum" },
    ],
  },
  {
    color: "plaid tan",
    contain: [
      { count: 2, color: "mirrored lavender" },
      { count: 2, color: "striped silver" },
    ],
  },
  {
    color: "pale chartreuse",
    contain: [
      { count: 5, color: "clear beige" },
      { count: 5, color: "clear maroon" },
      { count: 4, color: "wavy red" },
      { count: 5, color: "dotted tan" },
    ],
  },
  { color: "vibrant teal", contain: [{ count: 3, color: "bright violet" }] },
  {
    color: "vibrant silver",
    contain: [
      { count: 1, color: "shiny teal" },
      { count: 2, color: "pale purple" },
      { count: 5, color: "dark lime" },
    ],
  },
  {
    color: "wavy orange",
    contain: [
      { count: 5, color: "bright bronze" },
      { count: 4, color: "vibrant aqua" },
      { count: 3, color: "pale indigo" },
      { count: 3, color: "muted beige" },
    ],
  },
  {
    color: "plaid tomato",
    contain: [
      { count: 3, color: "faded teal" },
      { count: 1, color: "dull green" },
    ],
  },
  {
    color: "muted purple",
    contain: [
      { count: 1, color: "muted lavender" },
      { count: 5, color: "light black" },
    ],
  },
  {
    color: "light red",
    contain: [
      { count: 3, color: "posh green" },
      { count: 2, color: "striped purple" },
      { count: 1, color: "pale purple" },
    ],
  },
  {
    color: "shiny magenta",
    contain: [
      { count: 4, color: "muted silver" },
      { count: 3, color: "drab turquoise" },
      { count: 2, color: "pale turquoise" },
    ],
  },
  { color: "light tan", contain: [{ count: 5, color: "bright green" }] },
  {
    color: "clear fuchsia",
    contain: [
      { count: 5, color: "faded coral" },
      { count: 2, color: "drab plum" },
      { count: 2, color: "clear beige" },
      { count: 1, color: "pale teal" },
    ],
  },
  { color: "vibrant aqua", contain: [{ count: 3, color: "dim red" }] },
  { color: "posh tomato", contain: [{ count: 5, color: "wavy magenta" }] },
  {
    color: "drab plum",
    contain: [
      { count: 3, color: "clear salmon" },
      { count: 5, color: "mirrored teal" },
      { count: 4, color: "striped aqua" },
    ],
  },
  {
    color: "pale lavender",
    contain: [
      { count: 4, color: "clear black" },
      { count: 4, color: "wavy green" },
    ],
  },
  {
    color: "drab beige",
    contain: [
      { count: 3, color: "pale teal" },
      { count: 5, color: "mirrored aqua" },
      { count: 4, color: "posh beige" },
    ],
  },
  {
    color: "shiny aqua",
    contain: [
      { count: 3, color: "striped black" },
      { count: 4, color: "striped blue" },
      { count: 4, color: "light salmon" },
      { count: 5, color: "striped crimson" },
    ],
  },
  {
    color: "dull white",
    contain: [
      { count: 2, color: "faded brown" },
      { count: 3, color: "drab maroon" },
      { count: 5, color: "striped olive" },
      { count: 1, color: "bright fuchsia" },
    ],
  },
  { color: "vibrant gold", contain: [{ count: 5, color: "dotted aqua" }] },
  {
    color: "dim turquoise",
    contain: [
      { count: 2, color: "mirrored turquoise" },
      { count: 4, color: "dark tomato" },
      { count: 4, color: "clear lime" },
    ],
  },
  { color: "drab silver", contain: [{ count: 3, color: "drab plum" }] },
  {
    color: "plaid plum",
    contain: [
      { count: 3, color: "shiny gold" },
      { count: 1, color: "wavy red" },
      { count: 1, color: "plaid bronze" },
      { count: 5, color: "vibrant magenta" },
    ],
  },
  {
    color: "wavy gray",
    contain: [
      { count: 2, color: "dim plum" },
      { count: 4, color: "light red" },
      { count: 3, color: "wavy orange" },
      { count: 5, color: "muted indigo" },
    ],
  },
  {
    color: "mirrored plum",
    contain: [
      { count: 4, color: "dotted violet" },
      { count: 1, color: "dim maroon" },
    ],
  },
  {
    color: "muted crimson",
    contain: [
      { count: 4, color: "mirrored teal" },
      { count: 4, color: "faded yellow" },
      { count: 5, color: "striped aqua" },
    ],
  },
  {
    color: "clear plum",
    contain: [
      { count: 1, color: "dark indigo" },
      { count: 3, color: "shiny gold" },
      { count: 2, color: "dim gray" },
    ],
  },
  {
    color: "dull gray",
    contain: [
      { count: 5, color: "striped bronze" },
      { count: 5, color: "plaid magenta" },
      { count: 3, color: "muted orange" },
    ],
  },
  {
    color: "plaid violet",
    contain: [
      { count: 3, color: "dotted yellow" },
      { count: 1, color: "dotted aqua" },
      { count: 5, color: "clear orange" },
    ],
  },
  {
    color: "light beige",
    contain: [
      { count: 4, color: "dim tomato" },
      { count: 1, color: "pale yellow" },
      { count: 3, color: "faded beige" },
      { count: 3, color: "dim yellow" },
    ],
  },
  { color: "plaid olive", contain: [{ count: 5, color: "shiny tan" }] },
  { color: "faded fuchsia", contain: [{ count: 4, color: "wavy maroon" }] },
  { color: "bright crimson", contain: [{ count: 5, color: "bright orange" }] },
  { color: "drab chartreuse", contain: [{ count: 4, color: "drab red" }] },
  {
    color: "dotted plum",
    contain: [
      { count: 5, color: "striped blue" },
      { count: 5, color: "light gold" },
      { count: 4, color: "vibrant teal" },
    ],
  },
  {
    color: "muted plum",
    contain: [
      { count: 5, color: "faded white" },
      { count: 5, color: "striped brown" },
      { count: 1, color: "posh brown" },
      { count: 5, color: "drab maroon" },
    ],
  },
  {
    color: "bright turquoise",
    contain: [
      { count: 2, color: "dull indigo" },
      { count: 2, color: "mirrored tan" },
      { count: 5, color: "clear tomato" },
    ],
  },
  {
    color: "drab violet",
    contain: [
      { count: 3, color: "clear black" },
      { count: 2, color: "mirrored teal" },
      { count: 5, color: "faded yellow" },
      { count: 4, color: "vibrant magenta" },
    ],
  },
  { color: "dotted blue", contain: [{ count: 3, color: "posh black" }] },
  {
    color: "light silver",
    contain: [
      { count: 5, color: "bright tan" },
      { count: 1, color: "dull silver" },
      { count: 5, color: "posh magenta" },
      { count: 5, color: "pale chartreuse" },
    ],
  },
  {
    color: "drab indigo",
    contain: [
      { count: 1, color: "dark purple" },
      { count: 1, color: "pale magenta" },
    ],
  },
  {
    color: "pale teal",
    contain: [
      { count: 5, color: "striped black" },
      { count: 1, color: "faded cyan" },
    ],
  },
  {
    color: "shiny coral",
    contain: [
      { count: 1, color: "mirrored lavender" },
      { count: 5, color: "mirrored bronze" },
      { count: 1, color: "bright violet" },
    ],
  },
  {
    color: "shiny maroon",
    contain: [
      { count: 3, color: "mirrored teal" },
      { count: 4, color: "light bronze" },
      { count: 5, color: "plaid yellow" },
    ],
  },
  {
    color: "dim indigo",
    contain: [
      { count: 4, color: "clear salmon" },
      { count: 1, color: "pale gray" },
      { count: 5, color: "posh purple" },
    ],
  },
  {
    color: "dotted purple",
    contain: [
      { count: 5, color: "shiny tan" },
      { count: 4, color: "posh indigo" },
      { count: 2, color: "light maroon" },
      { count: 4, color: "plaid plum" },
    ],
  },
  {
    color: "pale indigo",
    contain: [
      { count: 2, color: "dark orange" },
      { count: 3, color: "bright chartreuse" },
      { count: 5, color: "pale purple" },
    ],
  },
  {
    color: "striped salmon",
    contain: [
      { count: 3, color: "drab red" },
      { count: 1, color: "light silver" },
    ],
  },
  {
    color: "dim tan",
    contain: [
      { count: 5, color: "muted silver" },
      { count: 5, color: "dull tomato" },
      { count: 2, color: "dull violet" },
    ],
  },
  {
    color: "striped cyan",
    contain: [
      { count: 3, color: "striped green" },
      { count: 4, color: "muted cyan" },
      { count: 5, color: "wavy beige" },
    ],
  },
  { color: "posh gold", contain: [{ count: 3, color: "dotted aqua" }] },
  { color: "drab magenta", contain: [{ count: 1, color: "dim olive" }] },
  { color: "dull maroon", contain: [{ count: 2, color: "dotted gray" }] },
  { color: "drab lavender", contain: [{ count: 2, color: "dark tomato" }] },
  {
    color: "drab gray",
    contain: [
      { count: 5, color: "faded plum" },
      { count: 2, color: "faded turquoise" },
      { count: 3, color: "shiny purple" },
    ],
  },
  {
    color: "drab bronze",
    contain: [
      { count: 3, color: "shiny indigo" },
      { count: 2, color: "dull silver" },
      { count: 1, color: "pale indigo" },
    ],
  },
  {
    color: "dark gold",
    contain: [
      { count: 1, color: "striped bronze" },
      { count: 3, color: "shiny gold" },
      { count: 4, color: "striped purple" },
      { count: 2, color: "wavy green" },
    ],
  },
  {
    color: "mirrored bronze",
    contain: [
      { count: 3, color: "clear maroon" },
      { count: 2, color: "striped plum" },
      { count: 1, color: "vibrant plum" },
      { count: 5, color: "mirrored aqua" },
    ],
  },
  { color: "clear purple", contain: [{ count: 2, color: "dim maroon" }] },
  { color: "bright blue", contain: [{ count: 1, color: "vibrant aqua" }] },
  {
    color: "striped tan",
    contain: [
      { count: 3, color: "clear beige" },
      { count: 5, color: "bright chartreuse" },
      { count: 5, color: "shiny beige" },
    ],
  },
  {
    color: "plaid blue",
    contain: [
      { count: 4, color: "wavy red" },
      { count: 3, color: "clear salmon" },
      { count: 2, color: "striped black" },
      { count: 2, color: "drab aqua" },
    ],
  },
  {
    color: "striped coral",
    contain: [
      { count: 2, color: "shiny aqua" },
      { count: 5, color: "light aqua" },
    ],
  },
  {
    color: "pale yellow",
    contain: [
      { count: 3, color: "clear aqua" },
      { count: 4, color: "shiny indigo" },
      { count: 2, color: "dim purple" },
    ],
  },
  {
    color: "wavy black",
    contain: [
      { count: 5, color: "light gray" },
      { count: 5, color: "dim green" },
      { count: 4, color: "muted cyan" },
    ],
  },
  {
    color: "shiny beige",
    contain: [
      { count: 5, color: "faded coral" },
      { count: 1, color: "muted cyan" },
      { count: 2, color: "dark aqua" },
      { count: 4, color: "posh black" },
    ],
  },
  {
    color: "mirrored red",
    contain: [
      { count: 3, color: "striped blue" },
      { count: 4, color: "bright yellow" },
    ],
  },
  { color: "plaid chartreuse", contain: [{ count: 5, color: "dotted coral" }] },
  {
    color: "dark white",
    contain: [
      { count: 3, color: "wavy white" },
      { count: 4, color: "bright violet" },
      { count: 5, color: "drab bronze" },
    ],
  },
  {
    color: "drab lime",
    contain: [
      { count: 4, color: "striped silver" },
      { count: 5, color: "dim black" },
      { count: 1, color: "posh teal" },
    ],
  },
  {
    color: "clear magenta",
    contain: [
      { count: 3, color: "dark tomato" },
      { count: 5, color: "drab silver" },
      { count: 2, color: "shiny indigo" },
      { count: 3, color: "mirrored silver" },
    ],
  },
  {
    color: "plaid white",
    contain: [
      { count: 5, color: "dotted green" },
      { count: 2, color: "light silver" },
      { count: 3, color: "plaid lavender" },
      { count: 1, color: "posh purple" },
    ],
  },
  { color: "shiny indigo", contain: [{ count: 2, color: "drab orange" }] },
  {
    color: "faded green",
    contain: [
      { count: 3, color: "muted cyan" },
      { count: 5, color: "posh orange" },
      { count: 3, color: "plaid plum" },
    ],
  },
  {
    color: "striped bronze",
    contain: [
      { count: 2, color: "light plum" },
      { count: 3, color: "shiny teal" },
      { count: 4, color: "posh black" },
    ],
  },
  {
    color: "pale olive",
    contain: [
      { count: 5, color: "striped gray" },
      { count: 3, color: "striped lime" },
    ],
  },
  {
    color: "dim orange",
    contain: [
      { count: 4, color: "mirrored maroon" },
      { count: 2, color: "mirrored teal" },
      { count: 4, color: "dim green" },
      { count: 2, color: "muted green" },
    ],
  },
  {
    color: "pale cyan",
    contain: [
      { count: 1, color: "light tomato" },
      { count: 2, color: "dotted tan" },
    ],
  },
  {
    color: "muted chartreuse",
    contain: [
      { count: 2, color: "dim coral" },
      { count: 3, color: "posh indigo" },
    ],
  },
  {
    color: "dull tan",
    contain: [
      { count: 1, color: "clear teal" },
      { count: 2, color: "dark blue" },
      { count: 1, color: "bright magenta" },
    ],
  },
  {
    color: "bright olive",
    contain: [
      { count: 3, color: "mirrored lavender" },
      { count: 4, color: "plaid bronze" },
    ],
  },
  {
    color: "dark maroon",
    contain: [
      { count: 1, color: "clear blue" },
      { count: 4, color: "dotted gray" },
    ],
  },
  {
    color: "plaid coral",
    contain: [
      { count: 4, color: "muted salmon" },
      { count: 3, color: "light teal" },
      { count: 4, color: "pale black" },
    ],
  },
  {
    color: "pale beige",
    contain: [
      { count: 5, color: "pale lavender" },
      { count: 1, color: "shiny lime" },
      { count: 3, color: "shiny yellow" },
      { count: 5, color: "striped purple" },
    ],
  },
  { color: "vibrant brown", contain: [{ count: 2, color: "drab yellow" }] },
  {
    color: "striped silver",
    contain: [
      { count: 3, color: "vibrant aqua" },
      { count: 1, color: "faded silver" },
    ],
  },
  { color: "drab gold", contain: [{ count: 1, color: "bright salmon" }] },
  { color: "vibrant red", contain: [{ count: 1, color: "bright red" }] },
  {
    color: "striped chartreuse",
    contain: [
      { count: 2, color: "faded chartreuse" },
      { count: 2, color: "striped tan" },
    ],
  },
  {
    color: "dotted yellow",
    contain: [
      { count: 3, color: "drab aqua" },
      { count: 3, color: "dark gold" },
      { count: 3, color: "shiny orange" },
    ],
  },
  {
    color: "dotted gold",
    contain: [
      { count: 2, color: "posh fuchsia" },
      { count: 3, color: "faded teal" },
      { count: 1, color: "pale black" },
      { count: 2, color: "clear indigo" },
    ],
  },
  {
    color: "dark bronze",
    contain: [
      { count: 2, color: "pale tomato" },
      { count: 5, color: "posh fuchsia" },
      { count: 5, color: "muted green" },
    ],
  },
  { color: "drab brown", contain: [{ count: 4, color: "dotted magenta" }] },
  {
    color: "dull bronze",
    contain: [
      { count: 1, color: "posh white" },
      { count: 2, color: "muted teal" },
      { count: 5, color: "vibrant tan" },
    ],
  },
  {
    color: "bright brown",
    contain: [
      { count: 3, color: "bright bronze" },
      { count: 2, color: "shiny tan" },
      { count: 3, color: "dull green" },
    ],
  },
  { color: "dotted green", contain: [{ count: 4, color: "dim green" }] },
  {
    color: "vibrant turquoise",
    contain: [
      { count: 1, color: "mirrored magenta" },
      { count: 2, color: "dark bronze" },
    ],
  },
  {
    color: "dim olive",
    contain: [
      { count: 3, color: "mirrored blue" },
      { count: 5, color: "drab maroon" },
      { count: 1, color: "clear lime" },
    ],
  },
  { color: "posh plum", contain: [{ count: 5, color: "pale indigo" }] },
  { color: "plaid bronze", contain: [{ count: 1, color: "plaid blue" }] },
  {
    color: "shiny brown",
    contain: [
      { count: 3, color: "shiny salmon" },
      { count: 1, color: "striped tan" },
      { count: 4, color: "clear aqua" },
    ],
  },
  {
    color: "clear olive",
    contain: [
      { count: 4, color: "bright aqua" },
      { count: 1, color: "clear maroon" },
      { count: 4, color: "mirrored maroon" },
    ],
  },
  { color: "shiny black", contain: [{ count: 3, color: "pale violet" }] },
  {
    color: "dotted lime",
    contain: [
      { count: 5, color: "posh purple" },
      { count: 3, color: "dotted fuchsia" },
    ],
  },
  {
    color: "clear lavender",
    contain: [
      { count: 4, color: "striped fuchsia" },
      { count: 3, color: "pale yellow" },
    ],
  },
  {
    color: "muted magenta",
    contain: [
      { count: 3, color: "dim beige" },
      { count: 2, color: "wavy plum" },
    ],
  },
  {
    color: "muted turquoise",
    contain: [
      { count: 1, color: "faded cyan" },
      { count: 3, color: "bright tan" },
      { count: 3, color: "striped brown" },
    ],
  },
  {
    color: "wavy gold",
    contain: [
      { count: 5, color: "striped tan" },
      { count: 5, color: "muted salmon" },
      { count: 5, color: "dark gold" },
      { count: 3, color: "muted cyan" },
    ],
  },
  {
    color: "dull violet",
    contain: [
      { count: 1, color: "faded white" },
      { count: 1, color: "striped black" },
      { count: 2, color: "vibrant maroon" },
      { count: 5, color: "faded yellow" },
    ],
  },
  {
    color: "clear beige",
    contain: [
      { count: 1, color: "shiny tomato" },
      { count: 5, color: "posh brown" },
      { count: 1, color: "faded cyan" },
      { count: 3, color: "dotted gray" },
    ],
  },
  {
    color: "muted olive",
    contain: [
      { count: 1, color: "dotted chartreuse" },
      { count: 3, color: "pale chartreuse" },
    ],
  },
  {
    color: "posh blue",
    contain: [
      { count: 3, color: "light red" },
      { count: 1, color: "bright lavender" },
      { count: 4, color: "dim coral" },
      { count: 2, color: "clear lime" },
    ],
  },
  { color: "striped olive", contain: [{ count: 3, color: "shiny gold" }] },
  { color: "mirrored tan", contain: [{ count: 3, color: "muted tomato" }] },
  {
    color: "shiny plum",
    contain: [
      { count: 2, color: "dark olive" },
      { count: 3, color: "wavy green" },
      { count: 2, color: "shiny lavender" },
    ],
  },
  {
    color: "plaid teal",
    contain: [
      { count: 3, color: "posh purple" },
      { count: 1, color: "muted violet" },
      { count: 2, color: "dark tan" },
      { count: 1, color: "wavy gold" },
    ],
  },
  {
    color: "striped white",
    contain: [
      { count: 1, color: "striped turquoise" },
      { count: 3, color: "shiny yellow" },
    ],
  },
  {
    color: "vibrant beige",
    contain: [
      { count: 1, color: "clear olive" },
      { count: 4, color: "wavy lime" },
    ],
  },
  {
    color: "vibrant crimson",
    contain: [
      { count: 4, color: "muted salmon" },
      { count: 5, color: "light bronze" },
    ],
  },
  {
    color: "muted aqua",
    contain: [
      { count: 4, color: "plaid gold" },
      { count: 1, color: "clear olive" },
      { count: 1, color: "striped silver" },
      { count: 1, color: "pale purple" },
    ],
  },
  {
    color: "dotted indigo",
    contain: [
      { count: 1, color: "light gray" },
      { count: 3, color: "dark olive" },
      { count: 1, color: "faded beige" },
    ],
  },
  {
    color: "wavy aqua",
    contain: [
      { count: 3, color: "muted fuchsia" },
      { count: 1, color: "dull coral" },
      { count: 2, color: "dark tan" },
      { count: 1, color: "clear plum" },
    ],
  },
  {
    color: "dull coral",
    contain: [
      { count: 1, color: "bright gold" },
      { count: 5, color: "dark salmon" },
      { count: 3, color: "mirrored fuchsia" },
      { count: 3, color: "bright crimson" },
    ],
  },
  {
    color: "vibrant plum",
    contain: [
      { count: 1, color: "drab violet" },
      { count: 3, color: "shiny beige" },
    ],
  },
  {
    color: "mirrored white",
    contain: [
      { count: 3, color: "drab bronze" },
      { count: 3, color: "shiny aqua" },
    ],
  },
  {
    color: "dotted fuchsia",
    contain: [
      { count: 5, color: "vibrant cyan" },
      { count: 4, color: "mirrored teal" },
      { count: 1, color: "drab white" },
      { count: 5, color: "wavy black" },
    ],
  },
  {
    color: "bright chartreuse",
    contain: [
      { count: 2, color: "shiny gold" },
      { count: 5, color: "dim green" },
    ],
  },
  { color: "dim gold", contain: [{ count: 5, color: "muted purple" }] },
  {
    color: "posh olive",
    contain: [
      { count: 2, color: "faded yellow" },
      { count: 5, color: "dotted gray" },
    ],
  },
  {
    color: "drab purple",
    contain: [
      { count: 5, color: "vibrant beige" },
      { count: 4, color: "striped indigo" },
      { count: 3, color: "pale fuchsia" },
    ],
  },
  {
    color: "drab red",
    contain: [
      { count: 1, color: "faded blue" },
      { count: 5, color: "dull indigo" },
      { count: 4, color: "posh purple" },
      { count: 4, color: "plaid bronze" },
    ],
  },
  {
    color: "shiny gray",
    contain: [
      { count: 1, color: "drab violet" },
      { count: 1, color: "dotted yellow" },
    ],
  },
  {
    color: "shiny violet",
    contain: [
      { count: 4, color: "clear salmon" },
      { count: 5, color: "shiny cyan" },
      { count: 2, color: "shiny tomato" },
    ],
  },
  {
    color: "plaid red",
    contain: [
      { count: 5, color: "dull olive" },
      { count: 3, color: "pale teal" },
      { count: 2, color: "clear bronze" },
      { count: 1, color: "light bronze" },
    ],
  },
  {
    color: "clear coral",
    contain: [
      { count: 1, color: "faded bronze" },
      { count: 5, color: "dull red" },
    ],
  },
  {
    color: "shiny purple",
    contain: [
      { count: 4, color: "clear blue" },
      { count: 3, color: "pale red" },
      { count: 5, color: "dull tomato" },
      { count: 4, color: "shiny orange" },
    ],
  },
  {
    color: "dotted black",
    contain: [
      { count: 4, color: "muted tan" },
      { count: 2, color: "dim tan" },
      { count: 2, color: "muted cyan" },
      { count: 2, color: "dull black" },
    ],
  },
  {
    color: "pale blue",
    contain: [
      { count: 3, color: "wavy gray" },
      { count: 2, color: "drab violet" },
      { count: 2, color: "dull chartreuse" },
      { count: 5, color: "plaid yellow" },
    ],
  },
  {
    color: "mirrored lavender",
    contain: [
      { count: 1, color: "wavy green" },
      { count: 3, color: "striped brown" },
    ],
  },
  {
    color: "plaid turquoise",
    contain: [
      { count: 4, color: "clear gray" },
      { count: 1, color: "muted green" },
      { count: 3, color: "dull tan" },
      { count: 4, color: "shiny indigo" },
    ],
  },
  {
    color: "bright tan",
    contain: [
      { count: 4, color: "shiny olive" },
      { count: 1, color: "clear salmon" },
      { count: 4, color: "bright indigo" },
      { count: 2, color: "drab maroon" },
    ],
  },
  {
    color: "dark lime",
    contain: [
      { count: 4, color: "bright chartreuse" },
      { count: 3, color: "posh maroon" },
      { count: 1, color: "shiny tan" },
      { count: 5, color: "pale bronze" },
    ],
  },
  {
    color: "clear turquoise",
    contain: [
      { count: 3, color: "bright orange" },
      { count: 1, color: "faded yellow" },
      { count: 5, color: "posh purple" },
      { count: 1, color: "vibrant coral" },
    ],
  },
  {
    color: "plaid beige",
    contain: [
      { count: 4, color: "light blue" },
      { count: 5, color: "bright bronze" },
    ],
  },
  { color: "pale gold", contain: [{ count: 1, color: "pale indigo" }] },
  {
    color: "light maroon",
    contain: [
      { count: 3, color: "faded cyan" },
      { count: 5, color: "shiny lavender" },
      { count: 3, color: "drab yellow" },
    ],
  },
  {
    color: "posh white",
    contain: [
      { count: 2, color: "mirrored lavender" },
      { count: 2, color: "posh teal" },
      { count: 3, color: "dull teal" },
      { count: 1, color: "plaid salmon" },
    ],
  },
  {
    color: "shiny tan",
    contain: [
      { count: 2, color: "bright indigo" },
      { count: 3, color: "plaid lime" },
      { count: 3, color: "light chartreuse" },
    ],
  },
  { color: "wavy violet", contain: [{ count: 2, color: "drab orange" }] },
  {
    color: "dotted bronze",
    contain: [
      { count: 2, color: "mirrored aqua" },
      { count: 3, color: "dull fuchsia" },
    ],
  },
  { color: "dull lime", contain: [{ count: 2, color: "bright lavender" }] },
  {
    color: "shiny salmon",
    contain: [
      { count: 5, color: "posh olive" },
      { count: 3, color: "pale teal" },
    ],
  },
  { color: "light lime", contain: [{ count: 1, color: "light plum" }] },
  { color: "mirrored silver", contain: [{ count: 1, color: "clear purple" }] },
  { color: "dark magenta", contain: [{ count: 1, color: "dotted yellow" }] },
  {
    color: "dotted white",
    contain: [
      { count: 2, color: "vibrant aqua" },
      { count: 5, color: "pale green" },
      { count: 1, color: "dark fuchsia" },
    ],
  },
  {
    color: "posh beige",
    contain: [
      { count: 4, color: "drab maroon" },
      { count: 3, color: "muted cyan" },
    ],
  },
  {
    color: "faded blue",
    contain: [
      { count: 5, color: "muted tomato" },
      { count: 5, color: "clear black" },
      { count: 4, color: "muted gray" },
    ],
  },
  { color: "dim fuchsia", contain: [{ count: 5, color: "dark gold" }] },
  { color: "vibrant lavender", contain: [{ count: 4, color: "shiny purple" }] },
  {
    color: "pale bronze",
    contain: [
      { count: 3, color: "wavy red" },
      { count: 4, color: "shiny tan" },
    ],
  },
  { color: "plaid orange", contain: [{ count: 3, color: "vibrant indigo" }] },
  {
    color: "bright coral",
    contain: [
      { count: 3, color: "faded olive" },
      { count: 4, color: "striped coral" },
      { count: 5, color: "plaid violet" },
      { count: 3, color: "bright lavender" },
    ],
  },
  {
    color: "striped teal",
    contain: [
      { count: 1, color: "striped magenta" },
      { count: 5, color: "plaid white" },
    ],
  },
  {
    color: "plaid gray",
    contain: [
      { count: 4, color: "dotted gray" },
      { count: 3, color: "clear beige" },
    ],
  },
  { color: "faded salmon", contain: [{ count: 1, color: "dotted turquoise" }] },
  {
    color: "striped violet",
    contain: [
      { count: 3, color: "dim cyan" },
      { count: 5, color: "drab plum" },
      { count: 5, color: "pale gray" },
    ],
  },
  { color: "dotted magenta", contain: [{ count: 3, color: "plaid bronze" }] },
  {
    color: "dotted salmon",
    contain: [
      { count: 4, color: "wavy tomato" },
      { count: 2, color: "vibrant silver" },
      { count: 5, color: "dim aqua" },
    ],
  },
  {
    color: "dark aqua",
    contain: [
      { count: 3, color: "posh olive" },
      { count: 4, color: "clear salmon" },
      { count: 2, color: "striped purple" },
      { count: 4, color: "faded yellow" },
    ],
  },
  { color: "vibrant cyan", contain: [{ count: 4, color: "light red" }] },
  {
    color: "pale aqua",
    contain: [
      { count: 5, color: "clear brown" },
      { count: 1, color: "muted cyan" },
      { count: 1, color: "pale maroon" },
    ],
  },
  {
    color: "clear brown",
    contain: [
      { count: 5, color: "vibrant white" },
      { count: 2, color: "clear blue" },
    ],
  },
  {
    color: "dim black",
    contain: [
      { count: 3, color: "muted salmon" },
      { count: 2, color: "plaid bronze" },
      { count: 4, color: "shiny cyan" },
      { count: 4, color: "posh green" },
    ],
  },
  {
    color: "pale crimson",
    contain: [
      { count: 5, color: "pale lime" },
      { count: 1, color: "mirrored tomato" },
      { count: 2, color: "dull green" },
      { count: 2, color: "mirrored teal" },
    ],
  },
  {
    color: "shiny teal",
    contain: [
      { count: 5, color: "dark chartreuse" },
      { count: 4, color: "faded yellow" },
      { count: 3, color: "faded coral" },
    ],
  },
  {
    color: "faded brown",
    contain: [
      { count: 4, color: "plaid plum" },
      { count: 5, color: "mirrored orange" },
      { count: 4, color: "shiny aqua" },
    ],
  },
  {
    color: "pale silver",
    contain: [
      { count: 1, color: "bright turquoise" },
      { count: 2, color: "mirrored yellow" },
      { count: 1, color: "faded red" },
    ],
  },
  { color: "light black", contain: [{ count: 3, color: "shiny indigo" }] },
  { color: "bright orange", contain: [{ count: 1, color: "faded coral" }] },
  {
    color: "drab fuchsia",
    contain: [
      { count: 3, color: "wavy lavender" },
      { count: 3, color: "plaid yellow" },
      { count: 2, color: "clear olive" },
      { count: 4, color: "clear red" },
    ],
  },
  { color: "bright lime", contain: [{ count: 2, color: "dull magenta" }] },
  {
    color: "pale magenta",
    contain: [
      { count: 1, color: "faded white" },
      { count: 2, color: "faded salmon" },
    ],
  },
  {
    color: "light cyan",
    contain: [
      { count: 1, color: "wavy yellow" },
      { count: 3, color: "bright crimson" },
      { count: 3, color: "striped violet" },
    ],
  },
  {
    color: "shiny silver",
    contain: [
      { count: 3, color: "shiny olive" },
      { count: 1, color: "dark plum" },
      { count: 2, color: "muted cyan" },
    ],
  },
  {
    color: "shiny red",
    contain: [
      { count: 3, color: "posh turquoise" },
      { count: 5, color: "pale gold" },
    ],
  },
  {
    color: "muted coral",
    contain: [
      { count: 1, color: "shiny aqua" },
      { count: 5, color: "dim green" },
      { count: 2, color: "muted purple" },
      { count: 4, color: "pale turquoise" },
    ],
  },
  {
    color: "dark black",
    contain: [
      { count: 3, color: "shiny gray" },
      { count: 2, color: "mirrored aqua" },
      { count: 3, color: "vibrant magenta" },
    ],
  },
  { color: "dull yellow", contain: [{ count: 5, color: "clear teal" }] },
  {
    color: "shiny lime",
    contain: [
      { count: 5, color: "posh magenta" },
      { count: 3, color: "light salmon" },
    ],
  },
  { color: "muted tan", contain: [{ count: 4, color: "bright chartreuse" }] },
  {
    color: "bright magenta",
    contain: [
      { count: 4, color: "dotted violet" },
      { count: 2, color: "light gold" },
      { count: 5, color: "dim indigo" },
      { count: 4, color: "dark olive" },
    ],
  },
  {
    color: "faded lime",
    contain: [
      { count: 3, color: "mirrored gold" },
      { count: 5, color: "wavy tomato" },
      { count: 5, color: "muted lavender" },
    ],
  },
  {
    color: "wavy coral",
    contain: [
      { count: 3, color: "posh maroon" },
      { count: 1, color: "striped black" },
    ],
  },
  {
    color: "dull red",
    contain: [
      { count: 4, color: "plaid yellow" },
      { count: 5, color: "drab lime" },
      { count: 5, color: "plaid plum" },
    ],
  },
  {
    color: "wavy blue",
    contain: [
      { count: 4, color: "bright brown" },
      { count: 1, color: "bright magenta" },
      { count: 5, color: "pale indigo" },
      { count: 1, color: "muted tomato" },
    ],
  },
  {
    color: "dull salmon",
    contain: [
      { count: 2, color: "mirrored orange" },
      { count: 3, color: "shiny plum" },
    ],
  },
  {
    color: "muted brown",
    contain: [
      { count: 5, color: "dull beige" },
      { count: 3, color: "vibrant aqua" },
      { count: 3, color: "clear lavender" },
    ],
  },
  {
    color: "faded lavender",
    contain: [
      { count: 1, color: "vibrant orange" },
      { count: 3, color: "faded magenta" },
    ],
  },
  {
    color: "vibrant maroon",
    contain: [
      { count: 3, color: "muted crimson" },
      { count: 5, color: "striped purple" },
      { count: 5, color: "pale tomato" },
    ],
  },
  { color: "faded black", contain: [{ count: 2, color: "dark purple" }] },
  {
    color: "dim gray",
    contain: [
      { count: 4, color: "dotted coral" },
      { count: 4, color: "muted orange" },
    ],
  },
  {
    color: "striped yellow",
    contain: [
      { count: 1, color: "dark salmon" },
      { count: 1, color: "pale silver" },
      { count: 1, color: "wavy brown" },
      { count: 1, color: "light gold" },
    ],
  },
  {
    color: "dim violet",
    contain: [
      { count: 5, color: "posh magenta" },
      { count: 1, color: "pale aqua" },
      { count: 1, color: "pale maroon" },
      { count: 5, color: "dim lavender" },
    ],
  },
  {
    color: "plaid indigo",
    contain: [
      { count: 1, color: "shiny silver" },
      { count: 3, color: "pale gray" },
      { count: 4, color: "dull maroon" },
      { count: 5, color: "faded coral" },
    ],
  },
  {
    color: "light purple",
    contain: [
      { count: 1, color: "faded violet" },
      { count: 4, color: "pale orange" },
      { count: 1, color: "drab yellow" },
    ],
  },
  {
    color: "faded indigo",
    contain: [
      { count: 5, color: "faded white" },
      { count: 2, color: "dotted lavender" },
      { count: 4, color: "dark gold" },
      { count: 1, color: "plaid plum" },
    ],
  },
  { color: "vibrant tomato", contain: [{ count: 4, color: "light plum" }] },
  { color: "light coral", contain: [{ count: 4, color: "posh fuchsia" }] },
  {
    color: "dotted coral",
    contain: [
      { count: 3, color: "vibrant magenta" },
      { count: 5, color: "bright beige" },
    ],
  },
  {
    color: "drab olive",
    contain: [
      { count: 2, color: "wavy salmon" },
      { count: 2, color: "pale aqua" },
      { count: 2, color: "dark indigo" },
      { count: 2, color: "drab green" },
    ],
  },
  { color: "dull green", contain: [{ count: 5, color: "dull crimson" }] },
  {
    color: "muted gray",
    contain: [
      { count: 5, color: "bright chartreuse" },
      { count: 4, color: "clear fuchsia" },
      { count: 2, color: "light red" },
      { count: 3, color: "shiny gold" },
    ],
  },
  {
    color: "clear red",
    contain: [
      { count: 4, color: "pale teal" },
      { count: 2, color: "shiny gold" },
      { count: 1, color: "mirrored tomato" },
      { count: 4, color: "faded yellow" },
    ],
  },
  {
    color: "vibrant violet",
    contain: [
      { count: 3, color: "light gray" },
      { count: 2, color: "posh green" },
      { count: 3, color: "shiny salmon" },
    ],
  },
  {
    color: "posh salmon",
    contain: [
      { count: 4, color: "muted blue" },
      { count: 3, color: "posh purple" },
      { count: 4, color: "dim silver" },
      { count: 5, color: "faded white" },
    ],
  },
  {
    color: "wavy white",
    contain: [
      { count: 3, color: "wavy fuchsia" },
      { count: 1, color: "drab black" },
      { count: 5, color: "vibrant aqua" },
      { count: 2, color: "wavy magenta" },
    ],
  },
  {
    color: "light orange",
    contain: [
      { count: 2, color: "light black" },
      { count: 1, color: "wavy maroon" },
    ],
  },
  {
    color: "shiny bronze",
    contain: [
      { count: 1, color: "drab crimson" },
      { count: 1, color: "clear purple" },
      { count: 4, color: "dotted cyan" },
      { count: 5, color: "mirrored yellow" },
    ],
  },
  { color: "dull tomato", contain: [{ count: 5, color: "dark gray" }] },
  {
    color: "wavy salmon",
    contain: [
      { count: 4, color: "wavy orange" },
      { count: 5, color: "dull silver" },
      { count: 4, color: "wavy maroon" },
      { count: 2, color: "posh blue" },
    ],
  },
  {
    color: "shiny cyan",
    contain: [
      { count: 5, color: "vibrant plum" },
      { count: 1, color: "plaid plum" },
    ],
  },
  { color: "wavy turquoise", contain: [{ count: 2, color: "bright gold" }] },
  {
    color: "shiny crimson",
    contain: [
      { count: 2, color: "faded indigo" },
      { count: 2, color: "muted lavender" },
    ],
  },
  { color: "wavy brown", contain: [{ count: 2, color: "clear indigo" }] },
  {
    color: "bright aqua",
    contain: [
      { count: 2, color: "wavy plum" },
      { count: 2, color: "shiny beige" },
      { count: 5, color: "clear black" },
      { count: 2, color: "light black" },
    ],
  },
  { color: "light bronze", contain: [{ count: 3, color: "vibrant maroon" }] },
  { color: "vibrant fuchsia", contain: [{ count: 1, color: "dotted cyan" }] },
  {
    color: "dull crimson",
    contain: [
      { count: 2, color: "plaid lime" },
      { count: 2, color: "plaid bronze" },
      { count: 3, color: "shiny orange" },
    ],
  },
  {
    color: "mirrored tomato",
    contain: [
      { count: 3, color: "clear maroon" },
      { count: 4, color: "striped crimson" },
      { count: 3, color: "drab plum" },
      { count: 5, color: "plaid plum" },
    ],
  },
  {
    color: "dark silver",
    contain: [
      { count: 5, color: "pale cyan" },
      { count: 4, color: "drab magenta" },
    ],
  },
  { color: "posh lavender", contain: [{ count: 5, color: "faded olive" }] },
  { color: "bright plum", contain: [{ count: 5, color: "posh indigo" }] },
  {
    color: "faded teal",
    contain: [
      { count: 1, color: "vibrant maroon" },
      { count: 1, color: "wavy maroon" },
      { count: 2, color: "dark violet" },
      { count: 2, color: "pale yellow" },
    ],
  },
  {
    color: "mirrored coral",
    contain: [
      { count: 1, color: "muted magenta" },
      { count: 4, color: "clear turquoise" },
      { count: 5, color: "muted purple" },
      { count: 2, color: "pale black" },
    ],
  },
  {
    color: "vibrant lime",
    contain: [
      { count: 2, color: "pale lavender" },
      { count: 5, color: "clear purple" },
    ],
  },
  {
    color: "dark tan",
    contain: [
      { count: 2, color: "bright beige" },
      { count: 5, color: "drab aqua" },
    ],
  },
  {
    color: "muted lavender",
    contain: [
      { count: 3, color: "posh olive" },
      { count: 2, color: "faded cyan" },
    ],
  },
  { color: "dull fuchsia", contain: [{ count: 3, color: "vibrant maroon" }] },
  {
    color: "dim magenta",
    contain: [
      { count: 4, color: "faded cyan" },
      { count: 3, color: "dim indigo" },
      { count: 1, color: "mirrored teal" },
      { count: 5, color: "vibrant teal" },
    ],
  },
  { color: "posh orange", contain: [{ count: 1, color: "wavy green" }] },
  {
    color: "clear white",
    contain: [
      { count: 2, color: "faded purple" },
      { count: 4, color: "dotted yellow" },
    ],
  },
  {
    color: "light olive",
    contain: [
      { count: 3, color: "faded plum" },
      { count: 3, color: "wavy chartreuse" },
    ],
  },
  { color: "light fuchsia", contain: [{ count: 3, color: "clear orange" }] },
  {
    color: "striped turquoise",
    contain: [
      { count: 4, color: "faded cyan" },
      { count: 4, color: "bright green" },
      { count: 5, color: "mirrored magenta" },
    ],
  },
  {
    color: "light teal",
    contain: [
      { count: 1, color: "clear gold" },
      { count: 2, color: "dull olive" },
      { count: 2, color: "clear teal" },
    ],
  },
  {
    color: "wavy teal",
    contain: [
      { count: 1, color: "light gold" },
      { count: 5, color: "light chartreuse" },
      { count: 2, color: "dim purple" },
    ],
  },
  {
    color: "striped beige",
    contain: [
      { count: 2, color: "mirrored cyan" },
      { count: 2, color: "plaid aqua" },
      { count: 3, color: "dull lavender" },
      { count: 1, color: "dull chartreuse" },
    ],
  },
  { color: "striped aqua", contain: [] },
  {
    color: "shiny green",
    contain: [
      { count: 5, color: "posh tomato" },
      { count: 1, color: "faded olive" },
      { count: 5, color: "pale maroon" },
    ],
  },
  {
    color: "posh magenta",
    contain: [
      { count: 2, color: "dull green" },
      { count: 3, color: "wavy maroon" },
      { count: 4, color: "faded silver" },
    ],
  },
  {
    color: "faded silver",
    contain: [
      { count: 5, color: "dark lime" },
      { count: 2, color: "striped brown" },
    ],
  },
  {
    color: "dim maroon",
    contain: [
      { count: 1, color: "light crimson" },
      { count: 5, color: "posh black" },
      { count: 5, color: "striped bronze" },
    ],
  },
  {
    color: "dim chartreuse",
    contain: [
      { count: 3, color: "pale plum" },
      { count: 2, color: "clear fuchsia" },
      { count: 3, color: "bright beige" },
    ],
  },
  {
    color: "drab crimson",
    contain: [
      { count: 4, color: "drab orange" },
      { count: 2, color: "dark blue" },
      { count: 1, color: "shiny gray" },
      { count: 1, color: "pale gray" },
    ],
  },
  {
    color: "dim beige",
    contain: [
      { count: 4, color: "dark orange" },
      { count: 1, color: "shiny salmon" },
      { count: 5, color: "bright indigo" },
      { count: 1, color: "shiny indigo" },
    ],
  },
  {
    color: "light blue",
    contain: [
      { count: 2, color: "vibrant white" },
      { count: 1, color: "pale turquoise" },
      { count: 3, color: "drab maroon" },
      { count: 4, color: "mirrored cyan" },
    ],
  },
  {
    color: "dim aqua",
    contain: [
      { count: 3, color: "bright chartreuse" },
      { count: 2, color: "clear black" },
      { count: 4, color: "dotted gray" },
      { count: 3, color: "plaid bronze" },
    ],
  },
  {
    color: "striped fuchsia",
    contain: [
      { count: 2, color: "shiny teal" },
      { count: 4, color: "striped aqua" },
      { count: 4, color: "dull lavender" },
      { count: 2, color: "dull crimson" },
    ],
  },
  {
    color: "wavy yellow",
    contain: [
      { count: 5, color: "pale gray" },
      { count: 2, color: "faded red" },
      { count: 3, color: "vibrant silver" },
    ],
  },
  {
    color: "bright fuchsia",
    contain: [
      { count: 1, color: "faded teal" },
      { count: 5, color: "shiny lavender" },
      { count: 2, color: "muted cyan" },
    ],
  },
  {
    color: "mirrored violet",
    contain: [
      { count: 4, color: "plaid olive" },
      { count: 2, color: "dotted magenta" },
      { count: 4, color: "striped aqua" },
      { count: 5, color: "wavy lavender" },
    ],
  },
  {
    color: "wavy maroon",
    contain: [
      { count: 2, color: "mirrored maroon" },
      { count: 3, color: "drab violet" },
      { count: 2, color: "dark plum" },
      { count: 2, color: "faded cyan" },
    ],
  },
  { color: "dim green", contain: [{ count: 3, color: "clear lime" }] },
  {
    color: "muted beige",
    contain: [
      { count: 4, color: "posh coral" },
      { count: 1, color: "mirrored teal" },
      { count: 5, color: "shiny cyan" },
      { count: 2, color: "light plum" },
    ],
  },
  { color: "posh turquoise", contain: [{ count: 1, color: "dull fuchsia" }] },
  {
    color: "clear orange",
    contain: [
      { count: 2, color: "faded chartreuse" },
      { count: 3, color: "dark blue" },
      { count: 5, color: "plaid yellow" },
    ],
  },
  {
    color: "light green",
    contain: [
      { count: 5, color: "mirrored chartreuse" },
      { count: 4, color: "pale bronze" },
    ],
  },
  {
    color: "clear bronze",
    contain: [
      { count: 5, color: "vibrant coral" },
      { count: 2, color: "bright beige" },
      { count: 4, color: "dark lime" },
    ],
  },
  {
    color: "clear silver",
    contain: [
      { count: 1, color: "bright gray" },
      { count: 5, color: "dotted white" },
      { count: 2, color: "dotted lavender" },
      { count: 1, color: "dim violet" },
    ],
  },
  { color: "drab green", contain: [{ count: 1, color: "drab violet" }] },
  { color: "mirrored salmon", contain: [{ count: 1, color: "dim beige" }] },
  {
    color: "mirrored maroon",
    contain: [
      { count: 2, color: "posh black" },
      { count: 4, color: "striped black" },
      { count: 2, color: "dotted gray" },
      { count: 4, color: "striped gray" },
    ],
  },
  { color: "mirrored aqua", contain: [{ count: 4, color: "clear black" }] },
  {
    color: "pale purple",
    contain: [
      { count: 5, color: "dim green" },
      { count: 3, color: "striped tan" },
      { count: 5, color: "wavy olive" },
      { count: 4, color: "muted cyan" },
    ],
  },
  {
    color: "dotted teal",
    contain: [
      { count: 1, color: "dotted orange" },
      { count: 2, color: "dotted chartreuse" },
    ],
  },
  { color: "vibrant olive", contain: [{ count: 2, color: "posh olive" }] },
  { color: "dotted aqua", contain: [{ count: 5, color: "drab orange" }] },
  {
    color: "clear yellow",
    contain: [
      { count: 1, color: "clear orange" },
      { count: 3, color: "dim beige" },
      { count: 3, color: "bright indigo" },
      { count: 1, color: "drab yellow" },
    ],
  },
  { color: "vibrant gray", contain: [{ count: 3, color: "mirrored plum" }] },
  {
    color: "dull beige",
    contain: [
      { count: 3, color: "dull indigo" },
      { count: 2, color: "dotted lavender" },
      { count: 2, color: "shiny orange" },
    ],
  },
  {
    color: "shiny chartreuse",
    contain: [
      { count: 2, color: "light brown" },
      { count: 1, color: "faded tomato" },
      { count: 1, color: "drab black" },
    ],
  },
  {
    color: "light chartreuse",
    contain: [
      { count: 2, color: "wavy red" },
      { count: 4, color: "muted green" },
      { count: 1, color: "drab aqua" },
      { count: 4, color: "mirrored maroon" },
    ],
  },
  {
    color: "bright violet",
    contain: [
      { count: 4, color: "dotted yellow" },
      { count: 2, color: "shiny aqua" },
      { count: 2, color: "drab aqua" },
      { count: 1, color: "bright red" },
    ],
  },
  {
    color: "dull gold",
    contain: [
      { count: 2, color: "muted maroon" },
      { count: 1, color: "wavy maroon" },
    ],
  },
  { color: "dotted beige", contain: [{ count: 4, color: "plaid magenta" }] },
  {
    color: "wavy silver",
    contain: [
      { count: 5, color: "pale beige" },
      { count: 3, color: "posh orange" },
      { count: 1, color: "clear turquoise" },
      { count: 3, color: "bright lavender" },
    ],
  },
  {
    color: "plaid aqua",
    contain: [
      { count: 1, color: "dull lime" },
      { count: 5, color: "plaid crimson" },
    ],
  },
  { color: "drab tomato", contain: [{ count: 4, color: "wavy plum" }] },
  {
    color: "muted cyan",
    contain: [
      { count: 5, color: "faded cyan" },
      { count: 4, color: "posh olive" },
      { count: 5, color: "faded yellow" },
      { count: 4, color: "dark chartreuse" },
    ],
  },
  {
    color: "dull olive",
    contain: [
      { count: 1, color: "dark black" },
      { count: 2, color: "clear gold" },
      { count: 4, color: "dark orange" },
    ],
  },
  {
    color: "bright salmon",
    contain: [
      { count: 5, color: "dark chartreuse" },
      { count: 5, color: "posh black" },
    ],
  },
  { color: "wavy beige", contain: [{ count: 4, color: "dim green" }] },
  { color: "posh fuchsia", contain: [{ count: 4, color: "drab plum" }] },
  {
    color: "striped red",
    contain: [
      { count: 5, color: "posh turquoise" },
      { count: 2, color: "posh indigo" },
      { count: 5, color: "dim silver" },
    ],
  },
  {
    color: "dim lavender",
    contain: [{ count: 5, color: "vibrant chartreuse" }],
  },
  { color: "plaid green", contain: [{ count: 4, color: "striped fuchsia" }] },
  {
    color: "dull lavender",
    contain: [
      { count: 5, color: "clear lime" },
      { count: 5, color: "wavy green" },
      { count: 2, color: "dark blue" },
      { count: 1, color: "striped gray" },
    ],
  },
  {
    color: "dark brown",
    contain: [
      { count: 4, color: "light silver" },
      { count: 4, color: "pale violet" },
      { count: 3, color: "light cyan" },
      { count: 1, color: "pale cyan" },
    ],
  },
  {
    color: "wavy green",
    contain: [
      { count: 3, color: "mirrored teal" },
      { count: 2, color: "muted green" },
    ],
  },
  {
    color: "drab teal",
    contain: [
      { count: 4, color: "shiny teal" },
      { count: 3, color: "striped aqua" },
      { count: 5, color: "dim coral" },
    ],
  },
  {
    color: "shiny orange",
    contain: [
      { count: 4, color: "drab aqua" },
      { count: 4, color: "pale teal" },
      { count: 3, color: "dull maroon" },
    ],
  },
  {
    color: "vibrant blue",
    contain: [
      { count: 2, color: "vibrant tomato" },
      { count: 1, color: "plaid cyan" },
      { count: 3, color: "pale red" },
    ],
  },
  {
    color: "mirrored purple",
    contain: [
      { count: 2, color: "striped tan" },
      { count: 1, color: "pale olive" },
    ],
  },
  { color: "faded purple", contain: [{ count: 2, color: "plaid lavender" }] },
  { color: "light aqua", contain: [{ count: 3, color: "vibrant chartreuse" }] },
  {
    color: "vibrant magenta",
    contain: [
      { count: 3, color: "clear salmon" },
      { count: 4, color: "posh brown" },
      { count: 4, color: "striped black" },
    ],
  },
  {
    color: "plaid salmon",
    contain: [
      { count: 1, color: "striped gray" },
      { count: 5, color: "dark plum" },
    ],
  },
  {
    color: "dim white",
    contain: [
      { count: 3, color: "faded fuchsia" },
      { count: 2, color: "clear yellow" },
    ],
  },
  {
    color: "light magenta",
    contain: [{ count: 1, color: "vibrant turquoise" }],
  },
  {
    color: "clear chartreuse",
    contain: [
      { count: 1, color: "posh olive" },
      { count: 1, color: "drab blue" },
    ],
  },
  {
    color: "clear tan",
    contain: [
      { count: 2, color: "dark blue" },
      { count: 4, color: "light gold" },
      { count: 5, color: "muted indigo" },
    ],
  },
  {
    color: "light turquoise",
    contain: [
      { count: 4, color: "drab beige" },
      { count: 4, color: "shiny bronze" },
      { count: 3, color: "dull olive" },
      { count: 3, color: "striped indigo" },
    ],
  },
  {
    color: "pale white",
    contain: [
      { count: 5, color: "dotted white" },
      { count: 3, color: "faded gold" },
      { count: 5, color: "striped turquoise" },
    ],
  },
  {
    color: "dark gray",
    contain: [
      { count: 3, color: "clear teal" },
      { count: 4, color: "posh green" },
      { count: 2, color: "striped brown" },
      { count: 3, color: "light tomato" },
    ],
  },
  { color: "clear maroon", contain: [{ count: 5, color: "drab maroon" }] },
  {
    color: "vibrant white",
    contain: [
      { count: 1, color: "muted green" },
      { count: 5, color: "dark aqua" },
      { count: 3, color: "clear black" },
      { count: 4, color: "drab teal" },
    ],
  },
  {
    color: "striped indigo",
    contain: [
      { count: 1, color: "bright turquoise" },
      { count: 5, color: "shiny orange" },
      { count: 1, color: "clear fuchsia" },
      { count: 1, color: "light chartreuse" },
    ],
  },
  {
    color: "dull cyan",
    contain: [
      { count: 2, color: "light salmon" },
      { count: 5, color: "striped magenta" },
      { count: 2, color: "wavy lavender" },
      { count: 3, color: "faded fuchsia" },
    ],
  },
  {
    color: "wavy plum",
    contain: [
      { count: 3, color: "muted crimson" },
      { count: 2, color: "dim green" },
    ],
  },
  {
    color: "pale tan",
    contain: [
      { count: 3, color: "mirrored turquoise" },
      { count: 5, color: "wavy salmon" },
    ],
  },
  {
    color: "vibrant green",
    contain: [
      { count: 5, color: "plaid chartreuse" },
      { count: 2, color: "muted teal" },
    ],
  },
  {
    color: "bright bronze",
    contain: [
      { count: 4, color: "clear indigo" },
      { count: 1, color: "mirrored bronze" },
      { count: 1, color: "mirrored magenta" },
      { count: 5, color: "posh beige" },
    ],
  },
  { color: "faded plum", contain: [{ count: 2, color: "dotted tan" }] },
  {
    color: "mirrored blue",
    contain: [
      { count: 2, color: "clear lime" },
      { count: 5, color: "faded coral" },
      { count: 1, color: "drab aqua" },
    ],
  },
  {
    color: "plaid gold",
    contain: [
      { count: 2, color: "muted tomato" },
      { count: 1, color: "shiny blue" },
      { count: 1, color: "dim gray" },
      { count: 1, color: "dotted salmon" },
    ],
  },
  {
    color: "posh black",
    contain: [
      { count: 3, color: "faded cyan" },
      { count: 5, color: "posh brown" },
      { count: 1, color: "striped black" },
    ],
  },
  {
    color: "light salmon",
    contain: [
      { count: 1, color: "clear lime" },
      { count: 4, color: "posh black" },
    ],
  },
  { color: "muted violet", contain: [{ count: 4, color: "wavy cyan" }] },
  {
    color: "faded cyan",
    contain: [
      { count: 4, color: "faded coral" },
      { count: 3, color: "faded yellow" },
    ],
  },
  {
    color: "faded turquoise",
    contain: [
      { count: 3, color: "wavy magenta" },
      { count: 3, color: "plaid bronze" },
      { count: 1, color: "dotted chartreuse" },
    ],
  },
  {
    color: "plaid cyan",
    contain: [
      { count: 1, color: "shiny tan" },
      { count: 1, color: "faded coral" },
      { count: 1, color: "vibrant plum" },
      { count: 2, color: "bright lavender" },
    ],
  },
  {
    color: "mirrored brown",
    contain: [
      { count: 1, color: "faded chartreuse" },
      { count: 2, color: "striped plum" },
    ],
  },
  {
    color: "light lavender",
    contain: [
      { count: 1, color: "dull teal" },
      { count: 3, color: "dark fuchsia" },
    ],
  },
  {
    color: "striped crimson",
    contain: [
      { count: 1, color: "light salmon" },
      { count: 2, color: "drab black" },
      { count: 3, color: "vibrant white" },
      { count: 5, color: "dull maroon" },
    ],
  },
  {
    color: "dotted crimson",
    contain: [
      { count: 1, color: "posh orange" },
      { count: 4, color: "muted green" },
      { count: 2, color: "mirrored indigo" },
    ],
  },
  { color: "clear cyan", contain: [{ count: 3, color: "light yellow" }] },
  {
    color: "light indigo",
    contain: [
      { count: 5, color: "plaid cyan" },
      { count: 2, color: "mirrored fuchsia" },
    ],
  },
  { color: "light white", contain: [{ count: 2, color: "light chartreuse" }] },
  { color: "drab yellow", contain: [{ count: 1, color: "mirrored blue" }] },
  {
    color: "dim cyan",
    contain: [
      { count: 2, color: "posh salmon" },
      { count: 5, color: "bright chartreuse" },
      { count: 3, color: "dark chartreuse" },
    ],
  },
  {
    color: "pale gray",
    contain: [
      { count: 5, color: "dim orange" },
      { count: 2, color: "dark plum" },
      { count: 1, color: "vibrant plum" },
      { count: 3, color: "striped tan" },
    ],
  },
  {
    color: "bright tomato",
    contain: [
      { count: 3, color: "posh indigo" },
      { count: 1, color: "dotted aqua" },
      { count: 5, color: "muted olive" },
    ],
  },
  { color: "shiny olive", contain: [{ count: 2, color: "drab aqua" }] },
  {
    color: "mirrored turquoise",
    contain: [
      { count: 3, color: "shiny violet" },
      { count: 3, color: "drab crimson" },
      { count: 3, color: "dotted tomato" },
      { count: 5, color: "bright violet" },
    ],
  },
  {
    color: "light gray",
    contain: [
      { count: 1, color: "vibrant white" },
      { count: 2, color: "muted indigo" },
      { count: 3, color: "drab teal" },
    ],
  },
  { color: "bright green", contain: [{ count: 4, color: "bright indigo" }] },
  {
    color: "striped lavender",
    contain: [
      { count: 2, color: "striped aqua" },
      { count: 5, color: "light crimson" },
      { count: 4, color: "drab maroon" },
    ],
  },
  {
    color: "posh green",
    contain: [
      { count: 2, color: "muted turquoise" },
      { count: 4, color: "dark blue" },
      { count: 4, color: "light chartreuse" },
      { count: 1, color: "pale purple" },
    ],
  },
  {
    color: "plaid fuchsia",
    contain: [
      { count: 3, color: "shiny yellow" },
      { count: 2, color: "shiny maroon" },
      { count: 1, color: "clear aqua" },
    ],
  },
  {
    color: "dim purple",
    contain: [
      { count: 4, color: "light crimson" },
      { count: 2, color: "dotted yellow" },
      { count: 2, color: "mirrored maroon" },
    ],
  },
  {
    color: "dark salmon",
    contain: [
      { count: 2, color: "faded teal" },
      { count: 4, color: "drab white" },
      { count: 3, color: "posh bronze" },
    ],
  },
  { color: "drab maroon", contain: [] },
  {
    color: "dark lavender",
    contain: [
      { count: 4, color: "muted brown" },
      { count: 5, color: "dark orange" },
      { count: 1, color: "plaid aqua" },
      { count: 2, color: "muted cyan" },
    ],
  },
  {
    color: "pale tomato",
    contain: [
      { count: 5, color: "drab maroon" },
      { count: 2, color: "posh orange" },
      { count: 4, color: "pale bronze" },
    ],
  },
  {
    color: "shiny gold",
    contain: [
      { count: 2, color: "light chartreuse" },
      { count: 2, color: "drab black" },
      { count: 1, color: "bright orange" },
      { count: 1, color: "shiny teal" },
    ],
  },
  {
    color: "bright beige",
    contain: [
      { count: 5, color: "dim teal" },
      { count: 3, color: "posh indigo" },
    ],
  },
  {
    color: "dim crimson",
    contain: [
      { count: 4, color: "wavy lime" },
      { count: 4, color: "dim orange" },
      { count: 1, color: "faded green" },
    ],
  },
  {
    color: "dim red",
    contain: [
      { count: 4, color: "drab plum" },
      { count: 4, color: "shiny gold" },
    ],
  },
  {
    color: "wavy tomato",
    contain: [
      { count: 4, color: "plaid bronze" },
      { count: 1, color: "striped black" },
    ],
  },
  {
    color: "dark plum",
    contain: [
      { count: 5, color: "shiny olive" },
      { count: 1, color: "drab violet" },
      { count: 2, color: "striped black" },
      { count: 1, color: "faded coral" },
    ],
  },
];
