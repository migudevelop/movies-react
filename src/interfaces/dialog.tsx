import { ReactNode } from 'react';

export interface IEDialogProps {
  textButton: string;
  children: ReactNode;
  openDialog?: boolean;
  showActionButtons?: boolean;
  btnCancelText?: string;
  btnAcceptText?: string;
  onAcceptClick?(): any;
  onOpenDialogChange?(openValue: boolean): any;
}
