import { MainLayout } from "@components/layouts";
import "./Settings.css";
import SettingsMain from "./SettingsMain";
import SettingsSide from "./SettingsSide";


const Settings = () => {
  return <MainLayout Main={SettingsMain} Side={SettingsSide}></MainLayout>;
};

export default Settings;
