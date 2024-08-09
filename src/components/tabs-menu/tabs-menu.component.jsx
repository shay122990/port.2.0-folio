const Tabs = ({
  items,
  selectedItem,
  onTabChange,
  renderTabLabel,
  className,
}) => {
  const handleKeyDown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      onTabChange(item);
    }
  };

  return (
    <div className={className}>
      {items.map((item) => (
        <div
          key={item}
          className={`tab-item ${selectedItem === item ? "active" : ""}`}
          onClick={() => onTabChange(item)}
          onKeyDown={(e) => handleKeyDown(e, item)}
          tabIndex={0}
          role="button"
        >
          {renderTabLabel(item)}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
