import React, { createContext, useMemo, useState } from "react";
import Notification, { NotificationProps } from "../../components/Notification";
import { initialContextValue } from "./constants/initialValues";
import AppLayout from "../../layouts/app/AppLayout";
import BaseLayout from "../../layouts/base/BaseLayout";
import { useLocation } from "react-router";
import { menuListMap } from "../../layouts/constants/menuList";
import { useAuthContext } from "../../lib/hooks/contextHooks/useAuthContext";
import Modal, { ModalProps } from "../../components/Modal";
import { DialogProps } from "@mui/material";

export type ShowNotificationParams = {
  content: string | React.ReactNode;
  severity: "error" | "info" | "success" | "warning";
  duration?: number;
  onClose?: () => void;
}

export type ShowModalParams = {
  content: string | React.ReactNode;
  title: string;
  onClose?: () => void;
  fullWidth?: boolean;
  maxWidth?: DialogProps['maxWidth'];
}

export type ViewContextType = {
  notification: {
    show: (params: ShowNotificationParams) => void;
    hide: () => void;
  };
  modal: {
    show: (params: ShowModalParams) => void;
    hide: () => void;
  };
}

export const ViewContext = createContext<ViewContextType>(initialContextValue);

type ViewProviderProps = {
  children: React.ReactNode;
}
const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  const { user, isAdmin } = useAuthContext();
  const location = useLocation();
  const currentPage = useMemo(() => (menuListMap[location.pathname]?.label), [location]);

  const [notification, setNotification] = useState<NotificationProps>({
    open: false,
    content: "",
    severity: "info",
    onClose: () => {}
  });
  const [modal, setModal] = useState<ModalProps>({
    open: false,
    onClose: () => {},
    content: "",
    title: "",
    fullWidth: true,
    maxWidth: "sm",
  });

  const hideNotification = () => {
    setNotification(notification => ({ ...notification, open: false }));
  }

  const showNotification = (params: ShowNotificationParams) => {
    setNotification({ ...params, open: true, onClose: hideNotification });
  }

  const hideModal = () => {
    setModal(modal => ({ ...modal, open: false }));
  }

  const showModal = (params: ShowModalParams) => {
    setModal(modal=>({ ...modal, ...params, open: true, onClose: hideModal }));
  }

  const Layout = useMemo(() => user ? AppLayout : BaseLayout, [user]);
  return (
    <ViewContext.Provider
      value={{
        notification: {
          show: showNotification,
          hide: hideNotification,
        },
        modal: {
          show: showModal,
          hide: hideModal,
        }
      }}
    >
      <Layout
        currentPage={currentPage}
        isAdmin={isAdmin}
        isActive={user?.isActive}
      >
        {children}
        <Notification {...notification} />
        <Modal {...modal} />
      </Layout>
    </ViewContext.Provider>
  )
}

export default ViewProvider;

