# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install & Run
```bash
npm install
npm start
```
Visit `http://localhost:3000` to see your dashboard!

---

## 📸 What You'll See

### Desktop View
```
┌────────────────────────────────────────────────────┐
│  ☕ Logo                                           │
│                                                    │
│  Store Location         KPI Cards Row              │
│  □ Astoria             ┌────────────────────────┐ │
│  □ Hell's Kitchen      │ £699K  │  £3   │ 149K │ │
│  □ Lower Manhattan     └────────────────────────┘ │
│                                                    │
│  Size                  Charts Grid                 │
│  □ Large               ┌──────┐  ┌──────────────┐ │
│  □ Regular             │ Pie  │  │ Line Graph   │ │
│  □ Small               └──────┘  └──────────────┘ │
│                        ┌────────────────────────┐ │
│  Products              │   Bar Chart            │ │
│  □ Coffee              └────────────────────────┘ │
│  □ Tea                 ┌────────────────────────┐ │
│  □ Bakery              │   Area Graph           │ │
│  ...                   └────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

### Mobile View
```
┌──────────────────────┐
│  ☰  (Menu Button)    │
├──────────────────────┤
│  KPI Card 1          │
│  £699K - Revenue     │
├──────────────────────┤
│  KPI Card 2          │
│  £3 - Avg Cost       │
├──────────────────────┤
│  KPI Card 3          │
│  149K - Sales        │
├──────────────────────┤
│  Pie Chart           │
│  (Full width)        │
├──────────────────────┤
│  Line Graph          │
│  (Full width)        │
├──────────────────────┤
│  Bar Chart           │
│  (Full width)        │
├──────────────────────┤
│  Area Graph          │
│  (Full width)        │
└──────────────────────┘
```

---

## 🎯 Component Structure

```
src/
├── App.tsx                           # ← Start here
│   └── imports Home
│
├── pages/
│   └── Home/                         # ← Main page
│       ├── Home.tsx                  # Layout container
│       └── Home.scss                 # Responsive styles
│
└── components/
    ├── LeftPanel/                    # Filter sidebar
    │   ├── LeftPanel.tsx
    │   └── LeftPanel.scss
    │
    ├── Dashboard/                    # Main content area
    │   ├── Dashboard.tsx
    │   └── Dashboard.scss
    │
    ├── KPICards/                     # Top metrics cards
    │   ├── KPICards.tsx
    │   └── KPICards.scss
    │
    ├── PieChart/                     # Revenue breakdown
    ├── BarChart/                     # Monthly comparison
    ├── LineGraph/                    # Trend analysis
    ├── AreaGraph/                    # Cumulative data
    │
    └── LoadingSpinner/               # Loading indicator
        ├── LoadingSpinner.tsx
        └── LoadingSpinner.scss
```

---

## 🎨 Customize in 5 Minutes

### 1. Change KPI Values
```tsx
// File: src/components/KPICards/KPICards.tsx
// Line: ~15-25

<KPICard title="Total Revenue" value="£999K" icon="📊" />
<KPICard title="Profit Margin" value="25%" icon="💰" />
<KPICard title="Customers" value="5.2K" icon="👥" />
```

### 2. Add New Filter
```tsx
// File: src/components/LeftPanel/LeftPanel.tsx
// Add in render section:

<div className="filter-group">
    <h3 className="filter-title">Category</h3>
    <div className="filter-options">
        {['Option A', 'Option B'].map(option => (
            <label key={option} className="filter-option">
                <input type="checkbox" />
                <span className="checkbox-custom"></span>
                <span className="option-text">{option}</span>
            </label>
        ))}
    </div>
</div>
```

### 3. Change Colors
```scss
// File: src/components/vars.scss or any .scss file

$primary-color: #your-color;
$background: #your-bg-color;
```

### 4. Adjust Layout
```scss
// File: src/components/Dashboard/Dashboard.scss

.dashboard-charts {
    grid-template-columns: repeat(3, 1fr); // Change from 2 to 3 columns
}
```

### 5. Add Loading State
```tsx
// File: src/pages/Home/Home.tsx
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const [loading, setLoading] = useState(true);

if (loading) {
    return <LoadingSpinner size="large" message="Loading..." />;
}
```

---

## 📱 Test Responsiveness

### In Browser DevTools
1. Open browser DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Test these sizes:
   - **Mobile**: 375px (iPhone)
   - **Tablet**: 768px (iPad)
   - **Desktop**: 1920px (Full HD)

### Expected Behavior
| Screen Size | Left Panel | Charts | KPI Cards |
|------------|-----------|--------|-----------|
| < 768px | Hidden (drawer) | Stacked | Stacked |
| 768-1024px | 200px fixed | 1 column | Row |
| > 1024px | 240px fixed | 2 columns | Row |

---

## 🔍 Key Features to Try

### 1. Mobile Menu
- Resize to mobile (<768px)
- Click hamburger menu (☰)
- Sidebar slides in from left
- Click outside to close

### 2. Filters
- Check/uncheck any filter
- Custom checkboxes with animations
- State is managed internally

### 3. Hover Effects
- Hover over KPI cards → slight lift
- Hover over chart cards → shadow increases
- Smooth transitions

### 4. Responsive Grid
- Resize browser window
- Watch charts rearrange automatically
- Smooth transitions between breakpoints

---

## 🐛 Common Issues & Fixes

### Issue: Styles not applying
```bash
# Make sure SASS is installed
npm install sass

# Restart dev server
npm start
```

### Issue: TypeScript errors
```bash
# Check node_modules
npm install

# Clear cache
npm cache clean --force
rm -rf node_modules
npm install
```

### Issue: Components not found
```tsx
// Make sure imports have correct paths
import Home from './pages/Home/Home';  // Correct ✓
import Home from './pages/Home';       // May not work ✗
```

---

## 📚 Learn More

| Document | What's Inside |
|----------|---------------|
| **README.md** | Project overview & setup |
| **PROJECT_STRUCTURE.md** | Detailed architecture |
| **USAGE_EXAMPLES.md** | Code examples & patterns |
| **COMPONENT_REFERENCE.md** | Component API reference |
| **IMPLEMENTATION_SUMMARY.md** | What was built |

---

## 🎯 Next Actions

### Immediate (5 min)
- [x] Run `npm start`
- [ ] View dashboard in browser
- [ ] Test mobile menu
- [ ] Try resizing window

### Short-term (1 hour)
- [ ] Customize KPI values
- [ ] Change color scheme
- [ ] Add your own data
- [ ] Test all responsive breakpoints

### Long-term (1 day+)
- [ ] Connect to real API
- [ ] Implement filter functionality
- [ ] Add more charts
- [ ] Deploy to production

---

## 💡 Pro Tips

1. **Use the index file** for cleaner imports:
   ```tsx
   import { Dashboard, LeftPanel } from './components';
   ```

2. **SCSS variables** make theme changes easy - define once, use everywhere

3. **Mobile-first approach** - styles cascade up from mobile to desktop

4. **Component composition** - mix and match components for custom layouts

5. **TypeScript** helps catch errors early - use it!

---

## 🆘 Need Help?

1. Check the documentation files (listed above)
2. Look at `USAGE_EXAMPLES.md` for code patterns
3. Review `COMPONENT_REFERENCE.md` for component details

---

## ✅ Checklist

After setup, you should have:
- [x] Dashboard visible at localhost:3000
- [x] Left sidebar with filters
- [x] 3 KPI cards at top
- [x] 4 charts in responsive grid
- [x] Mobile menu working (< 768px)
- [x] No console errors
- [x] Smooth animations

---

**Ready to code? Start with `src/pages/Home/Home.tsx`!** 🚀

**Questions?** Check the docs or dive into the code - it's well commented!

