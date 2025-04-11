import { Typography, Chip, Card, CardContent, Avatar } from "@mui/material";
import ArrowImg from "../../assets/images/arrow.png";
import {
  customStylesCard,
  customStylesCardChip,
  customStylesCardContentDesc,
  customStylesCardContentTitle,
} from "../../constants/styles";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  badgeText?: string;
  url?: string;
}

const CardItem = ({
  image,
  url,
  title,
  description,
  badgeText,
}: CardItemProps) => {
  return (
    <Card sx={customStylesCard}>
      {/* Badge in Top Right */}
      {badgeText && (
        <Chip label={badgeText} size="small" sx={customStylesCardChip} />
      )}

      {/* Left Avatar or Logo */}
      <Avatar
        src={image}
        alt={title}
        variant="rounded"
        sx={{ width: 48, height: 48, bgcolor: "#fff", marginTop: "-20px" }}
      />

      {/* Title & Description */}
      <CardContent sx={{ flex: 1, p: 0 }}>
        <Typography variant="subtitle1" sx={customStylesCardContentTitle}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={customStylesCardContentDesc}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Right Icon Button */}
      {title === "TypeScript" && (
        <Avatar
          src={ArrowImg}
          alt={title}
          variant="rounded"
          sx={{ width: 38, height: 38, bgcolor: "#fff" }}
        />
      )}
    </Card>
  );
};

export default CardItem;
