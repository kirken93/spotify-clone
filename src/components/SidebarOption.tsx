import { SvgIconProps } from "@material-ui/core";
import "../styles/SidebarOption.css";

type OptionProps = {
  title: string,
  Icon?: (props: SvgIconProps) => JSX.Element,
  onClick?: () => void
};

const SidebarOption: React.FC<OptionProps> = ({ title, Icon, onClick }): React.ReactElement => {
  return <div className="sidebarOption" onClick={onClick}>
    {Icon && <Icon className="sidebarOption__icon"/>}
    {Icon ? <h4>{title}</h4> : <p>{title}</p>}
  </div>;
}

export default SidebarOption;