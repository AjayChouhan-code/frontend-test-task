import { Avatar, Chip } from "@mui/material";
import {
  customStylesTagAvtar,
  customStylesTagButton,
} from "../../constants/styles";

interface TagButtonProps {
  label: string;
  active: boolean;
  icon: string;
  WhiteIcon: string;
  onClick: () => void;
}

const TagButton = ({
  icon,
  WhiteIcon,
  label,
  active,
  onClick,
}: TagButtonProps) => {
  return (
    <Chip
      label={label}
      avatar={
        <Avatar src={active ? WhiteIcon : icon} sx={customStylesTagAvtar} />
      }
      clickable
      onClick={onClick}
      variant={active ? "filled" : "outlined"}
      sx={customStylesTagButton(active)}
    />
  );
};

export default TagButton;
