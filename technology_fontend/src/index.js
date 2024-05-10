import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
// import dotenv from 'dotenv'
// dotenv.config()

ReactDOM.render(<>
     <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
</>, document.getElementById("root"));