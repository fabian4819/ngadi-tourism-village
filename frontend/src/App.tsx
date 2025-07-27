// src/App.tsx (or your main application file like index.tsx or main.tsx)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VillageWebsite from './components/VillageWebsite'; // Your main landing page
import ArticlesPage from './pages/ArticlePage'; // The new articles page
import ArticleDetailPage from './pages/ArticleDetailPage'; // The article detail page
import BMICalculatorPage from './pages/BMICalculatorPage'; // The BMI calculator page

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VillageWebsite />} />
                <Route path="/artikel" element={<ArticlesPage />} />
                <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
                <Route path="/tes-bmi" element={<BMICalculatorPage />} />
            </Routes>
        </Router>
    );
};

export default App;