const inputTest = [
  {
    color: "light red",
    content: [
      { count: 1, color: "bright white" },
      { count: 2, color: "muted yellow" },
    ],
  },
  {
    color: "dark orange",
    content: [
      { count: 3, color: "bright white" },
      { count: 4, color: "muted yellow" },
    ],
  },
  { color: "bright white", content: [{ count: 1, color: "shiny gold" }] },
  {
    color: "muted yellow",
    content: [
      { count: 2, color: "shiny gold" },
      { count: 9, color: "faded blue" },
    ],
  },
  {
    color: "shiny gold",
    content: [
      { count: 1, color: "dark olive" },
      { count: 2, color: "vibrant plum" },
    ],
  },
  {
    color: "dark olive",
    content: [
      { count: 3, color: "faded blue" },
      { count: 4, color: "dotted black" },
    ],
  },
  {
    color: "vibrant plum",
    content: [
      { count: 5, color: "faded blue" },
      { count: 6, color: "dotted black" },
    ],
  },
  { color: "faded blue", content: [] },
  { color: "dotted black", content: [] },
];

const input = [
  {
    color: "posh teal",
    content: [
      { count: 2, color: "faded coral" },
      { count: 3, color: "striped crimson" },
      { count: 1, color: "faded red" },
    ],
  },
  {
    color: "mirrored chartreuse",
    content: [
      { count: 3, color: "clear beige" },
      { count: 3, color: "shiny silver" },
      { count: 3, color: "bright green" },
    ],
  },
  { color: "dotted red", content: [{ count: 4, color: "light chartreuse" }] },
  {
    color: "faded chartreuse",
    content: [
      { count: 1, color: "striped black" },
      { count: 1, color: "dim coral" },
      { count: 5, color: "mirrored maroon" },
    ],
  },
  {
    color: "bright teal",
    content: [
      { count: 3, color: "light black" },
      { count: 4, color: "striped fuchsia" },
      { count: 1, color: "dark chartreuse" },
    ],
  },
  {
    color: "dull orange",
    content: [
      { count: 5, color: "striped green" },
      { count: 3, color: "plaid plum" },
      { count: 3, color: "pale gray" },
    ],
  },
  {
    color: "dotted tomato",
    content: [
      { count: 5, color: "plaid blue" },
      { count: 2, color: "dull maroon" },
      { count: 1, color: "mirrored maroon" },
      { count: 3, color: "posh brown" },
    ],
  },
  {
    color: "drab tan",
    content: [
      { count: 1, color: "striped chartreuse" },
      { count: 5, color: "dull lavender" },
    ],
  },
  {
    color: "mirrored indigo",
    content: [
      { count: 3, color: "mirrored fuchsia" },
      { count: 2, color: "striped green" },
    ],
  },
  {
    color: "bright white",
    content: [
      { count: 2, color: "dark green" },
      { count: 4, color: "bright yellow" },
    ],
  },
  {
    color: "dotted cyan",
    content: [
      { count: 1, color: "posh orange" },
      { count: 2, color: "faded white" },
    ],
  },
  { color: "vibrant orange", content: [{ count: 1, color: "faded silver" }] },
  {
    color: "plaid lime",
    content: [
      { count: 4, color: "shiny olive" },
      { count: 5, color: "dim olive" },
      { count: 1, color: "dotted gray" },
      { count: 2, color: "clear black" },
    ],
  },
  {
    color: "pale green",
    content: [
      { count: 2, color: "plaid silver" },
      { count: 5, color: "dark blue" },
      { count: 1, color: "muted blue" },
      { count: 3, color: "posh white" },
    ],
  },
  {
    color: "dotted brown",
    content: [
      { count: 3, color: "dark bronze" },
      { count: 5, color: "posh fuchsia" },
      { count: 3, color: "plaid cyan" },
    ],
  },
  {
    color: "muted yellow",
    content: [
      { count: 2, color: "vibrant fuchsia" },
      { count: 4, color: "striped brown" },
      { count: 3, color: "muted tan" },
      { count: 1, color: "shiny plum" },
    ],
  },
  {
    color: "light crimson",
    content: [
      { count: 3, color: "bright lavender" },
      { count: 1, color: "shiny olive" },
    ],
  },
  {
    color: "striped black",
    content: [
      { count: 2, color: "drab aqua" },
      { count: 1, color: "clear black" },
      { count: 5, color: "mirrored teal" },
      { count: 3, color: "dark chartreuse" },
    ],
  },
  { color: "faded olive", content: [{ count: 2, color: "drab aqua" }] },
  { color: "clear black", content: [] },
  { color: "dark coral", content: [{ count: 4, color: "drab magenta" }] },
  {
    color: "striped brown",
    content: [
      { count: 1, color: "bright lavender" },
      { count: 1, color: "wavy lime" },
      { count: 2, color: "dark chartreuse" },
      { count: 2, color: "dim aqua" },
    ],
  },
  {
    color: "dull blue",
    content: [
      { count: 5, color: "plaid purple" },
      { count: 1, color: "drab chartreuse" },
    ],
  },
  {
    color: "dark indigo",
    content: [
      { count: 5, color: "vibrant white" },
      { count: 3, color: "bright lavender" },
      { count: 1, color: "bright tan" },
      { count: 4, color: "drab aqua" },
    ],
  },
  { color: "shiny tomato", content: [{ count: 1, color: "dark chartreuse" }] },
  {
    color: "plaid maroon",
    content: [
      { count: 5, color: "striped black" },
      { count: 5, color: "drab green" },
    ],
  },
  {
    color: "plaid brown",
    content: [
      { count: 5, color: "plaid indigo" },
      { count: 5, color: "shiny gray" },
    ],
  },
  { color: "dark yellow", content: [{ count: 2, color: "vibrant cyan" }] },
  { color: "bright maroon", content: [{ count: 4, color: "shiny beige" }] },
  {
    color: "muted maroon",
    content: [
      { count: 3, color: "striped bronze" },
      { count: 4, color: "clear gold" },
      { count: 1, color: "light red" },
    ],
  },
  {
    color: "plaid purple",
    content: [
      { count: 1, color: "faded magenta" },
      { count: 5, color: "dotted turquoise" },
    ],
  },
  {
    color: "wavy chartreuse",
    content: [
      { count: 2, color: "clear purple" },
      { count: 2, color: "drab green" },
      { count: 3, color: "wavy maroon" },
    ],
  },
  {
    color: "posh indigo",
    content: [
      { count: 3, color: "striped crimson" },
      { count: 5, color: "mirrored maroon" },
      { count: 1, color: "mirrored crimson" },
      { count: 2, color: "drab orange" },
    ],
  },
  { color: "drab black", content: [{ count: 1, color: "drab plum" }] },
  {
    color: "striped gray",
    content: [
      { count: 5, color: "shiny teal" },
      { count: 2, color: "vibrant magenta" },
    ],
  },
  {
    color: "light yellow",
    content: [
      { count: 4, color: "clear black" },
      { count: 2, color: "dim olive" },
      { count: 5, color: "wavy lavender" },
      { count: 2, color: "pale chartreuse" },
    ],
  },
  {
    color: "faded tomato",
    content: [
      { count: 3, color: "dark aqua" },
      { count: 3, color: "pale turquoise" },
      { count: 4, color: "pale purple" },
      { count: 3, color: "posh plum" },
    ],
  },
  {
    color: "posh crimson",
    content: [
      { count: 1, color: "drab green" },
      { count: 3, color: "dim aqua" },
    ],
  },
  { color: "muted tomato", content: [{ count: 1, color: "dim orange" }] },
  { color: "bright indigo", content: [{ count: 1, color: "posh brown" }] },
  {
    color: "dotted silver",
    content: [
      { count: 4, color: "vibrant teal" },
      { count: 3, color: "wavy violet" },
      { count: 4, color: "dark black" },
      { count: 3, color: "dotted orange" },
    ],
  },
  {
    color: "dark fuchsia",
    content: [
      { count: 3, color: "vibrant salmon" },
      { count: 3, color: "dotted gray" },
      { count: 2, color: "dull chartreuse" },
    ],
  },
  {
    color: "dull indigo",
    content: [
      { count: 5, color: "dark gold" },
      { count: 1, color: "light crimson" },
      { count: 2, color: "light bronze" },
      { count: 5, color: "vibrant chartreuse" },
    ],
  },
  {
    color: "light gold",
    content: [
      { count: 1, color: "plaid indigo" },
      { count: 1, color: "mirrored crimson" },
      { count: 1, color: "dull indigo" },
    ],
  },
  {
    color: "dark cyan",
    content: [
      { count: 2, color: "dull brown" },
      { count: 5, color: "bright fuchsia" },
      { count: 3, color: "striped purple" },
    ],
  },
  {
    color: "posh chartreuse",
    content: [
      { count: 1, color: "light gray" },
      { count: 5, color: "wavy tomato" },
    ],
  },
  {
    color: "bright gold",
    content: [
      { count: 1, color: "clear teal" },
      { count: 1, color: "dim purple" },
      { count: 5, color: "striped bronze" },
    ],
  },
  {
    color: "striped magenta",
    content: [
      { count: 5, color: "vibrant chartreuse" },
      { count: 3, color: "wavy olive" },
      { count: 5, color: "mirrored orange" },
    ],
  },
  {
    color: "mirrored gold",
    content: [
      { count: 2, color: "striped fuchsia" },
      { count: 5, color: "wavy yellow" },
      { count: 5, color: "dull lime" },
    ],
  },
  { color: "dark chartreuse", content: [] },
  {
    color: "dim bronze",
    content: [
      { count: 3, color: "dim coral" },
      { count: 1, color: "light plum" },
      { count: 1, color: "posh orange" },
    ],
  },
  {
    color: "dim coral",
    content: [
      { count: 3, color: "shiny teal" },
      { count: 5, color: "plaid bronze" },
      { count: 1, color: "vibrant magenta" },
      { count: 5, color: "faded yellow" },
    ],
  },
  {
    color: "bright lavender",
    content: [
      { count: 4, color: "bright indigo" },
      { count: 4, color: "faded yellow" },
      { count: 5, color: "posh black" },
    ],
  },
  {
    color: "posh cyan",
    content: [
      { count: 1, color: "dotted violet" },
      { count: 1, color: "shiny violet" },
      { count: 2, color: "dull chartreuse" },
      { count: 2, color: "wavy turquoise" },
    ],
  },
  {
    color: "wavy lavender",
    content: [
      { count: 2, color: "dim fuchsia" },
      { count: 1, color: "dotted red" },
      { count: 5, color: "clear maroon" },
      { count: 1, color: "dull lime" },
    ],
  },
  {
    color: "vibrant salmon",
    content: [
      { count: 4, color: "posh indigo" },
      { count: 2, color: "faded tomato" },
    ],
  },
  {
    color: "clear gray",
    content: [
      { count: 5, color: "dim olive" },
      { count: 1, color: "striped turquoise" },
      { count: 4, color: "striped tan" },
      { count: 4, color: "plaid lime" },
    ],
  },
  {
    color: "bright cyan",
    content: [
      { count: 1, color: "pale turquoise" },
      { count: 4, color: "vibrant white" },
      { count: 4, color: "muted gray" },
      { count: 2, color: "clear orange" },
    ],
  },
  {
    color: "posh purple",
    content: [
      { count: 1, color: "striped tan" },
      { count: 1, color: "dim aqua" },
      { count: 4, color: "light bronze" },
      { count: 1, color: "bright chartreuse" },
    ],
  },
  { color: "dim yellow", content: [{ count: 1, color: "posh lavender" }] },
  {
    color: "dim blue",
    content: [
      { count: 4, color: "light indigo" },
      { count: 5, color: "shiny fuchsia" },
      { count: 5, color: "drab fuchsia" },
      { count: 5, color: "dark purple" },
    ],
  },
  {
    color: "wavy cyan",
    content: [
      { count: 3, color: "clear beige" },
      { count: 4, color: "striped blue" },
      { count: 2, color: "faded coral" },
    ],
  },
  {
    color: "mirrored orange",
    content: [
      { count: 5, color: "dark bronze" },
      { count: 3, color: "striped blue" },
      { count: 2, color: "posh orange" },
    ],
  },
  {
    color: "muted orange",
    content: [
      { count: 5, color: "dotted violet" },
      { count: 5, color: "bright violet" },
      { count: 2, color: "vibrant salmon" },
    ],
  },
  {
    color: "vibrant coral",
    content: [
      { count: 5, color: "bright cyan" },
      { count: 5, color: "shiny indigo" },
      { count: 2, color: "bright bronze" },
    ],
  },
  {
    color: "bright gray",
    content: [
      { count: 1, color: "clear red" },
      { count: 5, color: "dull orange" },
      { count: 4, color: "bright cyan" },
    ],
  },
  { color: "muted bronze", content: [{ count: 4, color: "dim lavender" }] },
  {
    color: "shiny blue",
    content: [
      { count: 2, color: "dim chartreuse" },
      { count: 3, color: "muted beige" },
      { count: 5, color: "mirrored plum" },
    ],
  },
  {
    color: "posh bronze",
    content: [
      { count: 3, color: "dull purple" },
      { count: 4, color: "wavy magenta" },
    ],
  },
  {
    color: "faded magenta",
    content: [
      { count: 5, color: "clear tomato" },
      { count: 5, color: "dull plum" },
      { count: 4, color: "light red" },
    ],
  },
  {
    color: "posh tan",
    content: [
      { count: 3, color: "clear olive" },
      { count: 4, color: "clear lavender" },
    ],
  },
  { color: "muted teal", content: [{ count: 1, color: "striped magenta" }] },
  {
    color: "dull brown",
    content: [
      { count: 2, color: "drab black" },
      { count: 3, color: "striped bronze" },
    ],
  },
  {
    color: "shiny white",
    content: [
      { count: 3, color: "faded blue" },
      { count: 3, color: "dotted salmon" },
      { count: 2, color: "drab black" },
    ],
  },
  {
    color: "wavy red",
    content: [
      { count: 4, color: "vibrant magenta" },
      { count: 3, color: "muted green" },
      { count: 4, color: "mirrored teal" },
    ],
  },
  {
    color: "dim silver",
    content: [
      { count: 3, color: "striped purple" },
      { count: 5, color: "drab violet" },
      { count: 2, color: "striped bronze" },
      { count: 3, color: "wavy green" },
    ],
  },
  {
    color: "dull magenta",
    content: [
      { count: 1, color: "dim crimson" },
      { count: 1, color: "light aqua" },
    ],
  },
  {
    color: "dull plum",
    content: [
      { count: 5, color: "dim indigo" },
      { count: 2, color: "dotted red" },
    ],
  },
  {
    color: "mirrored lime",
    content: [
      { count: 3, color: "bright tan" },
      { count: 3, color: "bright orange" },
    ],
  },
  {
    color: "muted green",
    content: [
      { count: 3, color: "faded yellow" },
      { count: 2, color: "drab maroon" },
      { count: 1, color: "dark chartreuse" },
      { count: 2, color: "mirrored teal" },
    ],
  },
  {
    color: "clear crimson",
    content: [
      { count: 4, color: "posh fuchsia" },
      { count: 2, color: "dull aqua" },
      { count: 3, color: "faded tan" },
    ],
  },
  { color: "drab aqua", content: [] },
  {
    color: "dull chartreuse",
    content: [
      { count: 4, color: "dotted gray" },
      { count: 2, color: "dim red" },
      { count: 3, color: "dull yellow" },
    ],
  },
  { color: "posh aqua", content: [{ count: 5, color: "striped orange" }] },
  {
    color: "dark blue",
    content: [
      { count: 2, color: "dark gold" },
      { count: 2, color: "faded yellow" },
    ],
  },
  {
    color: "posh red",
    content: [
      { count: 2, color: "mirrored brown" },
      { count: 4, color: "shiny orange" },
      { count: 4, color: "striped lavender" },
      { count: 5, color: "light turquoise" },
    ],
  },
  {
    color: "dim lime",
    content: [
      { count: 1, color: "muted turquoise" },
      { count: 2, color: "posh gold" },
      { count: 2, color: "dull violet" },
      { count: 3, color: "dotted lavender" },
    ],
  },
  { color: "faded yellow", content: [] },
  {
    color: "dark red",
    content: [
      { count: 2, color: "posh beige" },
      { count: 3, color: "shiny tomato" },
      { count: 3, color: "light salmon" },
    ],
  },
  { color: "dull purple", content: [{ count: 3, color: "bright red" }] },
  {
    color: "dark violet",
    content: [
      { count: 4, color: "clear salmon" },
      { count: 2, color: "dark gold" },
      { count: 1, color: "dotted cyan" },
      { count: 3, color: "dim purple" },
    ],
  },
  {
    color: "muted indigo",
    content: [
      { count: 5, color: "striped bronze" },
      { count: 4, color: "posh olive" },
      { count: 5, color: "striped purple" },
    ],
  },
  {
    color: "plaid crimson",
    content: [
      { count: 1, color: "bright violet" },
      { count: 3, color: "bright red" },
      { count: 5, color: "clear orange" },
      { count: 2, color: "dark purple" },
    ],
  },
  { color: "muted silver", content: [{ count: 1, color: "clear tomato" }] },
  { color: "dull black", content: [{ count: 4, color: "striped gold" }] },
  {
    color: "faded red",
    content: [
      { count: 1, color: "posh indigo" },
      { count: 2, color: "striped crimson" },
      { count: 3, color: "muted indigo" },
    ],
  },
  {
    color: "muted lime",
    content: [
      { count: 5, color: "plaid lavender" },
      { count: 4, color: "dim fuchsia" },
    ],
  },
  {
    color: "mirrored crimson",
    content: [
      { count: 4, color: "light bronze" },
      { count: 1, color: "wavy red" },
      { count: 4, color: "drab violet" },
      { count: 4, color: "faded white" },
    ],
  },
  { color: "posh gray", content: [{ count: 3, color: "dim olive" }] },
  {
    color: "posh violet",
    content: [
      { count: 4, color: "mirrored white" },
      { count: 4, color: "dim indigo" },
    ],
  },
  { color: "plaid black", content: [{ count: 5, color: "bright purple" }] },
  {
    color: "vibrant indigo",
    content: [
      { count: 3, color: "mirrored blue" },
      { count: 4, color: "dim teal" },
      { count: 2, color: "dim beige" },
      { count: 1, color: "light black" },
    ],
  },
  {
    color: "mirrored beige",
    content: [
      { count: 3, color: "plaid tomato" },
      { count: 5, color: "faded black" },
      { count: 3, color: "vibrant aqua" },
      { count: 4, color: "striped coral" },
    ],
  },
  { color: "pale turquoise", content: [{ count: 2, color: "faded beige" }] },
  {
    color: "striped tomato",
    content: [
      { count: 5, color: "dull indigo" },
      { count: 2, color: "dull plum" },
    ],
  },
  {
    color: "muted black",
    content: [
      { count: 3, color: "faded plum" },
      { count: 5, color: "vibrant tan" },
    ],
  },
  {
    color: "dark crimson",
    content: [
      { count: 2, color: "muted black" },
      { count: 2, color: "faded gray" },
    ],
  },
  {
    color: "dark turquoise",
    content: [
      { count: 3, color: "posh olive" },
      { count: 1, color: "striped crimson" },
    ],
  },
  {
    color: "faded crimson",
    content: [
      { count: 1, color: "posh tomato" },
      { count: 2, color: "dotted tomato" },
      { count: 1, color: "shiny lime" },
    ],
  },
  { color: "mirrored yellow", content: [{ count: 2, color: "wavy gold" }] },
  {
    color: "dull silver",
    content: [
      { count: 5, color: "plaid blue" },
      { count: 4, color: "faded green" },
    ],
  },
  {
    color: "pale salmon",
    content: [
      { count: 1, color: "clear fuchsia" },
      { count: 3, color: "muted white" },
      { count: 4, color: "pale violet" },
      { count: 2, color: "vibrant yellow" },
    ],
  },
  { color: "pale plum", content: [{ count: 3, color: "faded green" }] },
  { color: "shiny turquoise", content: [{ count: 4, color: "shiny maroon" }] },
  {
    color: "plaid magenta",
    content: [
      { count: 5, color: "posh salmon" },
      { count: 4, color: "muted tan" },
      { count: 3, color: "light silver" },
    ],
  },
  {
    color: "mirrored black",
    content: [
      { count: 1, color: "pale plum" },
      { count: 5, color: "wavy gold" },
      { count: 1, color: "mirrored magenta" },
      { count: 4, color: "clear lime" },
    ],
  },
  {
    color: "mirrored magenta",
    content: [
      { count: 4, color: "clear beige" },
      { count: 2, color: "plaid indigo" },
      { count: 4, color: "faded coral" },
      { count: 2, color: "clear tomato" },
    ],
  },
  {
    color: "striped lime",
    content: [
      { count: 5, color: "muted white" },
      { count: 4, color: "faded tan" },
      { count: 1, color: "dull plum" },
    ],
  },
  {
    color: "pale coral",
    content: [
      { count: 2, color: "posh coral" },
      { count: 2, color: "mirrored turquoise" },
      { count: 4, color: "clear yellow" },
      { count: 4, color: "wavy teal" },
    ],
  },
  {
    color: "dotted gray",
    content: [
      { count: 2, color: "drab aqua" },
      { count: 1, color: "faded coral" },
      { count: 3, color: "clear black" },
    ],
  },
  {
    color: "faded tan",
    content: [
      { count: 1, color: "shiny salmon" },
      { count: 5, color: "drab plum" },
      { count: 2, color: "dotted lavender" },
      { count: 3, color: "shiny yellow" },
    ],
  },
  {
    color: "dull aqua",
    content: [
      { count: 2, color: "faded black" },
      { count: 5, color: "bright indigo" },
    ],
  },
  {
    color: "dotted violet",
    content: [
      { count: 2, color: "posh green" },
      { count: 3, color: "plaid lime" },
    ],
  },
  {
    color: "faded aqua",
    content: [
      { count: 3, color: "clear gold" },
      { count: 3, color: "striped bronze" },
    ],
  },
  {
    color: "vibrant yellow",
    content: [
      { count: 4, color: "pale magenta" },
      { count: 2, color: "pale black" },
    ],
  },
  {
    color: "posh silver",
    content: [
      { count: 3, color: "shiny black" },
      { count: 2, color: "dull purple" },
      { count: 1, color: "light lime" },
      { count: 5, color: "muted silver" },
    ],
  },
  {
    color: "vibrant purple",
    content: [
      { count: 5, color: "pale olive" },
      { count: 3, color: "muted bronze" },
    ],
  },
  {
    color: "drab orange",
    content: [
      { count: 4, color: "dark aqua" },
      { count: 3, color: "posh black" },
      { count: 4, color: "shiny beige" },
    ],
  },
  {
    color: "clear green",
    content: [
      { count: 1, color: "dark lime" },
      { count: 2, color: "bright orange" },
      { count: 2, color: "mirrored maroon" },
      { count: 3, color: "dark bronze" },
    ],
  },
  { color: "dark tomato", content: [{ count: 2, color: "drab yellow" }] },
  {
    color: "clear blue",
    content: [
      { count: 3, color: "pale bronze" },
      { count: 3, color: "drab aqua" },
      { count: 3, color: "striped tan" },
      { count: 1, color: "shiny tan" },
    ],
  },
  {
    color: "muted red",
    content: [
      { count: 3, color: "dark olive" },
      { count: 3, color: "faded teal" },
    ],
  },
  {
    color: "wavy olive",
    content: [
      { count: 5, color: "faded chartreuse" },
      { count: 2, color: "striped black" },
    ],
  },
  {
    color: "pale red",
    content: [
      { count: 4, color: "bright orange" },
      { count: 5, color: "drab orange" },
      { count: 2, color: "striped brown" },
      { count: 2, color: "striped bronze" },
    ],
  },
  { color: "dim brown", content: [{ count: 1, color: "posh purple" }] },
  {
    color: "dotted lavender",
    content: [
      { count: 2, color: "bright chartreuse" },
      { count: 2, color: "pale gray" },
    ],
  },
  {
    color: "clear aqua",
    content: [
      { count: 1, color: "vibrant plum" },
      { count: 5, color: "dark plum" },
    ],
  },
  { color: "wavy fuchsia", content: [{ count: 1, color: "pale purple" }] },
  {
    color: "dim tomato",
    content: [
      { count: 2, color: "faded red" },
      { count: 3, color: "clear teal" },
      { count: 4, color: "striped chartreuse" },
      { count: 4, color: "shiny green" },
    ],
  },
  { color: "striped maroon", content: [{ count: 4, color: "posh coral" }] },
  {
    color: "bright yellow",
    content: [
      { count: 4, color: "dark tomato" },
      { count: 3, color: "pale gold" },
      { count: 4, color: "dark gold" },
      { count: 5, color: "shiny tomato" },
    ],
  },
  { color: "pale maroon", content: [{ count: 3, color: "posh cyan" }] },
  { color: "clear lime", content: [{ count: 4, color: "faded coral" }] },
  {
    color: "light violet",
    content: [
      { count: 4, color: "vibrant magenta" },
      { count: 3, color: "bright yellow" },
      { count: 3, color: "dull chartreuse" },
    ],
  },
  {
    color: "dotted maroon",
    content: [
      { count: 5, color: "mirrored salmon" },
      { count: 1, color: "striped tomato" },
      { count: 5, color: "dim coral" },
    ],
  },
  {
    color: "pale violet",
    content: [
      { count: 1, color: "dotted tan" },
      { count: 2, color: "wavy white" },
    ],
  },
  { color: "clear salmon", content: [] },
  {
    color: "dotted tan",
    content: [
      { count: 3, color: "posh beige" },
      { count: 4, color: "bright chartreuse" },
      { count: 5, color: "posh fuchsia" },
      { count: 2, color: "pale gray" },
    ],
  },
  {
    color: "vibrant tan",
    content: [
      { count: 4, color: "dark plum" },
      { count: 3, color: "clear teal" },
      { count: 2, color: "faded yellow" },
      { count: 3, color: "light chartreuse" },
    ],
  },
  { color: "pale lime", content: [{ count: 4, color: "muted crimson" }] },
  {
    color: "muted blue",
    content: [
      { count: 2, color: "light salmon" },
      { count: 1, color: "bright aqua" },
    ],
  },
  {
    color: "plaid silver",
    content: [
      { count: 5, color: "striped magenta" },
      { count: 2, color: "dull chartreuse" },
    ],
  },
  {
    color: "clear gold",
    content: [
      { count: 5, color: "shiny gray" },
      { count: 2, color: "vibrant white" },
    ],
  },
  {
    color: "dim salmon",
    content: [
      { count: 3, color: "striped olive" },
      { count: 1, color: "faded teal" },
      { count: 3, color: "posh gold" },
    ],
  },
  {
    color: "muted gold",
    content: [
      { count: 5, color: "shiny lavender" },
      { count: 5, color: "bright orange" },
      { count: 3, color: "dark lime" },
      { count: 2, color: "dim blue" },
    ],
  },
  { color: "dotted orange", content: [{ count: 4, color: "muted lavender" }] },
  {
    color: "plaid yellow",
    content: [
      { count: 2, color: "posh green" },
      { count: 5, color: "faded white" },
      { count: 5, color: "plaid blue" },
    ],
  },
  {
    color: "posh yellow",
    content: [
      { count: 2, color: "shiny lime" },
      { count: 2, color: "mirrored cyan" },
    ],
  },
  { color: "wavy lime", content: [{ count: 3, color: "vibrant plum" }] },
  {
    color: "clear teal",
    content: [
      { count: 3, color: "mirrored blue" },
      { count: 3, color: "posh maroon" },
      { count: 2, color: "muted cyan" },
      { count: 2, color: "drab aqua" },
    ],
  },
  {
    color: "faded maroon",
    content: [
      { count: 1, color: "dull magenta" },
      { count: 3, color: "dull green" },
      { count: 3, color: "muted coral" },
      { count: 5, color: "pale beige" },
    ],
  },
  {
    color: "drab salmon",
    content: [
      { count: 5, color: "faded tomato" },
      { count: 3, color: "clear green" },
    ],
  },
  {
    color: "pale orange",
    content: [
      { count: 4, color: "clear orange" },
      { count: 4, color: "wavy fuchsia" },
      { count: 5, color: "clear cyan" },
      { count: 5, color: "dark red" },
    ],
  },
  {
    color: "clear indigo",
    content: [
      { count: 1, color: "shiny gold" },
      { count: 2, color: "light aqua" },
      { count: 2, color: "bright orange" },
    ],
  },
  {
    color: "faded gold",
    content: [
      { count: 1, color: "posh maroon" },
      { count: 3, color: "faded indigo" },
      { count: 5, color: "muted purple" },
      { count: 3, color: "wavy tomato" },
    ],
  },
  {
    color: "drab cyan",
    content: [
      { count: 1, color: "wavy white" },
      { count: 3, color: "dotted turquoise" },
    ],
  },
  { color: "striped blue", content: [{ count: 3, color: "shiny beige" }] },
  { color: "vibrant black", content: [{ count: 3, color: "bright blue" }] },
  {
    color: "striped green",
    content: [
      { count: 5, color: "shiny orange" },
      { count: 5, color: "muted tomato" },
      { count: 1, color: "clear teal" },
    ],
  },
  {
    color: "posh maroon",
    content: [
      { count: 1, color: "striped purple" },
      { count: 3, color: "striped gray" },
      { count: 1, color: "dark chartreuse" },
      { count: 5, color: "vibrant magenta" },
    ],
  },
  {
    color: "dark beige",
    content: [
      { count: 3, color: "drab fuchsia" },
      { count: 2, color: "mirrored cyan" },
      { count: 1, color: "striped crimson" },
    ],
  },
  { color: "wavy crimson", content: [{ count: 1, color: "mirrored aqua" }] },
  {
    color: "striped gold",
    content: [
      { count: 1, color: "vibrant tomato" },
      { count: 5, color: "faded aqua" },
      { count: 5, color: "plaid salmon" },
      { count: 3, color: "mirrored blue" },
    ],
  },
  {
    color: "dim plum",
    content: [
      { count: 1, color: "posh orange" },
      { count: 4, color: "vibrant chartreuse" },
    ],
  },
  {
    color: "mirrored cyan",
    content: [
      { count: 2, color: "vibrant tomato" },
      { count: 4, color: "clear black" },
      { count: 4, color: "striped gold" },
    ],
  },
  {
    color: "plaid lavender",
    content: [
      { count: 4, color: "shiny lime" },
      { count: 4, color: "pale gold" },
      { count: 3, color: "posh teal" },
      { count: 1, color: "dull lavender" },
    ],
  },
  { color: "wavy magenta", content: [{ count: 1, color: "dim red" }] },
  {
    color: "wavy bronze",
    content: [
      { count: 4, color: "shiny bronze" },
      { count: 1, color: "drab turquoise" },
      { count: 5, color: "muted tan" },
      { count: 2, color: "dotted aqua" },
    ],
  },
  { color: "drab coral", content: [{ count: 3, color: "dim lime" }] },
  {
    color: "dull teal",
    content: [
      { count: 1, color: "vibrant aqua" },
      { count: 4, color: "wavy lavender" },
      { count: 1, color: "dark purple" },
      { count: 4, color: "dark violet" },
    ],
  },
  {
    color: "faded beige",
    content: [
      { count: 5, color: "plaid indigo" },
      { count: 5, color: "clear beige" },
      { count: 5, color: "dull violet" },
    ],
  },
  { color: "mirrored gray", content: [{ count: 3, color: "light bronze" }] },
  {
    color: "dark green",
    content: [
      { count: 1, color: "dark violet" },
      { count: 1, color: "posh black" },
      { count: 4, color: "posh fuchsia" },
      { count: 1, color: "shiny olive" },
    ],
  },
  { color: "posh coral", content: [{ count: 1, color: "striped purple" }] },
  { color: "muted salmon", content: [{ count: 1, color: "bright orange" }] },
  { color: "mirrored teal", content: [] },
  {
    color: "dotted turquoise",
    content: [
      { count: 5, color: "dark tomato" },
      { count: 1, color: "plaid plum" },
      { count: 2, color: "wavy gold" },
    ],
  },
  {
    color: "wavy tan",
    content: [
      { count: 3, color: "dim cyan" },
      { count: 2, color: "dim maroon" },
    ],
  },
  {
    color: "light tomato",
    content: [
      { count: 5, color: "muted cyan" },
      { count: 2, color: "dotted green" },
      { count: 4, color: "dark aqua" },
    ],
  },
  {
    color: "mirrored green",
    content: [
      { count: 5, color: "light tomato" },
      { count: 3, color: "dim magenta" },
      { count: 4, color: "drab maroon" },
    ],
  },
  {
    color: "bright black",
    content: [
      { count: 2, color: "mirrored violet" },
      { count: 3, color: "dull brown" },
      { count: 5, color: "clear gray" },
      { count: 3, color: "dull chartreuse" },
    ],
  },
  {
    color: "bright silver",
    content: [
      { count: 1, color: "dotted brown" },
      { count: 4, color: "vibrant yellow" },
    ],
  },
  {
    color: "pale black",
    content: [
      { count: 5, color: "drab magenta" },
      { count: 5, color: "vibrant magenta" },
    ],
  },
  {
    color: "wavy indigo",
    content: [
      { count: 2, color: "dotted green" },
      { count: 1, color: "shiny orange" },
      { count: 1, color: "dark lime" },
      { count: 1, color: "mirrored blue" },
    ],
  },
  {
    color: "shiny fuchsia",
    content: [
      { count: 1, color: "muted lavender" },
      { count: 5, color: "posh beige" },
      { count: 3, color: "clear salmon" },
      { count: 3, color: "posh brown" },
    ],
  },
  {
    color: "muted white",
    content: [
      { count: 4, color: "posh orange" },
      { count: 4, color: "clear orange" },
    ],
  },
  {
    color: "shiny lavender",
    content: [
      { count: 3, color: "wavy olive" },
      { count: 3, color: "dull crimson" },
    ],
  },
  { color: "clear violet", content: [{ count: 5, color: "shiny plum" }] },
  {
    color: "striped purple",
    content: [
      { count: 2, color: "drab maroon" },
      { count: 2, color: "vibrant magenta" },
      { count: 3, color: "shiny teal" },
    ],
  },
  { color: "clear tomato", content: [{ count: 3, color: "posh brown" }] },
  {
    color: "wavy purple",
    content: [
      { count: 4, color: "striped indigo" },
      { count: 5, color: "striped crimson" },
    ],
  },
  {
    color: "dark teal",
    content: [
      { count: 2, color: "dim coral" },
      { count: 5, color: "dim fuchsia" },
    ],
  },
  { color: "drab blue", content: [{ count: 5, color: "dim indigo" }] },
  {
    color: "faded gray",
    content: [
      { count: 5, color: "dull brown" },
      { count: 5, color: "mirrored brown" },
      { count: 3, color: "shiny magenta" },
      { count: 5, color: "dotted violet" },
    ],
  },
  {
    color: "faded violet",
    content: [
      { count: 3, color: "wavy purple" },
      { count: 2, color: "light maroon" },
    ],
  },
  {
    color: "pale brown",
    content: [
      { count: 5, color: "clear red" },
      { count: 2, color: "plaid chartreuse" },
    ],
  },
  {
    color: "faded white",
    content: [
      { count: 2, color: "drab maroon" },
      { count: 2, color: "shiny tomato" },
    ],
  },
  { color: "posh brown", content: [] },
  {
    color: "dotted olive",
    content: [
      { count: 3, color: "pale teal" },
      { count: 1, color: "bright purple" },
    ],
  },
  {
    color: "mirrored fuchsia",
    content: [
      { count: 1, color: "dull maroon" },
      { count: 5, color: "dull green" },
    ],
  },
  {
    color: "dark orange",
    content: [
      { count: 5, color: "striped lavender" },
      { count: 1, color: "posh black" },
      { count: 1, color: "dark purple" },
    ],
  },
  {
    color: "pale fuchsia",
    content: [
      { count: 5, color: "plaid fuchsia" },
      { count: 1, color: "dull lime" },
      { count: 4, color: "pale bronze" },
      { count: 2, color: "bright cyan" },
    ],
  },
  { color: "light brown", content: [{ count: 5, color: "vibrant bronze" }] },
  { color: "faded bronze", content: [{ count: 4, color: "dim silver" }] },
  {
    color: "vibrant chartreuse",
    content: [
      { count: 5, color: "shiny gray" },
      { count: 5, color: "muted lavender" },
      { count: 3, color: "posh fuchsia" },
    ],
  },
  {
    color: "dim teal",
    content: [
      { count: 4, color: "clear red" },
      { count: 2, color: "faded silver" },
      { count: 1, color: "muted blue" },
      { count: 5, color: "wavy yellow" },
    ],
  },
  {
    color: "dotted chartreuse",
    content: [
      { count: 4, color: "striped fuchsia" },
      { count: 3, color: "bright lavender" },
      { count: 3, color: "vibrant blue" },
      { count: 4, color: "mirrored maroon" },
    ],
  },
  { color: "dark purple", content: [{ count: 2, color: "posh black" }] },
  { color: "mirrored olive", content: [{ count: 3, color: "dotted brown" }] },
  {
    color: "shiny yellow",
    content: [
      { count: 4, color: "mirrored maroon" },
      { count: 3, color: "dark plum" },
      { count: 5, color: "muted green" },
      { count: 2, color: "clear aqua" },
    ],
  },
  {
    color: "drab turquoise",
    content: [
      { count: 3, color: "dim coral" },
      { count: 3, color: "dark chartreuse" },
    ],
  },
  {
    color: "striped orange",
    content: [
      { count: 4, color: "striped lime" },
      { count: 1, color: "dim tan" },
      { count: 3, color: "dull yellow" },
      { count: 2, color: "vibrant cyan" },
    ],
  },
  { color: "dull turquoise", content: [{ count: 3, color: "clear purple" }] },
  {
    color: "muted fuchsia",
    content: [
      { count: 2, color: "wavy tomato" },
      { count: 5, color: "dark maroon" },
      { count: 3, color: "muted tomato" },
      { count: 4, color: "vibrant plum" },
    ],
  },
  { color: "faded coral", content: [] },
  {
    color: "bright red",
    content: [
      { count: 1, color: "dull crimson" },
      { count: 5, color: "shiny teal" },
      { count: 4, color: "shiny gold" },
    ],
  },
  {
    color: "bright purple",
    content: [
      { count: 4, color: "plaid indigo" },
      { count: 5, color: "vibrant maroon" },
      { count: 2, color: "dim red" },
    ],
  },
  {
    color: "light plum",
    content: [
      { count: 3, color: "drab aqua" },
      { count: 5, color: "shiny tomato" },
      { count: 4, color: "drab violet" },
    ],
  },
  {
    color: "faded orange",
    content: [
      { count: 2, color: "shiny teal" },
      { count: 5, color: "striped gray" },
      { count: 2, color: "dull lavender" },
      { count: 4, color: "bright green" },
    ],
  },
  {
    color: "drab white",
    content: [
      { count: 1, color: "bright orange" },
      { count: 5, color: "drab lime" },
      { count: 5, color: "drab plum" },
    ],
  },
  { color: "posh lime", content: [{ count: 3, color: "faded chartreuse" }] },
  {
    color: "vibrant bronze",
    content: [
      { count: 3, color: "dim green" },
      { count: 1, color: "clear gold" },
      { count: 4, color: "striped bronze" },
      { count: 4, color: "pale chartreuse" },
    ],
  },
  {
    color: "dark olive",
    content: [
      { count: 5, color: "dim purple" },
      { count: 5, color: "mirrored maroon" },
    ],
  },
  {
    color: "striped plum",
    content: [
      { count: 1, color: "posh brown" },
      { count: 2, color: "muted cyan" },
      { count: 3, color: "faded yellow" },
      { count: 2, color: "wavy plum" },
    ],
  },
  {
    color: "plaid tan",
    content: [
      { count: 2, color: "mirrored lavender" },
      { count: 2, color: "striped silver" },
    ],
  },
  {
    color: "pale chartreuse",
    content: [
      { count: 5, color: "clear beige" },
      { count: 5, color: "clear maroon" },
      { count: 4, color: "wavy red" },
      { count: 5, color: "dotted tan" },
    ],
  },
  { color: "vibrant teal", content: [{ count: 3, color: "bright violet" }] },
  {
    color: "vibrant silver",
    content: [
      { count: 1, color: "shiny teal" },
      { count: 2, color: "pale purple" },
      { count: 5, color: "dark lime" },
    ],
  },
  {
    color: "wavy orange",
    content: [
      { count: 5, color: "bright bronze" },
      { count: 4, color: "vibrant aqua" },
      { count: 3, color: "pale indigo" },
      { count: 3, color: "muted beige" },
    ],
  },
  {
    color: "plaid tomato",
    content: [
      { count: 3, color: "faded teal" },
      { count: 1, color: "dull green" },
    ],
  },
  {
    color: "muted purple",
    content: [
      { count: 1, color: "muted lavender" },
      { count: 5, color: "light black" },
    ],
  },
  {
    color: "light red",
    content: [
      { count: 3, color: "posh green" },
      { count: 2, color: "striped purple" },
      { count: 1, color: "pale purple" },
    ],
  },
  {
    color: "shiny magenta",
    content: [
      { count: 4, color: "muted silver" },
      { count: 3, color: "drab turquoise" },
      { count: 2, color: "pale turquoise" },
    ],
  },
  { color: "light tan", content: [{ count: 5, color: "bright green" }] },
  {
    color: "clear fuchsia",
    content: [
      { count: 5, color: "faded coral" },
      { count: 2, color: "drab plum" },
      { count: 2, color: "clear beige" },
      { count: 1, color: "pale teal" },
    ],
  },
  { color: "vibrant aqua", content: [{ count: 3, color: "dim red" }] },
  { color: "posh tomato", content: [{ count: 5, color: "wavy magenta" }] },
  {
    color: "drab plum",
    content: [
      { count: 3, color: "clear salmon" },
      { count: 5, color: "mirrored teal" },
      { count: 4, color: "striped aqua" },
    ],
  },
  {
    color: "pale lavender",
    content: [
      { count: 4, color: "clear black" },
      { count: 4, color: "wavy green" },
    ],
  },
  {
    color: "drab beige",
    content: [
      { count: 3, color: "pale teal" },
      { count: 5, color: "mirrored aqua" },
      { count: 4, color: "posh beige" },
    ],
  },
  {
    color: "shiny aqua",
    content: [
      { count: 3, color: "striped black" },
      { count: 4, color: "striped blue" },
      { count: 4, color: "light salmon" },
      { count: 5, color: "striped crimson" },
    ],
  },
  {
    color: "dull white",
    content: [
      { count: 2, color: "faded brown" },
      { count: 3, color: "drab maroon" },
      { count: 5, color: "striped olive" },
      { count: 1, color: "bright fuchsia" },
    ],
  },
  { color: "vibrant gold", content: [{ count: 5, color: "dotted aqua" }] },
  {
    color: "dim turquoise",
    content: [
      { count: 2, color: "mirrored turquoise" },
      { count: 4, color: "dark tomato" },
      { count: 4, color: "clear lime" },
    ],
  },
  { color: "drab silver", content: [{ count: 3, color: "drab plum" }] },
  {
    color: "plaid plum",
    content: [
      { count: 3, color: "shiny gold" },
      { count: 1, color: "wavy red" },
      { count: 1, color: "plaid bronze" },
      { count: 5, color: "vibrant magenta" },
    ],
  },
  {
    color: "wavy gray",
    content: [
      { count: 2, color: "dim plum" },
      { count: 4, color: "light red" },
      { count: 3, color: "wavy orange" },
      { count: 5, color: "muted indigo" },
    ],
  },
  {
    color: "mirrored plum",
    content: [
      { count: 4, color: "dotted violet" },
      { count: 1, color: "dim maroon" },
    ],
  },
  {
    color: "muted crimson",
    content: [
      { count: 4, color: "mirrored teal" },
      { count: 4, color: "faded yellow" },
      { count: 5, color: "striped aqua" },
    ],
  },
  {
    color: "clear plum",
    content: [
      { count: 1, color: "dark indigo" },
      { count: 3, color: "shiny gold" },
      { count: 2, color: "dim gray" },
    ],
  },
  {
    color: "dull gray",
    content: [
      { count: 5, color: "striped bronze" },
      { count: 5, color: "plaid magenta" },
      { count: 3, color: "muted orange" },
    ],
  },
  {
    color: "plaid violet",
    content: [
      { count: 3, color: "dotted yellow" },
      { count: 1, color: "dotted aqua" },
      { count: 5, color: "clear orange" },
    ],
  },
  {
    color: "light beige",
    content: [
      { count: 4, color: "dim tomato" },
      { count: 1, color: "pale yellow" },
      { count: 3, color: "faded beige" },
      { count: 3, color: "dim yellow" },
    ],
  },
  { color: "plaid olive", content: [{ count: 5, color: "shiny tan" }] },
  { color: "faded fuchsia", content: [{ count: 4, color: "wavy maroon" }] },
  { color: "bright crimson", content: [{ count: 5, color: "bright orange" }] },
  { color: "drab chartreuse", content: [{ count: 4, color: "drab red" }] },
  {
    color: "dotted plum",
    content: [
      { count: 5, color: "striped blue" },
      { count: 5, color: "light gold" },
      { count: 4, color: "vibrant teal" },
    ],
  },
  {
    color: "muted plum",
    content: [
      { count: 5, color: "faded white" },
      { count: 5, color: "striped brown" },
      { count: 1, color: "posh brown" },
      { count: 5, color: "drab maroon" },
    ],
  },
  {
    color: "bright turquoise",
    content: [
      { count: 2, color: "dull indigo" },
      { count: 2, color: "mirrored tan" },
      { count: 5, color: "clear tomato" },
    ],
  },
  {
    color: "drab violet",
    content: [
      { count: 3, color: "clear black" },
      { count: 2, color: "mirrored teal" },
      { count: 5, color: "faded yellow" },
      { count: 4, color: "vibrant magenta" },
    ],
  },
  { color: "dotted blue", content: [{ count: 3, color: "posh black" }] },
  {
    color: "light silver",
    content: [
      { count: 5, color: "bright tan" },
      { count: 1, color: "dull silver" },
      { count: 5, color: "posh magenta" },
      { count: 5, color: "pale chartreuse" },
    ],
  },
  {
    color: "drab indigo",
    content: [
      { count: 1, color: "dark purple" },
      { count: 1, color: "pale magenta" },
    ],
  },
  {
    color: "pale teal",
    content: [
      { count: 5, color: "striped black" },
      { count: 1, color: "faded cyan" },
    ],
  },
  {
    color: "shiny coral",
    content: [
      { count: 1, color: "mirrored lavender" },
      { count: 5, color: "mirrored bronze" },
      { count: 1, color: "bright violet" },
    ],
  },
  {
    color: "shiny maroon",
    content: [
      { count: 3, color: "mirrored teal" },
      { count: 4, color: "light bronze" },
      { count: 5, color: "plaid yellow" },
    ],
  },
  {
    color: "dim indigo",
    content: [
      { count: 4, color: "clear salmon" },
      { count: 1, color: "pale gray" },
      { count: 5, color: "posh purple" },
    ],
  },
  {
    color: "dotted purple",
    content: [
      { count: 5, color: "shiny tan" },
      { count: 4, color: "posh indigo" },
      { count: 2, color: "light maroon" },
      { count: 4, color: "plaid plum" },
    ],
  },
  {
    color: "pale indigo",
    content: [
      { count: 2, color: "dark orange" },
      { count: 3, color: "bright chartreuse" },
      { count: 5, color: "pale purple" },
    ],
  },
  {
    color: "striped salmon",
    content: [
      { count: 3, color: "drab red" },
      { count: 1, color: "light silver" },
    ],
  },
  {
    color: "dim tan",
    content: [
      { count: 5, color: "muted silver" },
      { count: 5, color: "dull tomato" },
      { count: 2, color: "dull violet" },
    ],
  },
  {
    color: "striped cyan",
    content: [
      { count: 3, color: "striped green" },
      { count: 4, color: "muted cyan" },
      { count: 5, color: "wavy beige" },
    ],
  },
  { color: "posh gold", content: [{ count: 3, color: "dotted aqua" }] },
  { color: "drab magenta", content: [{ count: 1, color: "dim olive" }] },
  { color: "dull maroon", content: [{ count: 2, color: "dotted gray" }] },
  { color: "drab lavender", content: [{ count: 2, color: "dark tomato" }] },
  {
    color: "drab gray",
    content: [
      { count: 5, color: "faded plum" },
      { count: 2, color: "faded turquoise" },
      { count: 3, color: "shiny purple" },
    ],
  },
  {
    color: "drab bronze",
    content: [
      { count: 3, color: "shiny indigo" },
      { count: 2, color: "dull silver" },
      { count: 1, color: "pale indigo" },
    ],
  },
  {
    color: "dark gold",
    content: [
      { count: 1, color: "striped bronze" },
      { count: 3, color: "shiny gold" },
      { count: 4, color: "striped purple" },
      { count: 2, color: "wavy green" },
    ],
  },
  {
    color: "mirrored bronze",
    content: [
      { count: 3, color: "clear maroon" },
      { count: 2, color: "striped plum" },
      { count: 1, color: "vibrant plum" },
      { count: 5, color: "mirrored aqua" },
    ],
  },
  { color: "clear purple", content: [{ count: 2, color: "dim maroon" }] },
  { color: "bright blue", content: [{ count: 1, color: "vibrant aqua" }] },
  {
    color: "striped tan",
    content: [
      { count: 3, color: "clear beige" },
      { count: 5, color: "bright chartreuse" },
      { count: 5, color: "shiny beige" },
    ],
  },
  {
    color: "plaid blue",
    content: [
      { count: 4, color: "wavy red" },
      { count: 3, color: "clear salmon" },
      { count: 2, color: "striped black" },
      { count: 2, color: "drab aqua" },
    ],
  },
  {
    color: "striped coral",
    content: [
      { count: 2, color: "shiny aqua" },
      { count: 5, color: "light aqua" },
    ],
  },
  {
    color: "pale yellow",
    content: [
      { count: 3, color: "clear aqua" },
      { count: 4, color: "shiny indigo" },
      { count: 2, color: "dim purple" },
    ],
  },
  {
    color: "wavy black",
    content: [
      { count: 5, color: "light gray" },
      { count: 5, color: "dim green" },
      { count: 4, color: "muted cyan" },
    ],
  },
  {
    color: "shiny beige",
    content: [
      { count: 5, color: "faded coral" },
      { count: 1, color: "muted cyan" },
      { count: 2, color: "dark aqua" },
      { count: 4, color: "posh black" },
    ],
  },
  {
    color: "mirrored red",
    content: [
      { count: 3, color: "striped blue" },
      { count: 4, color: "bright yellow" },
    ],
  },
  { color: "plaid chartreuse", content: [{ count: 5, color: "dotted coral" }] },
  {
    color: "dark white",
    content: [
      { count: 3, color: "wavy white" },
      { count: 4, color: "bright violet" },
      { count: 5, color: "drab bronze" },
    ],
  },
  {
    color: "drab lime",
    content: [
      { count: 4, color: "striped silver" },
      { count: 5, color: "dim black" },
      { count: 1, color: "posh teal" },
    ],
  },
  {
    color: "clear magenta",
    content: [
      { count: 3, color: "dark tomato" },
      { count: 5, color: "drab silver" },
      { count: 2, color: "shiny indigo" },
      { count: 3, color: "mirrored silver" },
    ],
  },
  {
    color: "plaid white",
    content: [
      { count: 5, color: "dotted green" },
      { count: 2, color: "light silver" },
      { count: 3, color: "plaid lavender" },
      { count: 1, color: "posh purple" },
    ],
  },
  { color: "shiny indigo", content: [{ count: 2, color: "drab orange" }] },
  {
    color: "faded green",
    content: [
      { count: 3, color: "muted cyan" },
      { count: 5, color: "posh orange" },
      { count: 3, color: "plaid plum" },
    ],
  },
  {
    color: "striped bronze",
    content: [
      { count: 2, color: "light plum" },
      { count: 3, color: "shiny teal" },
      { count: 4, color: "posh black" },
    ],
  },
  {
    color: "pale olive",
    content: [
      { count: 5, color: "striped gray" },
      { count: 3, color: "striped lime" },
    ],
  },
  {
    color: "dim orange",
    content: [
      { count: 4, color: "mirrored maroon" },
      { count: 2, color: "mirrored teal" },
      { count: 4, color: "dim green" },
      { count: 2, color: "muted green" },
    ],
  },
  {
    color: "pale cyan",
    content: [
      { count: 1, color: "light tomato" },
      { count: 2, color: "dotted tan" },
    ],
  },
  {
    color: "muted chartreuse",
    content: [
      { count: 2, color: "dim coral" },
      { count: 3, color: "posh indigo" },
    ],
  },
  {
    color: "dull tan",
    content: [
      { count: 1, color: "clear teal" },
      { count: 2, color: "dark blue" },
      { count: 1, color: "bright magenta" },
    ],
  },
  {
    color: "bright olive",
    content: [
      { count: 3, color: "mirrored lavender" },
      { count: 4, color: "plaid bronze" },
    ],
  },
  {
    color: "dark maroon",
    content: [
      { count: 1, color: "clear blue" },
      { count: 4, color: "dotted gray" },
    ],
  },
  {
    color: "plaid coral",
    content: [
      { count: 4, color: "muted salmon" },
      { count: 3, color: "light teal" },
      { count: 4, color: "pale black" },
    ],
  },
  {
    color: "pale beige",
    content: [
      { count: 5, color: "pale lavender" },
      { count: 1, color: "shiny lime" },
      { count: 3, color: "shiny yellow" },
      { count: 5, color: "striped purple" },
    ],
  },
  { color: "vibrant brown", content: [{ count: 2, color: "drab yellow" }] },
  {
    color: "striped silver",
    content: [
      { count: 3, color: "vibrant aqua" },
      { count: 1, color: "faded silver" },
    ],
  },
  { color: "drab gold", content: [{ count: 1, color: "bright salmon" }] },
  { color: "vibrant red", content: [{ count: 1, color: "bright red" }] },
  {
    color: "striped chartreuse",
    content: [
      { count: 2, color: "faded chartreuse" },
      { count: 2, color: "striped tan" },
    ],
  },
  {
    color: "dotted yellow",
    content: [
      { count: 3, color: "drab aqua" },
      { count: 3, color: "dark gold" },
      { count: 3, color: "shiny orange" },
    ],
  },
  {
    color: "dotted gold",
    content: [
      { count: 2, color: "posh fuchsia" },
      { count: 3, color: "faded teal" },
      { count: 1, color: "pale black" },
      { count: 2, color: "clear indigo" },
    ],
  },
  {
    color: "dark bronze",
    content: [
      { count: 2, color: "pale tomato" },
      { count: 5, color: "posh fuchsia" },
      { count: 5, color: "muted green" },
    ],
  },
  { color: "drab brown", content: [{ count: 4, color: "dotted magenta" }] },
  {
    color: "dull bronze",
    content: [
      { count: 1, color: "posh white" },
      { count: 2, color: "muted teal" },
      { count: 5, color: "vibrant tan" },
    ],
  },
  {
    color: "bright brown",
    content: [
      { count: 3, color: "bright bronze" },
      { count: 2, color: "shiny tan" },
      { count: 3, color: "dull green" },
    ],
  },
  { color: "dotted green", content: [{ count: 4, color: "dim green" }] },
  {
    color: "vibrant turquoise",
    content: [
      { count: 1, color: "mirrored magenta" },
      { count: 2, color: "dark bronze" },
    ],
  },
  {
    color: "dim olive",
    content: [
      { count: 3, color: "mirrored blue" },
      { count: 5, color: "drab maroon" },
      { count: 1, color: "clear lime" },
    ],
  },
  { color: "posh plum", content: [{ count: 5, color: "pale indigo" }] },
  { color: "plaid bronze", content: [{ count: 1, color: "plaid blue" }] },
  {
    color: "shiny brown",
    content: [
      { count: 3, color: "shiny salmon" },
      { count: 1, color: "striped tan" },
      { count: 4, color: "clear aqua" },
    ],
  },
  {
    color: "clear olive",
    content: [
      { count: 4, color: "bright aqua" },
      { count: 1, color: "clear maroon" },
      { count: 4, color: "mirrored maroon" },
    ],
  },
  { color: "shiny black", content: [{ count: 3, color: "pale violet" }] },
  {
    color: "dotted lime",
    content: [
      { count: 5, color: "posh purple" },
      { count: 3, color: "dotted fuchsia" },
    ],
  },
  {
    color: "clear lavender",
    content: [
      { count: 4, color: "striped fuchsia" },
      { count: 3, color: "pale yellow" },
    ],
  },
  {
    color: "muted magenta",
    content: [
      { count: 3, color: "dim beige" },
      { count: 2, color: "wavy plum" },
    ],
  },
  {
    color: "muted turquoise",
    content: [
      { count: 1, color: "faded cyan" },
      { count: 3, color: "bright tan" },
      { count: 3, color: "striped brown" },
    ],
  },
  {
    color: "wavy gold",
    content: [
      { count: 5, color: "striped tan" },
      { count: 5, color: "muted salmon" },
      { count: 5, color: "dark gold" },
      { count: 3, color: "muted cyan" },
    ],
  },
  {
    color: "dull violet",
    content: [
      { count: 1, color: "faded white" },
      { count: 1, color: "striped black" },
      { count: 2, color: "vibrant maroon" },
      { count: 5, color: "faded yellow" },
    ],
  },
  {
    color: "clear beige",
    content: [
      { count: 1, color: "shiny tomato" },
      { count: 5, color: "posh brown" },
      { count: 1, color: "faded cyan" },
      { count: 3, color: "dotted gray" },
    ],
  },
  {
    color: "muted olive",
    content: [
      { count: 1, color: "dotted chartreuse" },
      { count: 3, color: "pale chartreuse" },
    ],
  },
  {
    color: "posh blue",
    content: [
      { count: 3, color: "light red" },
      { count: 1, color: "bright lavender" },
      { count: 4, color: "dim coral" },
      { count: 2, color: "clear lime" },
    ],
  },
  { color: "striped olive", content: [{ count: 3, color: "shiny gold" }] },
  { color: "mirrored tan", content: [{ count: 3, color: "muted tomato" }] },
  {
    color: "shiny plum",
    content: [
      { count: 2, color: "dark olive" },
      { count: 3, color: "wavy green" },
      { count: 2, color: "shiny lavender" },
    ],
  },
  {
    color: "plaid teal",
    content: [
      { count: 3, color: "posh purple" },
      { count: 1, color: "muted violet" },
      { count: 2, color: "dark tan" },
      { count: 1, color: "wavy gold" },
    ],
  },
  {
    color: "striped white",
    content: [
      { count: 1, color: "striped turquoise" },
      { count: 3, color: "shiny yellow" },
    ],
  },
  {
    color: "vibrant beige",
    content: [
      { count: 1, color: "clear olive" },
      { count: 4, color: "wavy lime" },
    ],
  },
  {
    color: "vibrant crimson",
    content: [
      { count: 4, color: "muted salmon" },
      { count: 5, color: "light bronze" },
    ],
  },
  {
    color: "muted aqua",
    content: [
      { count: 4, color: "plaid gold" },
      { count: 1, color: "clear olive" },
      { count: 1, color: "striped silver" },
      { count: 1, color: "pale purple" },
    ],
  },
  {
    color: "dotted indigo",
    content: [
      { count: 1, color: "light gray" },
      { count: 3, color: "dark olive" },
      { count: 1, color: "faded beige" },
    ],
  },
  {
    color: "wavy aqua",
    content: [
      { count: 3, color: "muted fuchsia" },
      { count: 1, color: "dull coral" },
      { count: 2, color: "dark tan" },
      { count: 1, color: "clear plum" },
    ],
  },
  {
    color: "dull coral",
    content: [
      { count: 1, color: "bright gold" },
      { count: 5, color: "dark salmon" },
      { count: 3, color: "mirrored fuchsia" },
      { count: 3, color: "bright crimson" },
    ],
  },
  {
    color: "vibrant plum",
    content: [
      { count: 1, color: "drab violet" },
      { count: 3, color: "shiny beige" },
    ],
  },
  {
    color: "mirrored white",
    content: [
      { count: 3, color: "drab bronze" },
      { count: 3, color: "shiny aqua" },
    ],
  },
  {
    color: "dotted fuchsia",
    content: [
      { count: 5, color: "vibrant cyan" },
      { count: 4, color: "mirrored teal" },
      { count: 1, color: "drab white" },
      { count: 5, color: "wavy black" },
    ],
  },
  {
    color: "bright chartreuse",
    content: [
      { count: 2, color: "shiny gold" },
      { count: 5, color: "dim green" },
    ],
  },
  { color: "dim gold", content: [{ count: 5, color: "muted purple" }] },
  {
    color: "posh olive",
    content: [
      { count: 2, color: "faded yellow" },
      { count: 5, color: "dotted gray" },
    ],
  },
  {
    color: "drab purple",
    content: [
      { count: 5, color: "vibrant beige" },
      { count: 4, color: "striped indigo" },
      { count: 3, color: "pale fuchsia" },
    ],
  },
  {
    color: "drab red",
    content: [
      { count: 1, color: "faded blue" },
      { count: 5, color: "dull indigo" },
      { count: 4, color: "posh purple" },
      { count: 4, color: "plaid bronze" },
    ],
  },
  {
    color: "shiny gray",
    content: [
      { count: 1, color: "drab violet" },
      { count: 1, color: "dotted yellow" },
    ],
  },
  {
    color: "shiny violet",
    content: [
      { count: 4, color: "clear salmon" },
      { count: 5, color: "shiny cyan" },
      { count: 2, color: "shiny tomato" },
    ],
  },
  {
    color: "plaid red",
    content: [
      { count: 5, color: "dull olive" },
      { count: 3, color: "pale teal" },
      { count: 2, color: "clear bronze" },
      { count: 1, color: "light bronze" },
    ],
  },
  {
    color: "clear coral",
    content: [
      { count: 1, color: "faded bronze" },
      { count: 5, color: "dull red" },
    ],
  },
  {
    color: "shiny purple",
    content: [
      { count: 4, color: "clear blue" },
      { count: 3, color: "pale red" },
      { count: 5, color: "dull tomato" },
      { count: 4, color: "shiny orange" },
    ],
  },
  {
    color: "dotted black",
    content: [
      { count: 4, color: "muted tan" },
      { count: 2, color: "dim tan" },
      { count: 2, color: "muted cyan" },
      { count: 2, color: "dull black" },
    ],
  },
  {
    color: "pale blue",
    content: [
      { count: 3, color: "wavy gray" },
      { count: 2, color: "drab violet" },
      { count: 2, color: "dull chartreuse" },
      { count: 5, color: "plaid yellow" },
    ],
  },
  {
    color: "mirrored lavender",
    content: [
      { count: 1, color: "wavy green" },
      { count: 3, color: "striped brown" },
    ],
  },
  {
    color: "plaid turquoise",
    content: [
      { count: 4, color: "clear gray" },
      { count: 1, color: "muted green" },
      { count: 3, color: "dull tan" },
      { count: 4, color: "shiny indigo" },
    ],
  },
  {
    color: "bright tan",
    content: [
      { count: 4, color: "shiny olive" },
      { count: 1, color: "clear salmon" },
      { count: 4, color: "bright indigo" },
      { count: 2, color: "drab maroon" },
    ],
  },
  {
    color: "dark lime",
    content: [
      { count: 4, color: "bright chartreuse" },
      { count: 3, color: "posh maroon" },
      { count: 1, color: "shiny tan" },
      { count: 5, color: "pale bronze" },
    ],
  },
  {
    color: "clear turquoise",
    content: [
      { count: 3, color: "bright orange" },
      { count: 1, color: "faded yellow" },
      { count: 5, color: "posh purple" },
      { count: 1, color: "vibrant coral" },
    ],
  },
  {
    color: "plaid beige",
    content: [
      { count: 4, color: "light blue" },
      { count: 5, color: "bright bronze" },
    ],
  },
  { color: "pale gold", content: [{ count: 1, color: "pale indigo" }] },
  {
    color: "light maroon",
    content: [
      { count: 3, color: "faded cyan" },
      { count: 5, color: "shiny lavender" },
      { count: 3, color: "drab yellow" },
    ],
  },
  {
    color: "posh white",
    content: [
      { count: 2, color: "mirrored lavender" },
      { count: 2, color: "posh teal" },
      { count: 3, color: "dull teal" },
      { count: 1, color: "plaid salmon" },
    ],
  },
  {
    color: "shiny tan",
    content: [
      { count: 2, color: "bright indigo" },
      { count: 3, color: "plaid lime" },
      { count: 3, color: "light chartreuse" },
    ],
  },
  { color: "wavy violet", content: [{ count: 2, color: "drab orange" }] },
  {
    color: "dotted bronze",
    content: [
      { count: 2, color: "mirrored aqua" },
      { count: 3, color: "dull fuchsia" },
    ],
  },
  { color: "dull lime", content: [{ count: 2, color: "bright lavender" }] },
  {
    color: "shiny salmon",
    content: [
      { count: 5, color: "posh olive" },
      { count: 3, color: "pale teal" },
    ],
  },
  { color: "light lime", content: [{ count: 1, color: "light plum" }] },
  { color: "mirrored silver", content: [{ count: 1, color: "clear purple" }] },
  { color: "dark magenta", content: [{ count: 1, color: "dotted yellow" }] },
  {
    color: "dotted white",
    content: [
      { count: 2, color: "vibrant aqua" },
      { count: 5, color: "pale green" },
      { count: 1, color: "dark fuchsia" },
    ],
  },
  {
    color: "posh beige",
    content: [
      { count: 4, color: "drab maroon" },
      { count: 3, color: "muted cyan" },
    ],
  },
  {
    color: "faded blue",
    content: [
      { count: 5, color: "muted tomato" },
      { count: 5, color: "clear black" },
      { count: 4, color: "muted gray" },
    ],
  },
  { color: "dim fuchsia", content: [{ count: 5, color: "dark gold" }] },
  { color: "vibrant lavender", content: [{ count: 4, color: "shiny purple" }] },
  {
    color: "pale bronze",
    content: [
      { count: 3, color: "wavy red" },
      { count: 4, color: "shiny tan" },
    ],
  },
  { color: "plaid orange", content: [{ count: 3, color: "vibrant indigo" }] },
  {
    color: "bright coral",
    content: [
      { count: 3, color: "faded olive" },
      { count: 4, color: "striped coral" },
      { count: 5, color: "plaid violet" },
      { count: 3, color: "bright lavender" },
    ],
  },
  {
    color: "striped teal",
    content: [
      { count: 1, color: "striped magenta" },
      { count: 5, color: "plaid white" },
    ],
  },
  {
    color: "plaid gray",
    content: [
      { count: 4, color: "dotted gray" },
      { count: 3, color: "clear beige" },
    ],
  },
  { color: "faded salmon", content: [{ count: 1, color: "dotted turquoise" }] },
  {
    color: "striped violet",
    content: [
      { count: 3, color: "dim cyan" },
      { count: 5, color: "drab plum" },
      { count: 5, color: "pale gray" },
    ],
  },
  { color: "dotted magenta", content: [{ count: 3, color: "plaid bronze" }] },
  {
    color: "dotted salmon",
    content: [
      { count: 4, color: "wavy tomato" },
      { count: 2, color: "vibrant silver" },
      { count: 5, color: "dim aqua" },
    ],
  },
  {
    color: "dark aqua",
    content: [
      { count: 3, color: "posh olive" },
      { count: 4, color: "clear salmon" },
      { count: 2, color: "striped purple" },
      { count: 4, color: "faded yellow" },
    ],
  },
  { color: "vibrant cyan", content: [{ count: 4, color: "light red" }] },
  {
    color: "pale aqua",
    content: [
      { count: 5, color: "clear brown" },
      { count: 1, color: "muted cyan" },
      { count: 1, color: "pale maroon" },
    ],
  },
  {
    color: "clear brown",
    content: [
      { count: 5, color: "vibrant white" },
      { count: 2, color: "clear blue" },
    ],
  },
  {
    color: "dim black",
    content: [
      { count: 3, color: "muted salmon" },
      { count: 2, color: "plaid bronze" },
      { count: 4, color: "shiny cyan" },
      { count: 4, color: "posh green" },
    ],
  },
  {
    color: "pale crimson",
    content: [
      { count: 5, color: "pale lime" },
      { count: 1, color: "mirrored tomato" },
      { count: 2, color: "dull green" },
      { count: 2, color: "mirrored teal" },
    ],
  },
  {
    color: "shiny teal",
    content: [
      { count: 5, color: "dark chartreuse" },
      { count: 4, color: "faded yellow" },
      { count: 3, color: "faded coral" },
    ],
  },
  {
    color: "faded brown",
    content: [
      { count: 4, color: "plaid plum" },
      { count: 5, color: "mirrored orange" },
      { count: 4, color: "shiny aqua" },
    ],
  },
  {
    color: "pale silver",
    content: [
      { count: 1, color: "bright turquoise" },
      { count: 2, color: "mirrored yellow" },
      { count: 1, color: "faded red" },
    ],
  },
  { color: "light black", content: [{ count: 3, color: "shiny indigo" }] },
  { color: "bright orange", content: [{ count: 1, color: "faded coral" }] },
  {
    color: "drab fuchsia",
    content: [
      { count: 3, color: "wavy lavender" },
      { count: 3, color: "plaid yellow" },
      { count: 2, color: "clear olive" },
      { count: 4, color: "clear red" },
    ],
  },
  { color: "bright lime", content: [{ count: 2, color: "dull magenta" }] },
  {
    color: "pale magenta",
    content: [
      { count: 1, color: "faded white" },
      { count: 2, color: "faded salmon" },
    ],
  },
  {
    color: "light cyan",
    content: [
      { count: 1, color: "wavy yellow" },
      { count: 3, color: "bright crimson" },
      { count: 3, color: "striped violet" },
    ],
  },
  {
    color: "shiny silver",
    content: [
      { count: 3, color: "shiny olive" },
      { count: 1, color: "dark plum" },
      { count: 2, color: "muted cyan" },
    ],
  },
  {
    color: "shiny red",
    content: [
      { count: 3, color: "posh turquoise" },
      { count: 5, color: "pale gold" },
    ],
  },
  {
    color: "muted coral",
    content: [
      { count: 1, color: "shiny aqua" },
      { count: 5, color: "dim green" },
      { count: 2, color: "muted purple" },
      { count: 4, color: "pale turquoise" },
    ],
  },
  {
    color: "dark black",
    content: [
      { count: 3, color: "shiny gray" },
      { count: 2, color: "mirrored aqua" },
      { count: 3, color: "vibrant magenta" },
    ],
  },
  { color: "dull yellow", content: [{ count: 5, color: "clear teal" }] },
  {
    color: "shiny lime",
    content: [
      { count: 5, color: "posh magenta" },
      { count: 3, color: "light salmon" },
    ],
  },
  { color: "muted tan", content: [{ count: 4, color: "bright chartreuse" }] },
  {
    color: "bright magenta",
    content: [
      { count: 4, color: "dotted violet" },
      { count: 2, color: "light gold" },
      { count: 5, color: "dim indigo" },
      { count: 4, color: "dark olive" },
    ],
  },
  {
    color: "faded lime",
    content: [
      { count: 3, color: "mirrored gold" },
      { count: 5, color: "wavy tomato" },
      { count: 5, color: "muted lavender" },
    ],
  },
  {
    color: "wavy coral",
    content: [
      { count: 3, color: "posh maroon" },
      { count: 1, color: "striped black" },
    ],
  },
  {
    color: "dull red",
    content: [
      { count: 4, color: "plaid yellow" },
      { count: 5, color: "drab lime" },
      { count: 5, color: "plaid plum" },
    ],
  },
  {
    color: "wavy blue",
    content: [
      { count: 4, color: "bright brown" },
      { count: 1, color: "bright magenta" },
      { count: 5, color: "pale indigo" },
      { count: 1, color: "muted tomato" },
    ],
  },
  {
    color: "dull salmon",
    content: [
      { count: 2, color: "mirrored orange" },
      { count: 3, color: "shiny plum" },
    ],
  },
  {
    color: "muted brown",
    content: [
      { count: 5, color: "dull beige" },
      { count: 3, color: "vibrant aqua" },
      { count: 3, color: "clear lavender" },
    ],
  },
  {
    color: "faded lavender",
    content: [
      { count: 1, color: "vibrant orange" },
      { count: 3, color: "faded magenta" },
    ],
  },
  {
    color: "vibrant maroon",
    content: [
      { count: 3, color: "muted crimson" },
      { count: 5, color: "striped purple" },
      { count: 5, color: "pale tomato" },
    ],
  },
  { color: "faded black", content: [{ count: 2, color: "dark purple" }] },
  {
    color: "dim gray",
    content: [
      { count: 4, color: "dotted coral" },
      { count: 4, color: "muted orange" },
    ],
  },
  {
    color: "striped yellow",
    content: [
      { count: 1, color: "dark salmon" },
      { count: 1, color: "pale silver" },
      { count: 1, color: "wavy brown" },
      { count: 1, color: "light gold" },
    ],
  },
  {
    color: "dim violet",
    content: [
      { count: 5, color: "posh magenta" },
      { count: 1, color: "pale aqua" },
      { count: 1, color: "pale maroon" },
      { count: 5, color: "dim lavender" },
    ],
  },
  {
    color: "plaid indigo",
    content: [
      { count: 1, color: "shiny silver" },
      { count: 3, color: "pale gray" },
      { count: 4, color: "dull maroon" },
      { count: 5, color: "faded coral" },
    ],
  },
  {
    color: "light purple",
    content: [
      { count: 1, color: "faded violet" },
      { count: 4, color: "pale orange" },
      { count: 1, color: "drab yellow" },
    ],
  },
  {
    color: "faded indigo",
    content: [
      { count: 5, color: "faded white" },
      { count: 2, color: "dotted lavender" },
      { count: 4, color: "dark gold" },
      { count: 1, color: "plaid plum" },
    ],
  },
  { color: "vibrant tomato", content: [{ count: 4, color: "light plum" }] },
  { color: "light coral", content: [{ count: 4, color: "posh fuchsia" }] },
  {
    color: "dotted coral",
    content: [
      { count: 3, color: "vibrant magenta" },
      { count: 5, color: "bright beige" },
    ],
  },
  {
    color: "drab olive",
    content: [
      { count: 2, color: "wavy salmon" },
      { count: 2, color: "pale aqua" },
      { count: 2, color: "dark indigo" },
      { count: 2, color: "drab green" },
    ],
  },
  { color: "dull green", content: [{ count: 5, color: "dull crimson" }] },
  {
    color: "muted gray",
    content: [
      { count: 5, color: "bright chartreuse" },
      { count: 4, color: "clear fuchsia" },
      { count: 2, color: "light red" },
      { count: 3, color: "shiny gold" },
    ],
  },
  {
    color: "clear red",
    content: [
      { count: 4, color: "pale teal" },
      { count: 2, color: "shiny gold" },
      { count: 1, color: "mirrored tomato" },
      { count: 4, color: "faded yellow" },
    ],
  },
  {
    color: "vibrant violet",
    content: [
      { count: 3, color: "light gray" },
      { count: 2, color: "posh green" },
      { count: 3, color: "shiny salmon" },
    ],
  },
  {
    color: "posh salmon",
    content: [
      { count: 4, color: "muted blue" },
      { count: 3, color: "posh purple" },
      { count: 4, color: "dim silver" },
      { count: 5, color: "faded white" },
    ],
  },
  {
    color: "wavy white",
    content: [
      { count: 3, color: "wavy fuchsia" },
      { count: 1, color: "drab black" },
      { count: 5, color: "vibrant aqua" },
      { count: 2, color: "wavy magenta" },
    ],
  },
  {
    color: "light orange",
    content: [
      { count: 2, color: "light black" },
      { count: 1, color: "wavy maroon" },
    ],
  },
  {
    color: "shiny bronze",
    content: [
      { count: 1, color: "drab crimson" },
      { count: 1, color: "clear purple" },
      { count: 4, color: "dotted cyan" },
      { count: 5, color: "mirrored yellow" },
    ],
  },
  { color: "dull tomato", content: [{ count: 5, color: "dark gray" }] },
  {
    color: "wavy salmon",
    content: [
      { count: 4, color: "wavy orange" },
      { count: 5, color: "dull silver" },
      { count: 4, color: "wavy maroon" },
      { count: 2, color: "posh blue" },
    ],
  },
  {
    color: "shiny cyan",
    content: [
      { count: 5, color: "vibrant plum" },
      { count: 1, color: "plaid plum" },
    ],
  },
  { color: "wavy turquoise", content: [{ count: 2, color: "bright gold" }] },
  {
    color: "shiny crimson",
    content: [
      { count: 2, color: "faded indigo" },
      { count: 2, color: "muted lavender" },
    ],
  },
  { color: "wavy brown", content: [{ count: 2, color: "clear indigo" }] },
  {
    color: "bright aqua",
    content: [
      { count: 2, color: "wavy plum" },
      { count: 2, color: "shiny beige" },
      { count: 5, color: "clear black" },
      { count: 2, color: "light black" },
    ],
  },
  { color: "light bronze", content: [{ count: 3, color: "vibrant maroon" }] },
  { color: "vibrant fuchsia", content: [{ count: 1, color: "dotted cyan" }] },
  {
    color: "dull crimson",
    content: [
      { count: 2, color: "plaid lime" },
      { count: 2, color: "plaid bronze" },
      { count: 3, color: "shiny orange" },
    ],
  },
  {
    color: "mirrored tomato",
    content: [
      { count: 3, color: "clear maroon" },
      { count: 4, color: "striped crimson" },
      { count: 3, color: "drab plum" },
      { count: 5, color: "plaid plum" },
    ],
  },
  {
    color: "dark silver",
    content: [
      { count: 5, color: "pale cyan" },
      { count: 4, color: "drab magenta" },
    ],
  },
  { color: "posh lavender", content: [{ count: 5, color: "faded olive" }] },
  { color: "bright plum", content: [{ count: 5, color: "posh indigo" }] },
  {
    color: "faded teal",
    content: [
      { count: 1, color: "vibrant maroon" },
      { count: 1, color: "wavy maroon" },
      { count: 2, color: "dark violet" },
      { count: 2, color: "pale yellow" },
    ],
  },
  {
    color: "mirrored coral",
    content: [
      { count: 1, color: "muted magenta" },
      { count: 4, color: "clear turquoise" },
      { count: 5, color: "muted purple" },
      { count: 2, color: "pale black" },
    ],
  },
  {
    color: "vibrant lime",
    content: [
      { count: 2, color: "pale lavender" },
      { count: 5, color: "clear purple" },
    ],
  },
  {
    color: "dark tan",
    content: [
      { count: 2, color: "bright beige" },
      { count: 5, color: "drab aqua" },
    ],
  },
  {
    color: "muted lavender",
    content: [
      { count: 3, color: "posh olive" },
      { count: 2, color: "faded cyan" },
    ],
  },
  { color: "dull fuchsia", content: [{ count: 3, color: "vibrant maroon" }] },
  {
    color: "dim magenta",
    content: [
      { count: 4, color: "faded cyan" },
      { count: 3, color: "dim indigo" },
      { count: 1, color: "mirrored teal" },
      { count: 5, color: "vibrant teal" },
    ],
  },
  { color: "posh orange", content: [{ count: 1, color: "wavy green" }] },
  {
    color: "clear white",
    content: [
      { count: 2, color: "faded purple" },
      { count: 4, color: "dotted yellow" },
    ],
  },
  {
    color: "light olive",
    content: [
      { count: 3, color: "faded plum" },
      { count: 3, color: "wavy chartreuse" },
    ],
  },
  { color: "light fuchsia", content: [{ count: 3, color: "clear orange" }] },
  {
    color: "striped turquoise",
    content: [
      { count: 4, color: "faded cyan" },
      { count: 4, color: "bright green" },
      { count: 5, color: "mirrored magenta" },
    ],
  },
  {
    color: "light teal",
    content: [
      { count: 1, color: "clear gold" },
      { count: 2, color: "dull olive" },
      { count: 2, color: "clear teal" },
    ],
  },
  {
    color: "wavy teal",
    content: [
      { count: 1, color: "light gold" },
      { count: 5, color: "light chartreuse" },
      { count: 2, color: "dim purple" },
    ],
  },
  {
    color: "striped beige",
    content: [
      { count: 2, color: "mirrored cyan" },
      { count: 2, color: "plaid aqua" },
      { count: 3, color: "dull lavender" },
      { count: 1, color: "dull chartreuse" },
    ],
  },
  { color: "striped aqua", content: [] },
  {
    color: "shiny green",
    content: [
      { count: 5, color: "posh tomato" },
      { count: 1, color: "faded olive" },
      { count: 5, color: "pale maroon" },
    ],
  },
  {
    color: "posh magenta",
    content: [
      { count: 2, color: "dull green" },
      { count: 3, color: "wavy maroon" },
      { count: 4, color: "faded silver" },
    ],
  },
  {
    color: "faded silver",
    content: [
      { count: 5, color: "dark lime" },
      { count: 2, color: "striped brown" },
    ],
  },
  {
    color: "dim maroon",
    content: [
      { count: 1, color: "light crimson" },
      { count: 5, color: "posh black" },
      { count: 5, color: "striped bronze" },
    ],
  },
  {
    color: "dim chartreuse",
    content: [
      { count: 3, color: "pale plum" },
      { count: 2, color: "clear fuchsia" },
      { count: 3, color: "bright beige" },
    ],
  },
  {
    color: "drab crimson",
    content: [
      { count: 4, color: "drab orange" },
      { count: 2, color: "dark blue" },
      { count: 1, color: "shiny gray" },
      { count: 1, color: "pale gray" },
    ],
  },
  {
    color: "dim beige",
    content: [
      { count: 4, color: "dark orange" },
      { count: 1, color: "shiny salmon" },
      { count: 5, color: "bright indigo" },
      { count: 1, color: "shiny indigo" },
    ],
  },
  {
    color: "light blue",
    content: [
      { count: 2, color: "vibrant white" },
      { count: 1, color: "pale turquoise" },
      { count: 3, color: "drab maroon" },
      { count: 4, color: "mirrored cyan" },
    ],
  },
  {
    color: "dim aqua",
    content: [
      { count: 3, color: "bright chartreuse" },
      { count: 2, color: "clear black" },
      { count: 4, color: "dotted gray" },
      { count: 3, color: "plaid bronze" },
    ],
  },
  {
    color: "striped fuchsia",
    content: [
      { count: 2, color: "shiny teal" },
      { count: 4, color: "striped aqua" },
      { count: 4, color: "dull lavender" },
      { count: 2, color: "dull crimson" },
    ],
  },
  {
    color: "wavy yellow",
    content: [
      { count: 5, color: "pale gray" },
      { count: 2, color: "faded red" },
      { count: 3, color: "vibrant silver" },
    ],
  },
  {
    color: "bright fuchsia",
    content: [
      { count: 1, color: "faded teal" },
      { count: 5, color: "shiny lavender" },
      { count: 2, color: "muted cyan" },
    ],
  },
  {
    color: "mirrored violet",
    content: [
      { count: 4, color: "plaid olive" },
      { count: 2, color: "dotted magenta" },
      { count: 4, color: "striped aqua" },
      { count: 5, color: "wavy lavender" },
    ],
  },
  {
    color: "wavy maroon",
    content: [
      { count: 2, color: "mirrored maroon" },
      { count: 3, color: "drab violet" },
      { count: 2, color: "dark plum" },
      { count: 2, color: "faded cyan" },
    ],
  },
  { color: "dim green", content: [{ count: 3, color: "clear lime" }] },
  {
    color: "muted beige",
    content: [
      { count: 4, color: "posh coral" },
      { count: 1, color: "mirrored teal" },
      { count: 5, color: "shiny cyan" },
      { count: 2, color: "light plum" },
    ],
  },
  { color: "posh turquoise", content: [{ count: 1, color: "dull fuchsia" }] },
  {
    color: "clear orange",
    content: [
      { count: 2, color: "faded chartreuse" },
      { count: 3, color: "dark blue" },
      { count: 5, color: "plaid yellow" },
    ],
  },
  {
    color: "light green",
    content: [
      { count: 5, color: "mirrored chartreuse" },
      { count: 4, color: "pale bronze" },
    ],
  },
  {
    color: "clear bronze",
    content: [
      { count: 5, color: "vibrant coral" },
      { count: 2, color: "bright beige" },
      { count: 4, color: "dark lime" },
    ],
  },
  {
    color: "clear silver",
    content: [
      { count: 1, color: "bright gray" },
      { count: 5, color: "dotted white" },
      { count: 2, color: "dotted lavender" },
      { count: 1, color: "dim violet" },
    ],
  },
  { color: "drab green", content: [{ count: 1, color: "drab violet" }] },
  { color: "mirrored salmon", content: [{ count: 1, color: "dim beige" }] },
  {
    color: "mirrored maroon",
    content: [
      { count: 2, color: "posh black" },
      { count: 4, color: "striped black" },
      { count: 2, color: "dotted gray" },
      { count: 4, color: "striped gray" },
    ],
  },
  { color: "mirrored aqua", content: [{ count: 4, color: "clear black" }] },
  {
    color: "pale purple",
    content: [
      { count: 5, color: "dim green" },
      { count: 3, color: "striped tan" },
      { count: 5, color: "wavy olive" },
      { count: 4, color: "muted cyan" },
    ],
  },
  {
    color: "dotted teal",
    content: [
      { count: 1, color: "dotted orange" },
      { count: 2, color: "dotted chartreuse" },
    ],
  },
  { color: "vibrant olive", content: [{ count: 2, color: "posh olive" }] },
  { color: "dotted aqua", content: [{ count: 5, color: "drab orange" }] },
  {
    color: "clear yellow",
    content: [
      { count: 1, color: "clear orange" },
      { count: 3, color: "dim beige" },
      { count: 3, color: "bright indigo" },
      { count: 1, color: "drab yellow" },
    ],
  },
  { color: "vibrant gray", content: [{ count: 3, color: "mirrored plum" }] },
  {
    color: "dull beige",
    content: [
      { count: 3, color: "dull indigo" },
      { count: 2, color: "dotted lavender" },
      { count: 2, color: "shiny orange" },
    ],
  },
  {
    color: "shiny chartreuse",
    content: [
      { count: 2, color: "light brown" },
      { count: 1, color: "faded tomato" },
      { count: 1, color: "drab black" },
    ],
  },
  {
    color: "light chartreuse",
    content: [
      { count: 2, color: "wavy red" },
      { count: 4, color: "muted green" },
      { count: 1, color: "drab aqua" },
      { count: 4, color: "mirrored maroon" },
    ],
  },
  {
    color: "bright violet",
    content: [
      { count: 4, color: "dotted yellow" },
      { count: 2, color: "shiny aqua" },
      { count: 2, color: "drab aqua" },
      { count: 1, color: "bright red" },
    ],
  },
  {
    color: "dull gold",
    content: [
      { count: 2, color: "muted maroon" },
      { count: 1, color: "wavy maroon" },
    ],
  },
  { color: "dotted beige", content: [{ count: 4, color: "plaid magenta" }] },
  {
    color: "wavy silver",
    content: [
      { count: 5, color: "pale beige" },
      { count: 3, color: "posh orange" },
      { count: 1, color: "clear turquoise" },
      { count: 3, color: "bright lavender" },
    ],
  },
  {
    color: "plaid aqua",
    content: [
      { count: 1, color: "dull lime" },
      { count: 5, color: "plaid crimson" },
    ],
  },
  { color: "drab tomato", content: [{ count: 4, color: "wavy plum" }] },
  {
    color: "muted cyan",
    content: [
      { count: 5, color: "faded cyan" },
      { count: 4, color: "posh olive" },
      { count: 5, color: "faded yellow" },
      { count: 4, color: "dark chartreuse" },
    ],
  },
  {
    color: "dull olive",
    content: [
      { count: 1, color: "dark black" },
      { count: 2, color: "clear gold" },
      { count: 4, color: "dark orange" },
    ],
  },
  {
    color: "bright salmon",
    content: [
      { count: 5, color: "dark chartreuse" },
      { count: 5, color: "posh black" },
    ],
  },
  { color: "wavy beige", content: [{ count: 4, color: "dim green" }] },
  { color: "posh fuchsia", content: [{ count: 4, color: "drab plum" }] },
  {
    color: "striped red",
    content: [
      { count: 5, color: "posh turquoise" },
      { count: 2, color: "posh indigo" },
      { count: 5, color: "dim silver" },
    ],
  },
  {
    color: "dim lavender",
    content: [{ count: 5, color: "vibrant chartreuse" }],
  },
  { color: "plaid green", content: [{ count: 4, color: "striped fuchsia" }] },
  {
    color: "dull lavender",
    content: [
      { count: 5, color: "clear lime" },
      { count: 5, color: "wavy green" },
      { count: 2, color: "dark blue" },
      { count: 1, color: "striped gray" },
    ],
  },
  {
    color: "dark brown",
    content: [
      { count: 4, color: "light silver" },
      { count: 4, color: "pale violet" },
      { count: 3, color: "light cyan" },
      { count: 1, color: "pale cyan" },
    ],
  },
  {
    color: "wavy green",
    content: [
      { count: 3, color: "mirrored teal" },
      { count: 2, color: "muted green" },
    ],
  },
  {
    color: "drab teal",
    content: [
      { count: 4, color: "shiny teal" },
      { count: 3, color: "striped aqua" },
      { count: 5, color: "dim coral" },
    ],
  },
  {
    color: "shiny orange",
    content: [
      { count: 4, color: "drab aqua" },
      { count: 4, color: "pale teal" },
      { count: 3, color: "dull maroon" },
    ],
  },
  {
    color: "vibrant blue",
    content: [
      { count: 2, color: "vibrant tomato" },
      { count: 1, color: "plaid cyan" },
      { count: 3, color: "pale red" },
    ],
  },
  {
    color: "mirrored purple",
    content: [
      { count: 2, color: "striped tan" },
      { count: 1, color: "pale olive" },
    ],
  },
  { color: "faded purple", content: [{ count: 2, color: "plaid lavender" }] },
  { color: "light aqua", content: [{ count: 3, color: "vibrant chartreuse" }] },
  {
    color: "vibrant magenta",
    content: [
      { count: 3, color: "clear salmon" },
      { count: 4, color: "posh brown" },
      { count: 4, color: "striped black" },
    ],
  },
  {
    color: "plaid salmon",
    content: [
      { count: 1, color: "striped gray" },
      { count: 5, color: "dark plum" },
    ],
  },
  {
    color: "dim white",
    content: [
      { count: 3, color: "faded fuchsia" },
      { count: 2, color: "clear yellow" },
    ],
  },
  {
    color: "light magenta",
    content: [{ count: 1, color: "vibrant turquoise" }],
  },
  {
    color: "clear chartreuse",
    content: [
      { count: 1, color: "posh olive" },
      { count: 1, color: "drab blue" },
    ],
  },
  {
    color: "clear tan",
    content: [
      { count: 2, color: "dark blue" },
      { count: 4, color: "light gold" },
      { count: 5, color: "muted indigo" },
    ],
  },
  {
    color: "light turquoise",
    content: [
      { count: 4, color: "drab beige" },
      { count: 4, color: "shiny bronze" },
      { count: 3, color: "dull olive" },
      { count: 3, color: "striped indigo" },
    ],
  },
  {
    color: "pale white",
    content: [
      { count: 5, color: "dotted white" },
      { count: 3, color: "faded gold" },
      { count: 5, color: "striped turquoise" },
    ],
  },
  {
    color: "dark gray",
    content: [
      { count: 3, color: "clear teal" },
      { count: 4, color: "posh green" },
      { count: 2, color: "striped brown" },
      { count: 3, color: "light tomato" },
    ],
  },
  { color: "clear maroon", content: [{ count: 5, color: "drab maroon" }] },
  {
    color: "vibrant white",
    content: [
      { count: 1, color: "muted green" },
      { count: 5, color: "dark aqua" },
      { count: 3, color: "clear black" },
      { count: 4, color: "drab teal" },
    ],
  },
  {
    color: "striped indigo",
    content: [
      { count: 1, color: "bright turquoise" },
      { count: 5, color: "shiny orange" },
      { count: 1, color: "clear fuchsia" },
      { count: 1, color: "light chartreuse" },
    ],
  },
  {
    color: "dull cyan",
    content: [
      { count: 2, color: "light salmon" },
      { count: 5, color: "striped magenta" },
      { count: 2, color: "wavy lavender" },
      { count: 3, color: "faded fuchsia" },
    ],
  },
  {
    color: "wavy plum",
    content: [
      { count: 3, color: "muted crimson" },
      { count: 2, color: "dim green" },
    ],
  },
  {
    color: "pale tan",
    content: [
      { count: 3, color: "mirrored turquoise" },
      { count: 5, color: "wavy salmon" },
    ],
  },
  {
    color: "vibrant green",
    content: [
      { count: 5, color: "plaid chartreuse" },
      { count: 2, color: "muted teal" },
    ],
  },
  {
    color: "bright bronze",
    content: [
      { count: 4, color: "clear indigo" },
      { count: 1, color: "mirrored bronze" },
      { count: 1, color: "mirrored magenta" },
      { count: 5, color: "posh beige" },
    ],
  },
  { color: "faded plum", content: [{ count: 2, color: "dotted tan" }] },
  {
    color: "mirrored blue",
    content: [
      { count: 2, color: "clear lime" },
      { count: 5, color: "faded coral" },
      { count: 1, color: "drab aqua" },
    ],
  },
  {
    color: "plaid gold",
    content: [
      { count: 2, color: "muted tomato" },
      { count: 1, color: "shiny blue" },
      { count: 1, color: "dim gray" },
      { count: 1, color: "dotted salmon" },
    ],
  },
  {
    color: "posh black",
    content: [
      { count: 3, color: "faded cyan" },
      { count: 5, color: "posh brown" },
      { count: 1, color: "striped black" },
    ],
  },
  {
    color: "light salmon",
    content: [
      { count: 1, color: "clear lime" },
      { count: 4, color: "posh black" },
    ],
  },
  { color: "muted violet", content: [{ count: 4, color: "wavy cyan" }] },
  {
    color: "faded cyan",
    content: [
      { count: 4, color: "faded coral" },
      { count: 3, color: "faded yellow" },
    ],
  },
  {
    color: "faded turquoise",
    content: [
      { count: 3, color: "wavy magenta" },
      { count: 3, color: "plaid bronze" },
      { count: 1, color: "dotted chartreuse" },
    ],
  },
  {
    color: "plaid cyan",
    content: [
      { count: 1, color: "shiny tan" },
      { count: 1, color: "faded coral" },
      { count: 1, color: "vibrant plum" },
      { count: 2, color: "bright lavender" },
    ],
  },
  {
    color: "mirrored brown",
    content: [
      { count: 1, color: "faded chartreuse" },
      { count: 2, color: "striped plum" },
    ],
  },
  {
    color: "light lavender",
    content: [
      { count: 1, color: "dull teal" },
      { count: 3, color: "dark fuchsia" },
    ],
  },
  {
    color: "striped crimson",
    content: [
      { count: 1, color: "light salmon" },
      { count: 2, color: "drab black" },
      { count: 3, color: "vibrant white" },
      { count: 5, color: "dull maroon" },
    ],
  },
  {
    color: "dotted crimson",
    content: [
      { count: 1, color: "posh orange" },
      { count: 4, color: "muted green" },
      { count: 2, color: "mirrored indigo" },
    ],
  },
  { color: "clear cyan", content: [{ count: 3, color: "light yellow" }] },
  {
    color: "light indigo",
    content: [
      { count: 5, color: "plaid cyan" },
      { count: 2, color: "mirrored fuchsia" },
    ],
  },
  { color: "light white", content: [{ count: 2, color: "light chartreuse" }] },
  { color: "drab yellow", content: [{ count: 1, color: "mirrored blue" }] },
  {
    color: "dim cyan",
    content: [
      { count: 2, color: "posh salmon" },
      { count: 5, color: "bright chartreuse" },
      { count: 3, color: "dark chartreuse" },
    ],
  },
  {
    color: "pale gray",
    content: [
      { count: 5, color: "dim orange" },
      { count: 2, color: "dark plum" },
      { count: 1, color: "vibrant plum" },
      { count: 3, color: "striped tan" },
    ],
  },
  {
    color: "bright tomato",
    content: [
      { count: 3, color: "posh indigo" },
      { count: 1, color: "dotted aqua" },
      { count: 5, color: "muted olive" },
    ],
  },
  { color: "shiny olive", content: [{ count: 2, color: "drab aqua" }] },
  {
    color: "mirrored turquoise",
    content: [
      { count: 3, color: "shiny violet" },
      { count: 3, color: "drab crimson" },
      { count: 3, color: "dotted tomato" },
      { count: 5, color: "bright violet" },
    ],
  },
  {
    color: "light gray",
    content: [
      { count: 1, color: "vibrant white" },
      { count: 2, color: "muted indigo" },
      { count: 3, color: "drab teal" },
    ],
  },
  { color: "bright green", content: [{ count: 4, color: "bright indigo" }] },
  {
    color: "striped lavender",
    content: [
      { count: 2, color: "striped aqua" },
      { count: 5, color: "light crimson" },
      { count: 4, color: "drab maroon" },
    ],
  },
  {
    color: "posh green",
    content: [
      { count: 2, color: "muted turquoise" },
      { count: 4, color: "dark blue" },
      { count: 4, color: "light chartreuse" },
      { count: 1, color: "pale purple" },
    ],
  },
  {
    color: "plaid fuchsia",
    content: [
      { count: 3, color: "shiny yellow" },
      { count: 2, color: "shiny maroon" },
      { count: 1, color: "clear aqua" },
    ],
  },
  {
    color: "dim purple",
    content: [
      { count: 4, color: "light crimson" },
      { count: 2, color: "dotted yellow" },
      { count: 2, color: "mirrored maroon" },
    ],
  },
  {
    color: "dark salmon",
    content: [
      { count: 2, color: "faded teal" },
      { count: 4, color: "drab white" },
      { count: 3, color: "posh bronze" },
    ],
  },
  { color: "drab maroon", content: [] },
  {
    color: "dark lavender",
    content: [
      { count: 4, color: "muted brown" },
      { count: 5, color: "dark orange" },
      { count: 1, color: "plaid aqua" },
      { count: 2, color: "muted cyan" },
    ],
  },
  {
    color: "pale tomato",
    content: [
      { count: 5, color: "drab maroon" },
      { count: 2, color: "posh orange" },
      { count: 4, color: "pale bronze" },
    ],
  },
  {
    color: "shiny gold",
    content: [
      { count: 2, color: "light chartreuse" },
      { count: 2, color: "drab black" },
      { count: 1, color: "bright orange" },
      { count: 1, color: "shiny teal" },
    ],
  },
  {
    color: "bright beige",
    content: [
      { count: 5, color: "dim teal" },
      { count: 3, color: "posh indigo" },
    ],
  },
  {
    color: "dim crimson",
    content: [
      { count: 4, color: "wavy lime" },
      { count: 4, color: "dim orange" },
      { count: 1, color: "faded green" },
    ],
  },
  {
    color: "dim red",
    content: [
      { count: 4, color: "drab plum" },
      { count: 4, color: "shiny gold" },
    ],
  },
  {
    color: "wavy tomato",
    content: [
      { count: 4, color: "plaid bronze" },
      { count: 1, color: "striped black" },
    ],
  },
  {
    color: "dark plum",
    content: [
      { count: 5, color: "shiny olive" },
      { count: 1, color: "drab violet" },
      { count: 2, color: "striped black" },
      { count: 1, color: "faded coral" },
    ],
  },
];
