# 🎨 Hero Section Design Variations

## 🌟 Current Design: Bold Geometric Spotlight

Your FAQ page now features a **bold, high-impact hero section** with:

✨ **Design Elements:**
- 72px large, centered headline
- Abstract geometric shapes (circles and angled rectangles)
- Pulsing spotlight effect behind text
- Gradient underline accent
- Animated decorative dot
- Clean light background with strong contrast

---

## 🎭 Hero Design Options

You can easily switch between different hero styles by copying the CSS code below into your `faq-styles.css` file.

---

## Option 1: Current Design - Geometric Spotlight ⭐ (Active)

**What it looks like:**
- Large centered title (72px)
- Abstract circular spotlight with pulse animation
- Angled geometric shapes in corners
- Gradient underline below title
- Animated floating dot accent

**Use when:** You want modern, creative, attention-grabbing design

✅ **Already Applied!**

---

## Option 2: Diagonal Split Background

**CSS to Replace (in faq-styles.css, lines 127-285):**

```css
/* ========================================
   HERO SECTION - DIAGONAL SPLIT
   ======================================== */

.hero-section {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--color-white);
    padding: var(--spacing-4xl) 0;
}

/* Diagonal Split Background */
.hero-gradient-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.hero-gradient-panel::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 60%;
    height: 200%;
    background: linear-gradient(135deg, 
        rgba(255, 47, 146, 0.08) 0%, 
        rgba(255, 111, 174, 0.05) 50%,
        transparent 100%);
    transform: rotate(15deg);
}

.hero-gradient-panel::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 60%;
    height: 200%;
    background: linear-gradient(225deg, 
        rgba(143, 211, 168, 0.08) 0%, 
        rgba(107, 207, 155, 0.05) 50%,
        transparent 100%);
    transform: rotate(-15deg);
}

.hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding: var(--spacing-2xl) 0;
}

.hero-title {
    font-size: 72px;
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-900);
    line-height: var(--line-height-tight);
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
    position: relative;
    display: inline-block;
}

.hero-title::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 6px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
}

.hero-subtitle {
    font-size: var(--font-size-xl);
    color: var(--color-gray-600);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--spacing-2xl);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}
```

---

## Option 3: Minimalist Clean

**CSS to Replace:**

```css
/* ========================================
   HERO SECTION - MINIMALIST CLEAN
   ======================================== */

.hero-section {
    position: relative;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(to bottom, 
        var(--color-white) 0%, 
        var(--color-gray-50) 100%);
    padding: var(--spacing-4xl) 0;
    border-bottom: 1px solid var(--color-gray-200);
}

.hero-gradient-panel {
    display: none;
}

.hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding: var(--spacing-2xl) 0;
}

.hero-title {
    font-size: 64px;
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-900);
    line-height: var(--line-height-tight);
    margin-bottom: var(--spacing-xl);
    letter-spacing: -0.02em;
    position: relative;
    display: inline-block;
}

/* Simple accent bar */
.hero-title::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
}

.hero-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-gray-600);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--spacing-2xl);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
```

---

## Option 4: Bold Box Highlight

**CSS to Replace:**

```css
/* ========================================
   HERO SECTION - BOLD BOX HIGHLIGHT
   ======================================== */

.hero-section {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--color-gray-50);
    padding: var(--spacing-4xl) 0;
}

/* Background pattern */
.hero-gradient-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 50%, rgba(255, 47, 146, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(143, 211, 168, 0.05) 0%, transparent 50%);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding: var(--spacing-2xl) 0;
}

.hero-title {
    font-size: 68px;
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-900);
    line-height: var(--line-height-tight);
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
    position: relative;
    display: inline-block;
    padding: var(--spacing-lg) var(--spacing-xl);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: 
        0 0 0 3px var(--color-gray-50),
        0 0 0 6px var(--color-gray-200),
        0 10px 30px rgba(0, 0, 0, 0.08);
}

/* No underline, box is the highlight */
.hero-title::after {
    display: none;
}

.hero-subtitle {
    font-size: var(--font-size-xl);
    color: var(--color-gray-600);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--spacing-2xl);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}
```

---

## Option 5: Wave Pattern Background

**CSS to Replace:**

```css
/* ========================================
   HERO SECTION - WAVE PATTERN
   ======================================== */

.hero-section {
    position: relative;
    min-height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--color-white);
    padding: var(--spacing-4xl) 0;
}

/* Wave pattern effect */
.hero-gradient-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.hero-gradient-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: 
        repeating-linear-gradient(
            90deg,
            transparent 0px,
            rgba(255, 47, 146, 0.02) 50px,
            rgba(143, 211, 168, 0.02) 100px,
            transparent 150px
        );
    animation: waveSlide 20s linear infinite;
}

.hero-gradient-panel::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 300px;
    background: radial-gradient(ellipse, 
        rgba(255, 111, 174, 0.12) 0%,
        rgba(143, 211, 168, 0.08) 50%,
        transparent 100%);
    filter: blur(60px);
}

@keyframes waveSlide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(150px);
    }
}

.hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding: var(--spacing-2xl) 0;
}

.hero-title {
    font-size: 70px;
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-900);
    line-height: var(--line-height-tight);
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
    position: relative;
    display: inline-block;
}

.hero-title::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 6px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    box-shadow: 0 4px 12px rgba(255, 47, 146, 0.3);
}

.hero-subtitle {
    font-size: var(--font-size-xl);
    color: var(--color-gray-600);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--spacing-2xl);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}
```

---

## 🎯 How to Change Hero Style

### Step 1: Open CSS File
Right-click `faq-styles.css` → Open with Notepad

### Step 2: Find Hero Section
Search for (Ctrl+F): `HERO SECTION`

### Step 3: Replace Code
- Select all code from `/* HERO SECTION */` to the end of `.hero-subtitle { }`
- Copy one of the options above
- Paste to replace

### Step 4: Save & Refresh
- Save file (Ctrl+S)
- Refresh browser (Ctrl+F5)

---

## 📊 Comparison Table

| Design | Visual Impact | Best For | Animations |
|--------|--------------|----------|------------|
| **Geometric Spotlight** ⭐ | Very High | Modern SaaS, Tech | Pulse, Float |
| **Diagonal Split** | High | Creative, Portfolio | Static |
| **Minimalist Clean** | Medium | Professional, Corporate | None |
| **Bold Box Highlight** | Very High | E-commerce, Product | None |
| **Wave Pattern** | High | Dynamic, Playful | Wave Slide |

---

## 🎨 Customization Tips

### Adjust Title Size
Find this in any option:
```css
.hero-title {
    font-size: 72px;  /* Change this number */
}
```

Recommended sizes:
- **Extra Bold:** 80px
- **Bold (current):** 72px
- **Medium:** 64px
- **Subtle:** 56px

### Change Underline Width
```css
.hero-title::after {
    width: 280px;  /* Change this */
}
```

### Remove Animated Dot
Add this line to remove the floating dot:
```css
.hero-title::before {
    display: none;
}
```

### Adjust Background Opacity
For geometric shapes, change these values:
```css
/* More visible */
rgba(255, 47, 146, 0.25)  /* Instead of 0.15 */

/* More subtle */
rgba(255, 47, 146, 0.08)  /* Instead of 0.15 */
```

---

## 🌟 Additional Enhancement Ideas

### Add Badges Above Title
Add this HTML before the `<h1>` in `faq-page-design.html`:

```html
<div class="hero-badge">
    <span class="badge-text">💡 Popular Questions</span>
</div>
```

Add this CSS:
```css
.hero-badge {
    margin-bottom: var(--spacing-md);
}

.badge-text {
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-md);
    background: var(--gradient-primary);
    color: var(--color-white);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    box-shadow: var(--shadow-md);
}
```

### Add Animated Arrow Indicator
Add this HTML after subtitle:

```html
<div class="scroll-indicator">
    <span>Scroll to explore</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3V17M10 17L16 11M10 17L4 11" stroke="currentColor" stroke-width="2"/>
    </svg>
</div>
```

Add this CSS:
```css
.scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--color-gray-500);
    font-size: var(--font-size-sm);
    animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}
```

---

## 🎭 Mix & Match Elements

You can combine elements from different options:

**Example: Minimalist Base + Geometric Accent**
- Use "Minimalist Clean" as base
- Add one geometric shape from "Geometric Spotlight"

**Example: Diagonal Split + Wave Animation**
- Use "Diagonal Split" background
- Add wave animation from "Wave Pattern"

---

## 📱 Mobile Considerations

All hero variations are **fully responsive**. Mobile adjustments include:

- Title size reduces to 42px
- Geometric shapes scale down proportionally
- Animations remain smooth
- Centered layout maintained
- Touch-friendly spacing

---

## ✨ Current Features Summary

Your active hero section includes:

✅ **72px bold headline** - Maximum visual impact  
✅ **Centered horizontally** - Perfect balance  
✅ **Abstract geometric shapes** - Visual interest  
✅ **Pulsing spotlight effect** - Dynamic movement  
✅ **Gradient underline** - Brand accent  
✅ **Animated floating dot** - Subtle animation  
✅ **Light neutral background** - Clean foundation  
✅ **Strong contrast** - Excellent readability  
✅ **Fully responsive** - Works on all devices  

---

## 🔄 Quick Switch Guide

**Want to try different looks?**

1. **Keep current design** - No action needed! ✅
2. **Try Diagonal Split** - Copy Option 2 CSS
3. **Go minimalist** - Copy Option 3 CSS
4. **Try bold box** - Copy Option 4 CSS
5. **Add wave effect** - Copy Option 5 CSS

**All options maintain:**
- Centered layout
- Bold typography
- Professional appearance
- Full responsiveness

---

**Your current hero section is bold, modern, and ready to impress! 🚀**

Want to try a different variation? Just copy the CSS from any option above!
