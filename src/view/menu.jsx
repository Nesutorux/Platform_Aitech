import "/src/view/css/styles.css";
import logo from "/src/image/logo.png";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonIcon from "@mui/icons-material/Person";

export function Menu() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <div>
        <Button
          color="secondary"
          className="btninicio"
          startIcon={<HomeIcon />}
        >
          Inicio
        </Button>
        <div>
          <Button
            color="secondary"
            className="btnmenu"
            startIcon={<AssignmentIndIcon />}
          >
            Proyecto
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
            className="btnmenu"
            startIcon={<LeaderboardIcon />}
          >
            Grafica 1
          </Button>
          <div>
            <Button
              color="secondary"
              className="btnmenu"
              startIcon={<LeaderboardIcon />}
            >
              Grafica 2
            </Button>
            <div>
              <Button color="secondary" className="btnmenu">
                Pendiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
