import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import topNews from "@/assets/editorsInsight2.png";
import topNews1 from "@/assets/editorsInsight1.png";
import Image from "next/image";
import { Grid } from "@mui/material";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} width={800} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 text-white px-2 rounded my-3">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Md Abul Hasanat- 8 April 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              quia ad fugiat magnam odit blanditiis, corrupti porro quibusdam
              recusandae modi?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews1} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 text-white px-2 rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it
                  again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By Md Abul Hasanat- 8 April 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias quia ad fugiat magnam odit blanditiis, corrupti porro
                  quibusdam recusandae modi?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews1} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 text-white px-2 rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it
                  again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By Md Abul Hasanat- 8 April 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias quia ad fugiat magnam odit blanditiis, corrupti porro
                  quibusdam recusandae modi?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews1} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 text-white px-2 rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it
                  again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By Md Abul Hasanat- 8 April 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias quia ad fugiat magnam odit blanditiis, corrupti porro
                  quibusdam recusandae modi?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews1} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 text-white px-2 rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it
                  again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By Md Abul Hasanat- 8 April 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias quia ad fugiat magnam odit blanditiis, corrupti porro
                  quibusdam recusandae modi?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
