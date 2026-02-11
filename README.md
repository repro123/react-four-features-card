# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size (mobile: 375px, desktop: 1440px)

### Links

- Challenge: [Frontend Mentor - Four card feature section](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/) - Build tool and dev server
- Component-based architecture

### What I learned

This project helped me practice several key concepts:

**React Component Structure:** Breaking down the UI into reusable components (`Heading`, `Cards`, `Card`, and `Footer`) made the code more maintainable and scalable. Using component composition allows for a clean separation of concerns.

```jsx
// Component-based approach with map for rendering dynamic data
function Cards() {
  return (
    <ul className="c-card-component__grid-container">
      {data.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
}
```

**CSS Custom Properties:** Using CSS variables for colors (e.g., `--Red`, `--Cyan`, `--Orange`, `--Blue`) makes theming consistent and easy to maintain across the application.

```css
:root {
  --Red: hsl(0, 78%, 62%);
  --Cyan: hsl(180, 62%, 55%);
  --Orange: hsl(34, 97%, 64%);
  --Blue: hsl(212, 86%, 64%);
}
```

**Responsive Design:** Implementing a mobile-first approach with flexible layouts using Flexbox and CSS Grid ensures the design adapts seamlessly across different screen sizes.

**Dynamic Styling:** Using data-driven rendering with unique IDs to apply specific border colors to each card (`.item-1`, `.item-2`, etc.) demonstrates how to maintain clean CSS while handling multiple variations.

## Author

- Website: [Ibrahim Bello](https://www.belo-ibrahim.vercel.app/)
- Frontend Mentor: [@repro123](https://www.frontendmentor.io/repro123)
- GitHub: [@repro123](https://github.com/repro123)

## Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
