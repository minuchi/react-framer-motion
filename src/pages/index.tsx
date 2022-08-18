import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Animation from './Animation';
import Gestures from './Gestures';
import Home from './Home';
import Variants from './Variants';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/variants" element={<Variants />} />
        <Route path="/gestures" element={<Gestures />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
