import './SidebarOptions.css';

const SidebarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
      <div>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
