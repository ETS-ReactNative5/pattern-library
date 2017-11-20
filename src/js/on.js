import { has } from './class-list';
import { freeByValue } from './free';

/**
 * Attach an event handler function for one event to the selected element, optionally delegated by given className.
 *
 * @param {Element|Document|Window|XMLHttpRequest} eventTarget - The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest)
 * @param {string} eventName -  A string representing the event type to listen for.
 * @param {string} [className] - A CSS class name upon which the given callback should be executet (without the preceding dot).
 * @param [Function] func - A function which receives a notification when an event of the specified type occurs.
 * @param {boolean} [capture] - A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
 * @returns {off} - Returns a functions which properly removes the event listener from the target.
 */
function on(eventTarget, eventName, className, func, capture = false) {
  const typeClassName = typeof className;
  const isDelegated = typeClassName === 'string';

  if (typeClassName === 'function') {
    /* eslint-disable no-param-reassign */
    capture = !!func;
    func = className;
    /* eslint-enable no-param-reassign */
  }

  const handler = isDelegated ? delegate : func;

  eventTarget.addEventListener(eventName, handler, capture);

  return off;

  function off() {
    eventTarget.removeEventListener(eventName, handler, capture);

    freeByValue(this, off);
  }

  // eslint-disable-next-line consistent-return
  function delegate(e) {
    let { target } = e;

    while (!has(target, className) && target !== eventTarget) {
      target = target.parentNode;
    }

    if (target !== eventTarget) {
      return func(e, target);
    }
  }
}

export default on;
