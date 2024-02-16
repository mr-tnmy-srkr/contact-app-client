import { createBrowserRouter } from "react-router-dom";
import {
  createContactAction,
  editContactAction,
} from "../actions/contactsActions";
import Contact from "../components/Contact";
import EditContact from "../components/EditContact";
import {
  getContactLoader,
  getContactsLoader,
} from "../loader/getContactLoader";
import ErrorPage from "../page/ErrorPage";
import Root from "../routes/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
    ],
  },
]);
