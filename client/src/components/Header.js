import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {
        /* <h3>process.env.EMAIL_ALUNO</h3> */
      }
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "orange" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "BIA 2023",
};

export default Header;
