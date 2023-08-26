import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, HomeOutlined,
         AddAPhoto, AddAPhotoOutlined,
         AccountCircle, AccountCircleOutlined
       } from '@mui/icons-material';
import { getPath } from '../lib/url';
import styles from "./footer.module.css";
import mobile from "../mobile.module.css";

const isHome = (path) => path === "/home";
const isAdd = (path) => path === "/add";
const isUser = (path) => path === "/user";

export function Footer() {
  const path = getPath();

  const HomeIcon = isHome(path) ? Home : HomeOutlined;
  const AddIcon = isAdd(path) ? AddAPhoto : AddAPhotoOutlined;
  const UserIcon = isUser(path) ? AccountCircle : AccountCircleOutlined;

  return (
    <footer className={[styles.container, mobile.window_width].join(' ')}>
      <BottomNavigation showLabels className={styles.icon}>
        <BottomNavigationAction style={{color:"black"}} icon={<HomeIcon />} />
        <BottomNavigationAction style={{color:"black"}} icon={<AddIcon />} />
        <BottomNavigationAction style={{color:"black"}} icon={<UserIcon />} />
      </BottomNavigation>
    </footer>
  );
}
