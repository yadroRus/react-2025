import "./tabs.css";

export const Tab = ({ name, active, onClick }) => {
  return (
    <div className="tabs-trigger" active={active} onClick={onClick}>
      {name}
    </div>
  );
};
