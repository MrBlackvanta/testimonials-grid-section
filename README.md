# Testimonials grid section

My solution to the [Testimonials grid section](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://testimonials-grid-section.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/testimonials-grid-section

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**Two role labels changed, and they cost nothing.** The colour is white at 50% over grey,
which only appears on the mobile frame. The tablet and desktop frames paint those same two
labels from the palette, so taking their values fixes both without inventing a colour. On a
white card the mobile value reads 2.34:1, which is a slip rather than a style.

**The lead over the quote glyph stays as designed** at 3.25:1. The glyph sits behind the
text at every breakpoint. Darkening it or dropping it to 50% would clear 4.5 but costs
about the same watermark separation either way, and axe reports text over a background
image as incomplete rather than failed. It also clears the 3:1 large-text bar and misses
4.5 only on the bold cutoff.

Note the 20px lead is weight 600, which is not WCAG large text, so everything on this page
is held to 4.5:1.

**One style-guide colour is wrong, not rounded.** Purple 300 in the guide is ten lightness
points away from what the file paints. The page background isn't in the guide at all, and
the guide's black appears nowhere in the design, so it ships no token.

**Card heights run a pixel or two under the design.** Figma rounds single-line text frames
up, so the same profile block measures 28, 29 or 30px across the design's own five cards
for identical content. The CSS line boxes are 28 on all five. Every position difference on
the page is that rounding accumulating down the grid.

**The four-column layout starts at 1280, not 1024.** The design has no frame between 768
and 1440 and the desktop grid needs its full 1110px. At 1024 the columns come out 200px
wide, leaving 136px of text against the design's 191 and stretching one card to 784px. So
the two-column layout holds to 1279, capped so its cards keep their drawn proportions.

**The design's tablet line breaks assume the full 768px.** With a classic 15px scrollbar
you get 633px of content instead of 648, which pushes two cards to an extra line. At a true
768px content area every line count matches the design at every breakpoint.

Card 4 inverts the pattern the other four follow, with a dimmer lead and a brighter role.
All three frames agree and both clear 10:1, so it ships as drawn.

The quote marks are `::before`/`::after` content, so the data holds the quotation only.
That's partly because the design file closes one quote with an opening mark. The
`developent` misspelling is Frontend Mentor's own, in both the design file and the starter
HTML, and I kept it.

The design has no heading, so there's a visually hidden `<h1>`. Two of the five avatars are
replacements and won't match the design JPGs.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
