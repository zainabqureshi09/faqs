# FAQ Page - Next.js with Tailwind CSS

A modern, responsive FAQ page built with Next.js 14, TypeScript, and Tailwind CSS featuring a beautiful pink-to-green gradient theme.

## Features

- ✨ Modern gradient design with pink-to-green color scheme
- 🎨 Built with Next.js 14 App Router and TypeScript
- 💨 Styled with Tailwind CSS
- 📱 Fully responsive design (mobile-first approach)
- 🎭 Smooth animations and transitions
- 🔍 Search functionality
- 📂 Category-based navigation
- 👍 Feedback system for FAQ items
- ♿ Accessible components

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main FAQ page
├── components/
│   ├── HeroSection.tsx       # Hero section with search
│   ├── CategorySidebar.tsx   # Category navigation
│   ├── FAQContent.tsx        # FAQ content container
│   ├── FAQCard.tsx           # Individual FAQ accordion
│   └── SupportCTA.tsx        # Support call-to-action section
├── data/
│   └── faqData.ts            # FAQ data and types
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. You can customize the gradient colors:

```typescript
colors: {
  'hot-pink': '#FF2F92',
  'rose-pink': '#FF6FAE',
  'mint-green': '#8FD3A8',
  'soft-green': '#6BCF9B',
}
```

### FAQ Content

Edit the FAQ content in `data/faqData.ts`:

```typescript
export const faqData: FAQCategory[] = [
  {
    id: 'general',
    title: 'General Questions',
    icon: 'info',
    faqs: [
      {
        id: 1,
        question: 'Your question here?',
        answer: ['Your answer paragraphs here'],
      },
    ],
  },
]
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management

## License

MIT
