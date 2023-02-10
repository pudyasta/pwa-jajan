// import RootLayout from "./layout";
import Main from "./main/Main";
import NavContext from "config/context";

export default function Home() {
  return (
    <>
      <NavContext>
        <Main />
      </NavContext>
    </>
  );
}
