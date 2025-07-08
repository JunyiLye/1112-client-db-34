import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WomensProductStaticPage_34 from './pages/WomensProductStaticPage_34';
import Shop2Page_34 from './pages/supabase/Shop2Page_34';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/static_34" element={<WomensProductStaticPage_34 />}/>
      <Route path="supa_shop2_34" element={<Shop2Page_34/>} />
    </Routes>
    </BrowserRouter>
    )
}

export default App;
