import { ModalProps } from "@mui/material";

export interface IRequestModalProps extends Partial<ModalProps> {
  open: boolean;
  product_id: string;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}
