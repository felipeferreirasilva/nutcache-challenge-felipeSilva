import Box from "@mui/material/Box";
import HomeImage from "../../assets/images/home_image.png";

const Home = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center" mt={10}>
      <img src={HomeImage} alt="Nutcache" width="500px"></img>
    </Box>
  );
};

export default Home;
