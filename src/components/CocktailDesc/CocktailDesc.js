import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import './CocktailDesc.css';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Spinner } from 'react-bootstrap'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
 export default function CocktailDesc({details, loaddetails}) {
  
    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
          marginTop:"5%"
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));
     
        const classes = useStyles();
        const [expanded, setExpanded] = useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
      return (<div className="card-design">
         <Link to="/">
        <Button variant="contained" color="secondary">
          Go Back to home
        </Button>
      </Link>
  { loaddetails 
    ? 
  (<Spinner animation="grow" />) 
  :
    (<Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={details.strDrink}
      />
      <CardMedia
        className={classes.media}
        image={details.strDrinkThumb}
        title="Paella dish"
      />
     <CardContent>
        <Typography paragraph>Category:</Typography>
        <Typography variant="body2" component="h3">{details.strCategory}</Typography>
        <Typography variant="body2" component="h3">{details.strAlcoholic}</Typography>
    </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {details.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
     )}
     </div>)}

