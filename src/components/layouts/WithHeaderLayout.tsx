import { Outlet } from "react-router-dom";
import Container from "../container/Container";
import Header from "../header/Header";

function WithHeaderLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default WithHeaderLayout;
