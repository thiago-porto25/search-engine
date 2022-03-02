import { Routes, Route } from 'react-router-dom';
import { Home, Info, NotFound, Results } from 'pages';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as CONSTANTS from 'constants/index';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path={CONSTANTS.HOME}>
        <Route index element={<Home />} />
        <Route path={CONSTANTS.RESULTS} element={<Results />} />
        <Route path={CONSTANTS.INFO} element={<Info />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

export default App;
