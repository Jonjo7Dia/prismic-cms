import classes from "../styles/scrollButton.module.scss";
import Image from "next/image";

interface ScrollButtonProps {
  link: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ link }) => {
  return (
    <div className={classes["scroll-button"]}>
      <a href={`#${link}`} className={classes["scroll-button__button"]}>
        <Image
          src={"/arrow-down.svg"}
          width={50}
          height={50}
          alt={"arrow-down-button"}
          className={classes["scroll-button__icon"]}
        />
      </a>
    </div>
  );
};

export default ScrollButton;
