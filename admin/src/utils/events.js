export const eventsToDispatch = {
  HOST_FULL_SCREEN: 'HOST_FULL_SCREEN',
  CLICK_NAVBAR_APP_BUTTON: 'CLICK_NAVBAR_APP_BUTTON'
};

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;