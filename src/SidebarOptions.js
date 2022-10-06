import './SidebarOptions.css';

const SidebarOptions = ({
  id,
  Icon,
  title,
  number,
  selected,
  selectHandler,
}) => {
  const sidebarToggleHandler = () => {
    selectHandler(id);
  };
  return (
    <div
      className={`sidebarOption ${selected && 'sidebarOption--active'}`}
      onClick={sidebarToggleHandler}
    >
      <div>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
