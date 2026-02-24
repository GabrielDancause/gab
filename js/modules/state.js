import { getLS, setLS } from './utils.js';

export const state = {
  isCustomer: getLS('gab_customer') === '1',
  leadCaptured: getLS('gab_lead_captured') === '1',
  popupDismissed: getLS('gab_lead_popup_dismissed') === '1',
  exitDismissed: getLS('gab_exit_dismissed') === '1'
};

export function setLeadCaptured() {
  setLS('gab_lead_captured');
  state.leadCaptured = true;
}

export function setPopupDismissed() {
  setLS('gab_lead_popup_dismissed');
  state.popupDismissed = true;
}

export function setExitDismissed() {
  setLS('gab_exit_dismissed');
  state.exitDismissed = true;
}
