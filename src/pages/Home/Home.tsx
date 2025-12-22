import React, { useState } from 'react';
import LeftPanel from '../../components/LeftPanel/LeftPanel.tsx';
import Dashboard from '../../components/Dashboard/Dashboard.tsx';
import './Home.scss';

/**
 * Home Page Component
 * 
 * Main page layout that combines the left filter panel and main dashboard.
 * Features:
 * - Responsive design with mobile-first approach
 * - Slide-in drawer for mobile devices
 * - Animated hamburger menu
 * - Dark overlay when sidebar is open on mobile
 * 
 * Layout:
 * Desktop (>1024px): Fixed left sidebar + main content area
 * Tablet (768-1024px): Reduced sidebar + main content
 * Mobile (<768px): Hidden sidebar with toggle button
 */
const Home: React.FC = () => {
    // State to control sidebar visibility on mobile devices
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    /**
     * Toggle sidebar visibility
     * Used for mobile menu open/close functionality
     */
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="home-container">
            {/* Mobile Menu Button - Only visible on screens < 768px */}
            <button 
                className="mobile-menu-btn" 
                onClick={toggleSidebar}
                aria-label="Toggle menu"
                aria-expanded={isSidebarOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Dark overlay when sidebar is open on mobile - Clicking closes sidebar */}
            {isSidebarOpen && (
                <div 
                    className="sidebar-overlay" 
                    onClick={toggleSidebar}
                    aria-hidden="true"
                ></div>
            )}

            {/* Left Panel - Filter sidebar component */}
            {/* On mobile: slides in from left when 'open' class is applied */}
            <div className={`left-panel-wrapper ${isSidebarOpen ? 'open' : ''}`}>
                <LeftPanel />
            </div>

            {/* Main Dashboard - Charts and KPI cards */}
            <div className="main-content">
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;

