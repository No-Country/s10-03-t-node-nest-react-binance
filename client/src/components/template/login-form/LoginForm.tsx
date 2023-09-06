import {
  ImageList,
  Typography,
  Container,
  Box,
  ImageListItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_STYLES } from "./LoginFormStyles";
import PrimaryButton from "../../atom/buttons/PrimaryButton";
import Person2Icon from "@mui/icons-material/Person2";
import GoogleIcon from "@mui/icons-material/Google";
import useGoogleAuth from "../../../hooks/useGoogleAuth";

const LoginForm = () => {
  const navigate = useNavigate();

  const googleAuth = useGoogleAuth();
  const { signInWithGoogle } = googleAuth;

  const handleGoogleLogin = async () => {
    await signInWithGoogle();

    navigate("/market");
  };

  return (
    <main style={{ minHeight: "80vh" }}>
      <Container maxWidth="sm" sx={LOGIN_STYLES.container}>
        <Box sx={LOGIN_STYLES.box}>
          <ImageList sx={{ width: 120, height: 120 }}>
            <ImageListItem>
              <img
                src={"../../binance-64.png"}
                alt="logo de Binance"
                loading="lazy"
                style={{ width: "200%", height: "auto" }}
              />
            </ImageListItem>
          </ImageList>
          <Typography sx={LOGIN_STYLES.txt}>
            Inscríbete para conseguir 100 USDT de descuento en la comisión de
            trading
          </Typography>
          <Box sx={LOGIN_STYLES.btnContainer}>
            <PrimaryButton
              text="Regístrate con correo o telefono"
              ariaLabelText=""
              variant="contained"
              color="primary"
              icon={<Person2Icon />}
              onClick={() => navigate("/register/continue")}
            />
            <Box sx={LOGIN_STYLES.boxText}>
              <Typography sx={{ px: 2, color: "black", py: 3 }}>
                ____________________or__________________
              </Typography>
            </Box>
            <PrimaryButton
              text="Continuar con google"
              ariaLabelText="Continuar con google"
              variant="contained"
              color="secondary"
              icon={<GoogleIcon />}
              onClick={handleGoogleLogin}
            />
            <Typography sx={LOGIN_STYLES.txtLink}>
              ¿Ya tiene una cuenta?
              <Link
                to={"/login"}
                style={LOGIN_STYLES.link}
                aria-label="iniciar sesion"
              >
                Iniciar sesión
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default LoginForm;
