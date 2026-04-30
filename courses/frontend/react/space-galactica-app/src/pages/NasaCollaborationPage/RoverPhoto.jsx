import styles from "./NasaCollaborationPage.module.css";

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPic}>
      <img className={styles.roverImg} src={src} alt={roverName} />
      <p>{roverName}</p>
      <p>{date}</p>
    </div>
  );
};

export default RoverPhoto;
