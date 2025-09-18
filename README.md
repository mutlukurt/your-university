# University Landing Page

A modern, professional university landing page built with React, TypeScript, and Tailwind CSS. Features clean institutional design, accessibility compliance, and integration with Pexels for high-quality imagery.

## ✨ Features

- **Modern Design**: Clean, professional university branding with institutional color palette
- **Responsive Layout**: Mobile-first design that works beautifully across all devices (320px to 1440px+)
- **Accessibility**: WCAG AA compliant with semantic HTML, proper contrast ratios, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient animations
- **Interactive Components**: Program tabs, FAQ accordion, scholarship cards, contact forms, smooth scrolling navigation
- **Professional Photography**: Integration with Pexels API for high-quality campus imagery
- **Comprehensive Sections**: Hero, stats, programs, campus life, admissions, scholarships, testimonials, FAQs, contact, and CTA
- **Form Handling**: Advanced contact form with validation, loading states, and success feedback
- **Financial Aid Information**: Detailed scholarship programs with requirements and application processes

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Headless UI** for accessible components
- **Lucide React** for icons
- **Pexels API** for professional photography
- **React Hooks**: useState, useEffect for state management
- **TypeScript Interfaces**: Strong typing for props and data structures
- **Controlled Components**: Form handling with React patterns
- **CSS Grid & Flexbox**: Advanced layouts via Tailwind utilities
- **React Hooks** (useState, useEffect) for state management
- **Form Validation** with controlled components
- **Vitest** for testing

## 📋 Website Sections

### 🏠 **Hero Section**
- Compelling value proposition with call-to-action buttons
- High-quality hero image with responsive design
- Smooth animations and professional typography

### 📊 **Statistics Section**
- Key university metrics (employment rate, industry partners, programs, scholarships)
- Animated counters with icons
- Clean card-based layout

### 🎓 **Academic Programs**
- Tabbed interface for Undergraduate, Graduate, and Online programs
- 18 different programs across all categories
- Program cards with duration, descriptions, and curriculum links
- Responsive grid layout

### 🏫 **Campus Life**
- Interactive image mosaic with campus facilities
- Key highlights: 200+ student organizations, state-of-the-art labs, athletics, housing
- Professional photography integration

### 💰 **Scholarships & Financial Aid**
- **Technical Implementation**:
  - Dynamic scholarship cards with TypeScript interfaces
  - Reusable `ScholarshipCard` component with props validation
  - Framer Motion animations with staggered delays
  - Responsive grid layouts (1 column mobile, 2 columns desktop)
  - Icon integration from Lucide React
  - Statistics dashboard with responsive design

### 📞 **Contact Section**
- **Technical Implementation**:
  - Advanced contact form with React controlled components
  - Form validation using useState and custom validation logic
  - Loading states and success feedback with conditional rendering
  - TypeScript interfaces for form data and contact information
  - Responsive grid layouts for contact cards
  - Email and phone link integration
  - Department directory with dynamic rendering

### 📝 **Admissions Process**
- Visual timeline showing application steps
- Merit-based scholarship information
- Call-to-action for applications and tuition estimation

### 💰 **Scholarships & Financial Aid**
- **4 Major Scholarship Programs**:
  - Merit Excellence Scholarship (up to $25,000)
  - International Student Scholarship (up to $15,000)
  - STEM Innovation Grant (up to $20,000)
  - Need-Based Financial Aid (variable amounts)
- **Key Statistics**: $5M+ awarded annually, 85% students receive aid
- **Application Process**: 3-step visual guide
- **Detailed Requirements**: Each scholarship shows eligibility, deadlines, and renewal status

### 🗣️ **Student Testimonials**
- Real student success stories with professional portraits
- Diverse representation across different programs
- Pexels API integration for authentic student photos

### ❓ **FAQ Section**
- Expandable accordion interface
- 6 comprehensive questions covering admissions, scholarships, housing, and support
- Smooth animations and accessibility features

### 📞 **Contact Section**
- **4 Contact Methods**: Campus visit, phone, email, office hours
- **Interactive Contact Form**:
  - Smart validation with required fields
  - 9 interest categories (undergraduate, graduate, online, scholarships, etc.)
  - Loading states and success feedback
  - Professional form design with icons
- **Department Directory**: 6 key departments with direct contact information
- **Emergency Contact**: 24/7 campus security line
- **Campus Tour CTAs**: Schedule visits and virtual tours

### 🚀 **Call-to-Action Section**
- Final conversion section with application and campus tour buttons
- Compelling messaging for prospective students
- Professional design with contrasting background

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd university-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up Pexels API:
   - Get a free API key from [Pexels](https://www.pexels.com/api/)
   - Create a `.env` file in the root directory:
   ```bash
   VITE_PEXELS_API_KEY=your_pexels_api_key_here
   ```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎨 Customization

### Brand Colors

Update the color palette in `tailwind.config.js`:

```javascript
extend: {
  colors: {
    primary: '#0B1F3B',    // Navy - main brand color
    secondary: '#334155',   // Slate - secondary text
    accent: '#CBA135',      // Gold - highlights and CTAs
    bg: '#F8FAFC',         // Light gray - page background
    text: '#0F172A',       // Dark - primary text
    muted: '#475569',      // Gray - secondary text
  }
}
```

### Typography

The site uses two font families:
- **Inter**: For UI elements and body text
- **Merriweather**: For headings and emphasis

Fonts are loaded via Google Fonts in `src/index.css`.

### University Information

Update university-specific content in:
- **Header**: `src/components/Header.tsx` - University name and navigation
- **Hero**: `src/sections/Hero.tsx` - Main value proposition and messaging
- **Footer**: `src/components/Footer.tsx` - Contact information and links
- **Programs**: `src/sections/Programs.tsx` - Academic programs and descriptions
- **Scholarships**: `src/sections/Scholarships.tsx` - Financial aid programs and amounts
- **Contact**: `src/sections/Contact.tsx` - University contact information and departments

### Scholarship Programs

Customize scholarship information in `src/sections/Scholarships.tsx`:

```javascript
const scholarships = [
  {
    title: 'Merit Excellence Scholarship',
    amount: 'Up to $25,000',
    description: 'Outstanding academic achievements and leadership potential',
    requirements: ['GPA 3.8+', 'SAT 1400+/ACT 32+', 'Leadership', 'Community service'],
    deadline: 'March 1st',
    renewable: true
  }
  // Add more scholarships...
];
```

### Contact Information

Update contact details in `src/sections/Contact.tsx`:

```javascript
const contactInfo = [
  {
    title: 'Visit Our Campus',
    details: ['123 University Avenue', 'Education City, State 12345'],
    action: 'Get Directions'
  }
  // Update with your university's information...
];

const departments = [
  { name: 'Admissions Office', email: 'admissions@youruniversity.edu', phone: '+1 (555) 123-4568' },
  // Add more departments...
];
```

### Form Configuration

Customize the contact form in `src/components/ContactForm.tsx`:

```typescript
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const interests = [
  'Undergraduate Programs',
  'Graduate Programs',
  'Online Learning',
  // Add more interest categories...
];
```
### Images

The application uses Pexels for professional photography:

1. **With Pexels API** (Recommended):
   - Set `VITE_PEXELS_API_KEY` in your `.env` file
   - Images are fetched automatically based on search queries

2. **Without API Key** (Fallback):
   - Placeholder images are used from the `PLACEHOLDER_IMAGES` constant
   - Update URLs in `src/lib/pexels.ts` to use your own images

## 🧪 Testing

Run the test suite:

```bash
npm test        # Run tests in watch mode
npm test:ui     # Open Vitest UI
npm test:coverage  # Generate coverage report
```

Tests are included for:
- Button component functionality and variants
- FAQ component interactions and accessibility
- Contact form validation and submission states
- Scholarship card display and interactions
- Form input handling and error states
- Contact form validation and submission
- Scholarship card display and interactions
- Additional component tests can be added in `src/components/__tests__/`

## 📱 Responsive Design

The design is mobile-first with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

All components are fully responsive with appropriate layouts for each breakpoint.

## ♿ Accessibility

- Semantic HTML structure with proper landmarks
- WCAG AA color contrast ratios
- Keyboard navigation for all interactive elements
- Screen reader friendly with proper ARIA labels
- Respects `prefers-reduced-motion` for animations
- Focus indicators for all focusable elements
- Form accessibility with proper labels and error handling
- Skip links and logical tab order

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `VITE_PEXELS_API_KEY=your_api_key`
4. Deploy automatically on push

### Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Other Platforms

The built application is a static site that can be deployed to any static hosting service:
- Build: `npm run build`
- Deploy: Upload contents of `dist` folder

## 📊 Performance

- Lighthouse scores target: Performance ≥90, Accessibility ≥95
- Optimized images with lazy loading
- Minimal JavaScript bundle with tree shaking
- Efficient CSS with Tailwind's purging
- Form optimization with proper validation
- Smooth animations with reduced motion support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- Design inspiration from leading universities
- Photography from [Pexels](https://www.pexels.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Support

For questions or support:
- Create an issue in the repository
- Check the documentation in this README
- Review the component examples in the codebase

---

Built with ❤️ for educational institutions worldwide.