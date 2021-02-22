import { ReactNode } from 'react';

export interface IEDialogProps {
  textButton: string;
  children: ReactNode;
  showActionButtons?: boolean;
  btnCancelText?: string;
  btnAcceptText?: string;
  onAcceptClick?(): any;
}
