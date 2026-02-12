import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(2deg);
  }
  66% {
    transform: translateY(10px) rotate(-2deg);
  }
`;

export const LoginContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #e8ecff;
  overflow: hidden;
  padding: 20px;
`;

export const FloatingAvatars = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const FloatingAvatar = styled(Box)`
  position: absolute;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || "0s"};

  ${(props) => props.$top && `top: ${props.$top};`}
  ${(props) => props.$bottom && `bottom: ${props.$bottom};`}
  ${(props) => props.$left && `left: ${props.$left};`}
  ${(props) => props.$right && `right: ${props.$right};`}

  @media (max-width: 768px) {
    display: ${(props) => (props.$hideOnMobile ? "none" : "block")};
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 180px;
  height: auto;
  margin: 0 auto 24px;

  @media (min-width: 1024px) {
    max-width: 200px;
    margin-bottom: 28px;
  }
`;

export const LoginCard = styled(Card)`
  && {
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 48px 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 460px;
    z-index: 1;
    position: relative;

    @media (min-width: 1024px) {
      max-width: 480px;
      padding: 52px 44px;
    }
  }
`;

export const Title = styled(Typography)`
  && {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 1.6rem;
      margin-bottom: 36px;
    }
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;

    .MuiOutlinedInput-root {
      border-radius: 10px;
      background: #fff;

      &:hover {
        background: #fff;
      }

      &.Mui-focused {
        background: #fff;
      }

      fieldset {
        border-color: #e2e8f0;
        border-width: 1.5px;
      }

      &:hover fieldset {
        border-color: #b0b8c9;
      }

      &.Mui-focused fieldset {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
    }

    .MuiInputBase-input {
      padding: 14px 16px;
      font-size: 0.95rem;
    }

    .MuiInputLabel-root {
      font-weight: 500;
      color: #4a5568;
      font-size: 0.95rem;
    }

    .MuiInputLabel-root.Mui-focused {
      color: #667eea;
    }
  }
`;

export const LoginButton = styled(Button)`
  && {
    background: #1e2533;
    color: #fff;
    border-radius: 10px;
    padding: 14px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 12px;
    text-transform: none;
    height: 52px;
    box-shadow: none;

    &:hover {
      background: #151b27;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(30, 37, 51, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const ForgotPasswordLink = styled(Link)`
  && {
    color: #4a5568;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    display: block;
    margin-top: 12px;
    text-decoration: none;

    &:hover {
      color: #2d3748;
      text-decoration: underline;
    }
  }
`;
