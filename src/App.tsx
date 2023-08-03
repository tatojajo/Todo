import { Provider } from "react-redux";
import store from "./Redux/store";
import Todos from "./Todos";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Provider store={store}>
        <Todos />
      </Provider>
    </Box>
  );
}

export default App;
