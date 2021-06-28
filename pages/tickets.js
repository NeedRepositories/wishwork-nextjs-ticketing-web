import Head from 'next/head'
import React from 'react';
import axios from "axios";


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AttachFileIcon from '@material-ui/icons/AttachFile';


import Container from '@material-ui/core/Container';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles, withStyles } from '@material-ui/core/styles';
function Alert(props) {
     return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
     root: {
          width: '100%',
          '& > * + *': {
               marginTop: theme.spacing(2),
          },
     },
     rootgrid: {
          flexGrow: 1,
     },
     rootAccordionDetails: {
          display: 'block',
          paddingRight: '80px',
          paddingLeft: '80px'
     },
     rootAccordionDetailsBox: {

     },
     rootAccordionDetailsBoxWriteText: {
          marginTop: '30px'
     },
     rootAccordionDetailsGrid: {
          height: '70px',
          display: 'grid',
          alignContent: 'center'
     },
     rootAccordionDetailsGrid2: {
          display: 'grid',
          alignContent: 'center'
     },
     rootAccordionDetailsGridBtn: {
          textAlign: 'right',
          marginTop: '20px'
     },
     profilePhotoHelpDesk: {
          backgroundColor: '#cbf1df'
     },
     profilePhotoUser: {
          backgroundColor: '#f1cbcb'
     },
     rootAccordionDetailsGridMessage: {
          height: '70px',
          display: 'grid',
          alignContent: 'center',
          padding: '45px',
          borderRadius: '10px',
          backgroundColor: '#e6e6e6'
     },
     containermain: {
          borderRadius: '10px',
          marginTop: '20px',
          paddingTop: '15px'
     },
     containerborder: {
          border: '2px solid #1C6EA4',
          borderRadius: '10px',
          marginTop: '20px',
          paddingTop: '15px',
          padding: '5px'
     },
     btnlabel: {
          textTransform: 'lowercase',
          textAlign: 'right'
     }
}));

const useStylesAccording = makeStyles((theme) => ({
     root: {
          background: 'white',

     },
     expanded: {
          background: 'linear-gradient(90deg,rgba(242,242,242,1) 0%, rgb(247 247 247) 100%)'//'linear-gradient(90deg, rgba(242,242,242,1) 0%, rgba(199,199,199,1) 100%)',
     },
     rounded: {
     },
     roottable: {
          border: '2px solid #1C6EA4',
          borderRadius: '10px',
          paddingTop: '15px',
          padding: '5px'
     }

     // root	.MuiAccordion-root	Styles applied to the root element.
     // rounded	.MuiAccordion-rounded	Styles applied to the root element if square={false}.
     // expanded	.Mui-expanded	Styles applied to the root element if expanded={true}.
}));

const useStylesTable = makeStyles((theme) => ({
     root: {

     }
}));

const SalmanButton = withStyles({
     root: {
          background: 'linear-gradient(90deg, rgba(242,242,242,1) 0%, rgba(147,201,15,1) 100%);linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 1px 5px 2px #93c90f',
     },
     label: {
          textTransform: 'capitalize',
     },
})(Button);

const CssTextField = withStyles({
     root: {
          '& label.Mui-focused': {
               color: '#9bcc23',
          },
          '& .MuiInput-underline:after': {
               borderBottomColor: '#9bcc23',
          },
          '& .MuiOutlinedInput-root': {
               '& fieldset': {
                    borderColor: '#9bcc23',
               },
               '&:hover fieldset': {
                    borderColor: '#9bcc23',
               },
               '&.Mui-focused fieldset': {
                    borderColor: '#9bcc23',
               },
          },
     },
})(TextField);



function Tickets({ ListTickets }) {

     const classes = useStyles();
     const classesAccording = useStylesAccording();
     const classesTable = useStylesTable();

     const [open, setOpen] = React.useState(false);
     const [message, setMessage] = React.useState('');
     const [status, setStatus] = React.useState(0);
     const [btnview, setBtnView] = React.useState(false);
     const [expanded, setExpanded] = React.useState(false);
     const [expandedRow, setExpandedRow] = React.useState('');


     const SendTicket = event => {
          event.preventDefault(); // don't redirect the page        
          // use axios here
          // use axios here ...............
          // use axios here
     };

     const showMsgBox = (message, statuscode) => {
          setMessage(message);
          setStatus(statuscode);
          setOpen(true);
     };

     const handleCloseMsgBox = (event, reason) => {
          setOpen(false);
     };

     const handleChange = (panel) => (event, isExpanded) => {
          setExpandedRow(panel);
          setExpanded(isExpanded ? panel : false);
          console.log(isExpanded);
     };


     return (
          <div className={classes.containermain}>
               <Container maxWidth="md">

                    <div className={classes.root}>
                         <Head>
                              <meta charSet="utf-8" />
                              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                              <title>WishWork - Ticketing system</title>
                              <meta name="description" content="" />
                              <meta name="keywords" content="WishWork,Ticketing,2021" />
                              <meta name="viewport" content="width=device-width, initial-scale=1" />
                              <meta
                                   name="viewport"
                                   content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                              />
                         </Head>

                         <div>
                              <Grid container spacing={1}>
                                   <Grid item xs md classes={{ root: classes.btnlabel }}>
                                        <Button classes={{ root: classes.btnlabel }}><PhoneRoundedIcon fontSize="small" /> call</Button>
                                   </Grid>
                                   <Grid item xs={5} md={2} classes={{ root: classes.btnlabel }}>
                                        <Button classes={{ root: classes.btnlabel }}><AddCommentRoundedIcon fontSize="small" />add a tiket</Button>
                                   </Grid>
                              </Grid>
                         </div>



                         <div >
                              <TableContainer>
                                   <Table aria-label="simple table"
                                        classes={{
                                             root: classesTable.root
                                        }}>
                                        <TableHead>
                                             <TableRow>
                                                  <TableCell align="center">ID</TableCell>
                                                  <TableCell align="center">Title</TableCell>
                                                  <TableCell align="center">State</TableCell>
                                                  <TableCell align="center">Start Date</TableCell>
                                                  <TableCell align="center">Operation</TableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>

                                        </TableBody>
                                   </Table>
                                   <div className={classesAccording.roottable}>
                                        {ListTickets.map((row) => (

                                             <Accordion key={row._id} expanded={expanded === row._id} onChange={handleChange(row._id)}
                                                  classes={{
                                                       root: classesAccording.root,
                                                       expanded: classesAccording.expanded,
                                                       rounded: classesAccording.rounded
                                                  }} id={'acc' + row._id}>
                                                  <AccordionSummary
                                                       // expandIcon={<Button>View</Button>}
                                                       // aria-label="Expand"
                                                       // aria-controls="additional-actions1-content"
                                                       id={"additional-actions1-header" + row._id}>

                                                       <Grid container >
                                                            <Grid item xs={2}>
                                                                 {row._id}
                                                            </Grid>
                                                            <Grid item xs>
                                                                 {row.title}
                                                            </Grid>
                                                            <Grid item xs>
                                                                 {row.status == 1 ? 'open' : 'close'}
                                                            </Grid>
                                                            <Grid item xs>
                                                                 {row.timestamp}
                                                            </Grid>
                                                            <Grid item xs={1}>
                                                                 <Button>{((expandedRow == row._id) && expanded) ? 'close' : 'view'}</Button>
                                                            </Grid>
                                                       </Grid>

                                                  </AccordionSummary>
                                                  <AccordionDetails classes={{ root: classes.rootAccordionDetails }}>
                                                       <div>
                                                            Description
                                                            <hr />

                                                            <Box classes={{
                                                                 root: classes.rootAccordionDetailsBox
                                                            }}>
                                                                 {row.ticketMessages ? row.ticketMessages.map(tm => (
                                                                      <div key={tm._id}>
                                                                           <Grid container spacing={0}>
                                                                                <Grid item md={2} xs={2} align="center" classes={{
                                                                                     root: classes.rootAccordionDetailsGrid
                                                                                }}>
                                                                                     <Box>
                                                                                          {tm.status == 1 ?
                                                                                               <AccountCircleTwoToneIcon classes={{
                                                                                                    root: classes.profilePhotoUser
                                                                                               }} fontSize="large" />
                                                                                               :
                                                                                               <AccountCircleTwoToneIcon classes={{
                                                                                                    root: classes.profilePhotoHelpDesk
                                                                                               }} fontSize="large" />
                                                                                          }

                                                                                     </Box>
                                                                                </Grid>
                                                                                <Grid item md={10} xs={10} classes={{
                                                                                     root: classes.rootAccordionDetailsGrid
                                                                                }}>
                                                                                     {tm.name}
                                                                                </Grid>
                                                                                <Grid item md={12} xs={12} classes={{
                                                                                     root: classes.rootAccordionDetailsGridMessage
                                                                                }}>
                                                                                     {tm.message}
                                                                                </Grid>
                                                                           </Grid>
                                                                      </div>
                                                                 ))
                                                                      :
                                                                      <></>
                                                                 }

                                                            </Box>

                                                            <Grid container spacing={0}>
                                                                 <Grid item md={2} xs={2} align="center" classes={{
                                                                      root: classes.rootAccordionDetailsGrid
                                                                 }}>
                                                                      <Box>
                                                                           {row.status == 1 ?
                                                                                <AccountCircleTwoToneIcon classes={{
                                                                                     root: classes.profilePhotoUser
                                                                                }} fontSize="large" />
                                                                                :
                                                                                <AccountCircleTwoToneIcon classes={{
                                                                                     root: classes.profilePhotoHelpDesk
                                                                                }} fontSize="large" />
                                                                           }

                                                                      </Box>
                                                                 </Grid>
                                                                 <Grid item md={8} xs={12} classes={{
                                                                      root: classes.rootAccordionDetailsGrid
                                                                 }}>

                                                                 </Grid>
                                                                 <Grid item md={2} xs={12} classes={{
                                                                      root: classes.rootAccordionDetailsGrid
                                                                 }}>
                                                                      <Button classes={{ root: classes.btnlabel }}><AttachFileIcon fontSize="small" /> Attach file</Button>
                                                                 </Grid>

                                                                 <Grid item md={12} xs={12} classes={{
                                                                      root: classes.rootAccordionDetailsGrid2
                                                                 }}>
                                                                      <CssTextField
                                                                           id="outlined-multiline-static"
                                                                           multiline
                                                                           rows={7}
                                                                           defaultValue=""
                                                                           variant="outlined"
                                                                      />
                                                                 </Grid>
                                                                 <Grid item md={12} xs={12} classes={{
                                                                      root: classes.rootAccordionDetailsGridBtn
                                                                 }}>
                                                                      <SalmanButton>Send</SalmanButton>
                                                                 </Grid>
                                                            </Grid>
                                                       </div>
                                                  </AccordionDetails>
                                             </Accordion>
                                        ))}
                                   </div>
                              </TableContainer>
                         </div>

                         <div className={classes.root}>
                              <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseMsgBox}>
                                   {(status == 1) ?
                                        <Alert onClose={handleCloseMsgBox} severity="error">
                                             {message}
                                        </Alert>
                                        :
                                        <>
                                             {(status == 2) ?
                                                  <Alert onClose={handleCloseMsgBox} severity="warning">
                                                       {message}
                                                  </Alert>
                                                  :
                                                  <Alert onClose={handleCloseMsgBox} severity="success">
                                                       {message}
                                                  </Alert>
                                             }
                                        </>
                                   }
                              </Snackbar>
                         </div>
                    </div>
               </Container>
          </div >
     )

}



// this section rendered in server side just for fetch and security used.
export async function getServerSideProps(context) {

     const wishwork = process.env.API_TOKEN;
     const IP_SERVER_API = process.env.API_IP;
     const PORT_SERVER_API = process.env.API_PORT;
     let reqheaders = {};
     let ServerAPI = null;
     var statusOK = false;
     let listTickets = [];



     const token = Buffer.from(`token:${wishwork}`, 'utf8').toString('base64');
     reqheaders = {
          'Content-Type': 'application/json',
          'Authorization': 'WISHWORK_' + token
     };
     ServerAPI = axios.create({
          headers: reqheaders
     });

     await ServerAPI.get(IP_SERVER_API + PORT_SERVER_API + "/wishwork/tickets")
          .then(res => {
               if (res.status == 200) {
                    statusOK = true;
                    listTickets = res.data;
               }
          }).catch(err => {
               console.log('error in get list tickets => ' + err);
          });

     listTickets.push({
          _id: '1',
          title: 'Test 1',
          status: 1, // open          
          message: 'first when ticket created',
          timestamp: '1400/04/01',
          ticketMessages: [
               {
                    _id: '1',
                    Ticket: '2',
                    name: 'Salman Samian',
                    status: 1,// 
                    message: 'message from Salman Samian message from Salman Samian message from Salman Samian message from Salman Samian message from Salman Samian',
                    timestamp: '1400/04/02'
               }
          ]
     });
     listTickets.push({
          _id: '2',
          title: 'Test 1',
          status: 1, // open          
          message: 'first when ticket created',
          timestamp: '1400/04/01',
          ticketMessages: [
               {
                    _id: '1',
                    Ticket: '2',
                    name: 'Salman Samian',
                    status: 1,// 
                    message: 'message from Salman Samian message from Salman Samian message from Salman Samian message from Salman Samian message from Salman Samian',
                    timestamp: '1400/04/02'
               },
               {
                    _id: '2',
                    Ticket: '2',
                    name: 'Help Desk',
                    status: 2, // 
                    message: 'message from Help Desk',
                    timestamp: '1400/04/02'
               },
               {
                    _id: '3',
                    Ticket: '2',
                    name: 'Salman Samian',
                    status: 1,// 
                    message: 'message from Salman Samian',
                    timestamp: '1400/04/02'
               },
          ]
     });
     listTickets.push({
          _id: '3',
          title: 'Test 1',
          status: 1, // open          
          message: 'first when ticket created',
          timestamp: '1400/04/01',
          ticketMessages: [
               {
                    _id: '1',
                    Ticket: '2',
                    name: 'Salman Samian',
                    status: 1,// 
                    message: 'message from Salman Samian message from Salman Samian message from Salman Samian message from Salman Samian message from Salman Samian',
                    timestamp: '1400/04/02'
               }
          ]
     });


     console.clear();
     console.log('list tickets => ');
     console.log(listTickets);
     return {
          props: {
               ListTickets: listTickets
          }
     }
}

export default Tickets;




