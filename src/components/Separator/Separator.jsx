import RLogoImage from "../../images/r-logo2.png";

export default function Separator() {
  return (
    <div className="separator">
      <img className="separator__image" alt="logo" src={RLogoImage} />
      <div className="separator__line"></div>
    </div>
  );
}
