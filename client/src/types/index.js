/**
 * Shared frontend constants and response shapes.
 * Keep this file updated when you add a new backend resource.
 */

export const ITEM_STATUS = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done"
};

export const ITEM_STATUS_OPTIONS = [
  { value: ITEM_STATUS.TODO, label: "To do" },
  { value: ITEM_STATUS.DOING, label: "In progress" },
  { value: ITEM_STATUS.DONE, label: "Done" }
];

/**
 * Expected API list response:
 * {
 *   items: []
 * }
 *
 * Expected API single-record response:
 * {
 *   item: {}
 * }
 */
export const API_RESPONSE_KEYS = {
  LIST: "items",
  SINGLE: "item"
};