import { createBrowserRouter } from "react-router-dom";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
} from "../actions/contactsActions";
import Contact from "../components/Contact";
import EditContact from "../components/EditContact";
import {
  getContactLoader,
  getContactsLoader,
  updateContactFavourite,
} from "../loader/getContactLoader";
import ErrorPage from "../page/ErrorPage";
import Index from "../page/Index";
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
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavourite,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);
