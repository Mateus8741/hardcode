import LogoHero from "../../assets/Logo_HardCode.svg";

const Logo = () => {
  return (
    <img
      src={LogoHero}
      alt="Logo Hero Header"
      style={{
        marginLeft: 160,
        marginRight: window.innerWidth >= 1080 ? 338 : 0,
      }}
    />
  );
};

export default Logo;
