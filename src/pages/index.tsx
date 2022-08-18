import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getPathnameFromURL } from '../utils/url';
import Animation from './Animation';
import CodeChallenge from './CodeChallenge';
import Gestures from './Gestures';
import Home from './Home';
import Path from './Path';
import Variants from './Variants';

function Pages() {
  return (
    <BrowserRouter basename={getPathnameFromURL(process.env.PUBLIC_URL)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/variants" element={<Variants />} />
        <Route path="/gestures" element={<Gestures />} />
        <Route path="/path" element={<Path />} />
        <Route path="/code-challenge" element={<CodeChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
