# MGKCodes Website Development Instructions

## Project Overview
Build a professional software solutions company website for MGKCodes using Next.js 14+, TypeScript, and Tailwind CSS. This is a business website focused on web development services for small businesses, with additional services in SEO, AI integration, mobile apps, and custom software.

## Brand Guidelines

### Colors
- Primary: `#000000` (Black)
- Secondary/Accent: `#0074D9` (Blue)
- Background: `#FFFFFF` (White)

### Typography
- Font: Source Sans Pro Semi Bold
- Use `font-semibold` class for headings
- Install font via Google Fonts or use system fallback

### Design Style
- Clean, modern, professional
- Black borders/frames matching logo style
- Blue accents for CTAs and interactive elements
- Generous whitespace
- Mobile-first responsive design

## Technical Stack

### Required Technologies
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React or Heroicons
- **Email:** EmailJS for contact form

### Project Structure
```
/app
  /page.tsx (Homepage)
  /services/page.tsx
  /portfolio/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /layout.tsx
/components
  /ui (reusable components)
    /Button.tsx
    /Card.tsx
    /Section.tsx
  /layout
    /Header.tsx
    /Footer.tsx
    /Navigation.tsx
  /home (homepage sections)
  /services (service components)
  /portfolio (portfolio components)
/lib
  /utils.ts
/public
  /images
  /logo (logo files)
```

## Site Structure

### Pages to Build
1. **Homepage** - Hero, services overview, how it works, pricing snapshot, featured projects, CTA
2. **Services** - 6 detailed service sections (Web Dev featured, then SEO, AI, Apps, Social, Custom)
3. **Portfolio** - Grid with filters, Coming Soon placeholders, case study template
4. **About** - Brief company overview (3 paragraphs)
5. **Contact** - Contact form + direct contact info

## Component Requirements

### Button Component
Create variants:
- **Primary:** Blue bg (`#0074D9`), white text, rounded
- **Secondary:** Blue border, blue text, hover fills blue
- **Ghost:** No border, blue text, subtle hover

### Card Component
- White background
- Black border (1px) - matching logo frame style
- Subtle shadow
- Hover: slight lift effect (increase shadow)
- Consistent padding

### Navigation
- Fixed header, white background, subtle shadow
- Logo on left (use text "MGKCodes" styled in brand colors if no logo file)
- Desktop: horizontal nav links on right
- Mobile: hamburger menu with slide-in drawer
- Active page: blue underline or indicator

## Page-Specific Requirements

### Homepage

**Hero Section:**
```
Headline: "Professional Websites Built for Small Businesses"
Subheadline: "Custom web development, SEO optimization, and software solutions to grow your business online"
CTA Buttons: "Get Your Website" (primary) | "View Our Work" (secondary)
Trust Badge: "From £99 | Worldwide Service | Ready to Launch"
```

**Services Overview (3 cards):**
1. Web Development - "Starting at £99"
2. SEO Optimization - "£40/month package available"
3. Software Solutions - "Get a Quote"

**How It Works (3 steps):**
1. Contact Us → Tell us what you need
2. We Build → Fast, professional development
3. You Launch → Go live with hosting + SEO support

**Pricing Snapshot:**
- Landing Page: £99
- Custom Website: Contact for Quote
- Hosting + SEO: £40/month

### Services Page

**Service Order (with detail level):**

1. **Web Development** (MOST DETAIL - largest section)
   - What We Build: Landing pages, business sites, e-commerce, portfolios, web apps
   - Process: 4 steps (Consultation, Design & Dev, Testing, Support)
   - Tech Stack: React, Next.js, Tailwind, mobile-first, SEO-optimized
   - Pricing:
     * Landing Page: £99 (details listed)
     * Multi-Page: Custom Quote
     * Hosting + SEO: £40/month (detailed features)
     * Updates: Separate service, contact for quote
   
2. **SEO Optimization** (Medium detail)
   - What We Offer: keyword research, on-page SEO, technical SEO, local SEO
   - Included in £40/month package
   - Standalone: Custom quote
   
3. **AI Integration** (Medium detail)
   - Chatbots, content generation, automation
   - Use cases and tech stack
   - Custom quote
   
4. **Mobile App Development** (Medium detail)
   - iOS, Android, cross-platform, PWAs
   - React Native
   - Custom quote
   
5. **Social Media Solutions** (Brief)
   - Management tools, automation, analytics
   - Custom quote
   
6. **Custom Software Solutions** (Brief)
   - Catch-all for any software needs
   - Custom quote

### Portfolio Page

**Initial State:**
- Grid layout with 6 "Coming Soon" placeholder cards
- Filters: All Projects, Web Development, Mobile Apps, AI Integration, SEO Projects, Social Media, Custom Solutions
- Each placeholder card:
  * Placeholder icon/image
  * "Project Coming Soon" label
  * Service category badge
  * Text: "We're currently working on exciting projects. Check back soon!"

**Structure for Future Case Studies:**
Template page at `/portfolio/[slug]` with sections:
- Hero image
- The Challenge
- The Solution
- Technologies Used
- Key Features
- Results & Impact
- Visual Showcase
- Project Details
- Links (if applicable)

### About Page

**Content (3 short paragraphs):**

Paragraph 1:
"MGKCodes is a software solutions company specializing in custom web development and modern technology integration. We help small businesses and growing companies establish their online presence and leverage technology to achieve their goals."

Paragraph 2:
"We've always had a passion for design and creating something real. That passion drives every project we take on - from simple landing pages to complex AI integrations. We believe great software should be accessible, affordable, and built to last."

Paragraph 3:
"We work remotely with clients worldwide, bringing modern development practices and clear communication to every project. Whether you need a new website, mobile app, or custom software solution, we're here to help you build it right."

**Sections:**
- Company overview (above)
- What We Do Best (6 brief bullet points)
- Our Technology (brief paragraph + tech stack logos)
- Why Work With Us (4 brief points)
- CTA: "Let's discuss what we can build together"

### Contact Page

**Contact Form Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Service Interested In (dropdown - required):
  * Web Development
  * SEO Optimization
  * AI Integration
  * Mobile App
  * Social Media Solutions
  * Custom Software
  * Not Sure / General Inquiry
- Project Description (textarea - required)
- Budget Range (optional dropdown):
  * Under £500
  * £500 - £1,000
  * £1,000 - £5,000
  * £5,000+
  * Not sure yet
- Submit button: "Send Message"

**Direct Contact Info Display:**
- Email: mgkcodes@gmail.com
- Phone: (+44) 7454745917
- Instagram: @mgkcodes_
- Location: Worldwide Remote Service

**Form Behavior:**
- Validate all required fields
- Success message: "Thanks for reaching out! We'll get back to you within 24 hours."
- Error handling with clear messages
- Loading state while submitting
- Integrate with EmailJS (send to mgkcodes@gmail.com)

## Footer Requirements

Include:
- Logo/brand name
- Quick Links: Home, Services, Portfolio, About, Contact
- Services list (brief)
- Contact info: email, phone
- Social media: Instagram icon linked to @mgkcodes_
- Copyright: "© 2026 MGKCodes. All rights reserved."
- Optional: Privacy Policy, Terms of Service links (placeholder pages)

## Responsive Design Requirements

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Considerations
- Hamburger menu on mobile
- Stack sections vertically
- Touch-friendly buttons (min 44x44px)
- Readable text sizes (min 16px)
- Easy-to-tap form fields

## Animation Guidelines

Use Framer Motion for:
- **Scroll Animations:** Fade in + slide up on sections as user scrolls
- **Hover Effects:** Subtle scale or shadow on cards/buttons
- **Page Transitions:** Smooth fade between pages
- **Mobile Menu:** Slide in from right with backdrop

**Animation Timing:**
- Duration: 200-300ms for interactions
- Easing: ease-in-out
- Stagger children for lists/grids

## SEO Requirements

### Meta Tags (Every Page)
```typescript
export const metadata = {
  title: "Page Title | MGKCodes",
  description: "Page description (150-160 characters)",
  openGraph: {
    title: "Page Title",
    description: "Page description",
    url: "https://mgkcodes.com/page",
    siteName: "MGKCodes",
    images: [{ url: "https://mgkcodes.com/og-image.jpg" }],
    type: "website",
  },
}
```

### Structured Data
Add JSON-LD for:
- Organization (homepage)
- LocalBusiness (contact page)
- Service offerings

### Additional SEO
- Semantic HTML (proper heading hierarchy)
- Alt text on all images
- Internal linking between pages
- Sitemap.xml (auto-generated by Next.js)
- Robots.txt

## Performance Requirements

### Image Optimization
- Use Next.js `<Image>` component
- WebP format preferred
- Lazy loading for below-fold images
- Responsive images with proper sizing

### Code Optimization
- Code splitting (automatic with Next.js App Router)
- Dynamic imports for heavy components
- Minimize bundle size
- Remove unused dependencies

### Target Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Development Workflow

### Phase 1: Setup & Foundation
1. Initialize Next.js project: `npx create-next-app@latest mgkcodes-website --typescript --tailwind --app`
2. Install dependencies:
   ```bash
   npm install framer-motion react-hook-form lucide-react emailjs-com
   ```
3. Configure Tailwind with brand colors
4. Set up project structure
5. Create base components (Button, Card, Section)
6. Build Header and Footer

### Phase 2: Build Pages
1. Homepage with all sections
2. Services page with detailed content
3. Portfolio page with Coming Soon placeholders
4. About page
5. Contact page with form

### Phase 3: Enhancements
1. Add animations with Framer Motion
2. Implement portfolio filters
3. Integrate EmailJS for contact form
4. Add SEO meta tags
5. Optimize performance

### Phase 4: Testing
1. Test all pages on mobile/tablet/desktop
2. Test contact form submission
3. Check all links work
4. Validate responsive design
5. Run Lighthouse audit
6. Fix any issues

## Code Style Guidelines

### TypeScript
- Use TypeScript for all components
- Define proper interfaces for props
- Avoid `any` type

### Component Structure
```typescript
import { FC } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick 
}) => {
  // Component logic
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Tailwind Classes
- Use @apply for repeated patterns
- Keep utility classes readable (group by function)
- Use custom colors from tailwind.config

### File Naming
- Components: PascalCase (Button.tsx)
- Pages: lowercase (about/page.tsx)
- Utils: camelCase (formatPrice.ts)

## Accessibility Requirements

- Semantic HTML (header, nav, main, footer, section, article)
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support
- Focus indicators visible
- ARIA labels where needed
- Color contrast WCAG AA compliant (already good with black/blue/white)
- Alt text on all images
- Form labels properly associated

## Important Notes

### Priorities
1. **Web Development service must be most prominent** - largest section, most detail, featured position
2. **Professional but conversational tone** - "we" not "I", approachable but business-focused
3. **Mobile-first** - design for mobile, enhance for desktop
4. **Fast loading** - optimize everything, aim for <3s load time
5. **Clear CTAs** - every page should guide user to contact

### Content Guidelines
- Use "we" and "our" (company voice)
- Keep copy concise and scannable
- Lead with benefits, not features
- Include specific pricing where defined (£99, £40/month)
- Always offer "Contact for Quote" for undefined pricing

### What NOT to Do
- Don't use "I" or "my" (personal brand voice)
- Don't make About page too personal or lengthy
- Don't hide pricing - be transparent
- Don't over-animate - keep it subtle
- Don't use stock photos if possible (clean designs better)

## Testing Checklist

Before considering complete:
- [ ] All pages render correctly
- [ ] Navigation works (all links)
- [ ] Mobile menu functions properly
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] All responsive breakpoints tested
- [ ] Images load and display properly
- [ ] Animations work smoothly
- [ ] No console errors
- [ ] Lighthouse scores meet targets
- [ ] SEO meta tags present on all pages
- [ ] Accessible via keyboard navigation

## Deployment

### Vercel Deployment
1. Push code to GitHub repository
2. Import project to Vercel
3. Connect custom domain (mgkcodes.com)
4. Configure environment variables:
   - NEXT_PUBLIC_EMAILJS_SERVICE_ID
   - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
5. Deploy
6. Verify all functionality on live site

### Post-Deployment
- Set up Google Analytics or Plausible
- Submit sitemap to Google Search Console
- Test contact form on live site
- Check mobile performance on real devices

## Future Enhancements (Not for Initial Build)

Nice-to-haves for later:
- Dark mode toggle
- Blog section with CMS
- Live chat widget
- Booking/scheduling integration
- Testimonials slider
- Client logo showcase
- Loading skeleton screens
- Progressive Web App features

## Questions During Development?

If you encounter decisions not covered here:
1. **Design choices:** Follow brand board (black/blue/white, clean, professional)
2. **Content gaps:** Use placeholder text, mark as TODO
3. **Technical decisions:** Prefer Next.js best practices, keep it simple
4. **Unclear requirements:** Build the simplest working version first

## Success Criteria

The website is complete when:
✅ All 5 pages built and functional
✅ Responsive on mobile, tablet, desktop
✅ Contact form working (EmailJS integrated)
✅ Portfolio shows Coming Soon placeholders
✅ All pricing clearly displayed
✅ Brand colors and style consistent throughout
✅ Navigation works perfectly
✅ Performance Lighthouse score 90+
✅ No critical accessibility issues
✅ Ready to deploy to Vercel

---

**Ready to build? Start with Phase 1!**