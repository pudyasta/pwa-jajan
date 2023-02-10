import React, {
  Context,
  FunctionComponent,
  ReactNode,
  useReducer,
} from "react";

enum ActionKind {
  CAT_COLLAPSE = "catCollapse",
  CAT_UP = "catUp",
  CAT_TOOGLE = "catToogle",
}

interface Actions {
  type: ActionKind;
  payload: number;
}

interface CountState {
  navCollapse: boolean;
}

type navbarContext = {
  state: any;
  dispatch: any;
};

export const NavContextProvider = React.createContext<navbarContext | null>(
  null
);

const reducer = (state: CountState, action: Actions) => {
  const { type, payload } = action;
  switch (type) {
    case "catCollapse":
      return { ...state, navCollapse: true };
    case "catUp":
      return { ...state, navCollapse: false };
    case "catToogle":
      return { ...state, navCollapse: !state.navCollapse };
  }
};

const NavContext = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<any>(reducer, { navCollapse: false });

  return (
    <NavContextProvider.Provider value={{ state, dispatch }}>
      {props.children}
    </NavContextProvider.Provider>
  );
};

export default NavContext;
