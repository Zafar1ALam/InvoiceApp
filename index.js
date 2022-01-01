/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import InvoiceTab from './src/navigations/InvoiceTab';
import TabNavigation from './src/navigations/TabNavigation';
import Analytics from './src/screens/Analytics';
import Cna from './src/screens/Cna';
import CreateInvoice from './src/screens/CreateInvoice';
import CustomerNameHere from './src/screens/CustomerNameHere';
import Customers from './src/screens/Customers';
import EditCompanyInfo from './src/screens/EditCompanyInfo';
import EditProfile from './src/screens/EditProfile';
import Home from './src/screens/Home';
import Invoices from './src/screens/Invoices';
import InvoiceView from './src/screens/InvoiceView';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/SignUp';
import Splash from './src/screens/Splash';

AppRegistry.registerComponent(appName, () => InvoiceView);
