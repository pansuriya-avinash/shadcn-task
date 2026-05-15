# Next.js Theme Setup with Tailwind CSS v4 and shadcn/ui

A complete, production-ready theme setup for Next.js projects using Tailwind CSS v4 and shadcn/ui with a token-based design system.

## Features

- ✅ **Tailwind CSS v4** - Latest version with improved performance
- ✅ **Token-based Design System** - CSS variables for semantic design tokens
- ✅ **Light & Dark Themes** - Automatic theme switching
- ✅ **Theme Provider** - Custom React context for theme management
- ✅ **shadcn/ui Integration** - Pre-built UI components
- ✅ **System Preference Detection** - Respects user's OS theme preference
- ✅ **Local Storage Persistence** - Theme preference saved across sessions
- ✅ **TypeScript Support** - Fully typed components
- ✅ **Next.js App Router** - Optimized for latest Next.js

## Design Tokens

The theme uses semantic CSS variables for consistent design:

- `background` - Main background color
- `foreground` - Main text color
- `primary` - Primary action color
- `secondary` - Secondary action color
- `muted` - Muted/de-emphasized content
- `accent` - Accent highlights
- `destructive` - Destructive actions
- `border` - Border colors
- `input` - Input field backgrounds
- `ring` - Focus ring colors
- `card` - Card backgrounds

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme variables and Tailwind directives
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Demo page with examples
├── components/
│   ├── theme-provider.tsx   # Theme context and provider
│   ├── theme-toggle.tsx     # Theme switcher component
│   └── ui/
│       ├── button.tsx       # Button component
│       └── card.tsx         # Card component
└── lib/
    └── utils.ts             # Utility functions (cn helper)
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Using the Theme Provider

Wrap your application with the `ThemeProvider` in your root layout:

```tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Using the Theme Toggle

Add the theme toggle component to any page:

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div>
      <ThemeToggle />
    </div>
  )
}
```

### Using shadcn/ui Components

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Programmatic Theme Control

Use the `useTheme` hook to control the theme programmatically:

```tsx
import { useTheme } from "@/components/theme-provider"

export default function Page() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  )
}
```

## Customizing Theme Tokens

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more tokens */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ... more tokens */
}
```

## Adding New Components

To add new shadcn/ui components:

1. Create the component file in `src/components/ui/`
2. Use the `cn` utility for className merging
3. Follow the existing component patterns
4. Use semantic design tokens from the theme

Example:

```tsx
import { cn } from "@/lib/utils"

export function MyComponent({ className, ...props }) {
  return (
    <div className={cn("bg-card text-card-foreground", className)} {...props}>
      {/* content */}
    </div>
  )
}
```

## Best Practices

- Always use the `cn` utility for className merging
- Use semantic design tokens instead of hardcoded colors
- Test components in both light and dark themes
- Use `suppressHydrationWarning` on the html tag to prevent hydration mismatches
- Keep theme tokens in HSL format for easier color manipulation

## Production Build

```bash
npm run build
npm start
```

## License

MIT
