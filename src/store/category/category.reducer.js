export const CATEGORY_INITIAL_STATE = {
  categoriesMap: {},
}

export const categoryReducer = (
  state = CATEGORY_INITIAL_STATE, action = {}
) => {

const { type, payload } = action;

switch(type) {
  case 'SET_CATEGORIES_MAP':
    return {
      ...state,
      categoriesMap: payload
    }
  default:
    return state;

  }
}
