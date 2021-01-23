import React from 'react'
// import '../styles/FoodItem.css';
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './Styles';

function FoodItem({vendors}) {
    const classes = useStyles();

    let vendorsList = vendors.map(vendor => {
        return (
            <Card className={classes.root} key={vendor._id}>
                <Box className={classes.cardMain}>
                    <Box>
                        <img className={classes.image} height='40px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/2560px-RedDot_Burger.jpg" alt=""/>
                    </Box>
                    <CardContent>
                        <Box className={classes.cardTitle} title={vendor.name}>
                            {vendor.name}
                        </Box>
                        <Box className={classes.cardDesc}>{vendor.foodType}</Box>
                        <Box className={classes.cardDesc}><LocationOnIcon />{vendor.location}</Box>
                        <Box className={classes.cardFooter}>
                            <span className='rating'><StarIcon />{vendor.rating ? vendor.rating : 'NA'}</span> 
                            <span>.</span>
                            <span>{vendor.deliveryTime} mins</span>
                            <span>.</span>
                            <span> ₹ {vendor.minPrice} for Two</span>
                        </Box>
                        <Box className="menu__button">
                            <Link to={`/menu/${vendor._id}`} className="btn btn-sm"><Button color='primary' variant='contained'>View Menu</Button></Link>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
            // <div className="foodItem" key={vendor._id}>
            //     <div className="card__main">
            //         <div className='card__image'>
            //             <img height='40px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/2560px-RedDot_Burger.jpg" alt=""/>
            //         </div>
            //         <div className="card__body">
            //             <div className="card__title" title={vendor.name}>
            //                 {vendor.name}
            //             </div>
            //             <div className="card__desc">{vendor.foodType}</div>
            //             <div className="card__desc location"><LocationOnIcon />{vendor.location}</div>
            //             <div className='card__footer'>
            //                 <span className='rating'><StarIcon />{vendor.rating ? vendor.rating : 'NA'}</span> 
            //                 <span>.</span>
            //                 <span>{vendor.deliveryTime} mins</span>
            //                 <span>.</span>
            //                 <span> ₹ {vendor.minPrice} for Two</span>
            //             </div>
            //             <div className="menu__button">
            //                 <Link to={`/menu/${vendor._id}`} className="btn btn-sm btn-primary">View Menu</Link>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    })

    return (
        <div className={classes.foods}>{vendorsList}</div>
    )
}

export default FoodItem


// import React from 'react';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }