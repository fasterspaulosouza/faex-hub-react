import { Box } from "@mui/material";
import styled from "styled-components";

const AvatarContainer = styled(Box)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease;
  background: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AvatarPlaceholder = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Avatar = ({ src, alt, className = "", color = "#667eea", size = 60 }) => {
  return (
    <AvatarContainer className={className} color={color} size={size}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <AvatarPlaceholder>{alt}</AvatarPlaceholder>
      )}
    </AvatarContainer>
  );
};

export default Avatar;
