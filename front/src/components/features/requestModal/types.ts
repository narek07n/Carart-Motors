import { ModalProps } from "@mui/material";

export interface IRequestModalProps extends Partial<ModalProps> {
  open: boolean;
  request_id: string;
  product_id: string;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}
