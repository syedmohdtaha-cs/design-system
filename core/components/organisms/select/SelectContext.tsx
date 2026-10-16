import * as React from 'react';
import { OptionType, TListboxSize, SelectStyleType } from '@/common.type';

export type ContextProps = {
  listboxId?: string;
  openPopover?: boolean;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
  selectValue?: OptionType | OptionType[];
  setSelectValue?: React.Dispatch<React.SetStateAction<OptionType | OptionType[]>>;
  isOptionSelected?: boolean;
  setIsOptionSelected?: React.Dispatch<React.SetStateAction<boolean>>;
  onOptionClick?: (option: OptionType | OptionType[]) => void;
  maxHeight?: number;
  minHeight?: number;
  width?: number | string;
  withSearch?: boolean;
  setWithSearch?: React.Dispatch<React.SetStateAction<boolean>>;
  multiSelect?: boolean;
  listRef?: React.RefObject<HTMLDivElement>;
  triggerRef?: React.RefObject<HTMLElement | null>;
  triggerBoxRef?: React.RefObject<HTMLElement | null>;
  focusedOption?: HTMLElement;
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
  size?: TListboxSize;
  styleType?: SelectStyleType;
  error?: boolean;
  /** Sets the message announced to screen readers through the status region rendered inside the open popover. */
  setStatusMessage?: (message: string) => void;
  /** Called on every search input change, so a status message can wait until the user stops typing. */
  notifySearch?: () => void;
  /** Index of the option that has tabindex=0 (roving tabstop). -1 when none (e.g. search focused or empty list). */
  rovingIndex?: number;
};

export const SelectContext = React.createContext<ContextProps>({});

export default SelectContext;
