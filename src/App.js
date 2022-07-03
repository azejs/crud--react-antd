import { BrowserRouter,Routes,Route,} from "react-router-dom";
import  Hotel from './modules/hotel';
 
import {Provider} from "react-redux";
import configureStore, {history} from "./appRedux/store";
 

export const store = configureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter history={history}>
    <Routes>
 
      <Route path="/hotel" element={<Hotel />}></Route>
    </Routes>
   </BrowserRouter>
  </Provider>
  );
}

export default App;
