import { Routes, Route } from 'react-router-dom';
import { Home, Info, NotFound, Results } from 'pages';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="page/:info" element={<Info />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

export default App;
