import style from "./IconComponent.module.css";
const IconComponent = ({ item }) => {
  return (
    <div className={style.items}>
      {item?.icons?.map((icon, i) => {
        return (
          <label key={i} className={style.label}>
            <input type="hidden" />
            {icon.icon}
            {icon.label}
          </label>
        );
      })}
    </div>
  );
};
export default IconComponent;
