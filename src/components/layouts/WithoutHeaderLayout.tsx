import { Outlet } from "react-router-dom";
import Container from "../container/Container";

function WithoutHeaderLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default WithoutHeaderLayout;
