import {Box} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

export default function CartCheckout (){
    const [checkout, setCheckout] = useState<boolean>(false);
    return(
      <div>
          <Box sx={{
              width: "830px",
              height: "600px",
              marginTop:'20px',
              marginRight:'70px',
              backgroundColor: 'rgb(111,111,111,0.89)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              position:'relative'
          }}>


              <div style={{
                  display:"flex",
                  justifyContent:"center",
                  transform:'translateY(1600%)'
              }}>

                   <Button
                       onClick={()=>{setCheckout(true)}}
                           variant="contained"
                           disableElevation
                           sx={{ bgcolor: '#3b3839',
                           color: 'white',
                           width: '60%',
                           height: '10%',
                           borderRadius: '0px',
                           '&:hover': {
                           bgcolor: '#e2e1e1',
                           boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                           color: 'black',
                    }
               }}>
                   CHECK OUT
               </Button>
              </div>
              {
                  checkout
                  ?<p>10</p>
                  :<></>

              }

          </Box>
          <div>
              <div>
                  <p style={{
                      fontSize: '45px',
                      color: 'white',
                      transform: 'translateY(-900%)',
                      marginLeft: '40px',
                  }}>
                      $&nbsp;3459080000
                  </p>
                  <p style={{
                      fontSize: '25px',
                      color: 'white',
                      transform: 'translateY(-1450%)',
                      marginLeft: '40px',
                  }}>
                      Get 3% Discount ($3459042000)
                  </p>
                  <p style={{
                      fontSize: '10px',
                      color: 'white',
                      transform: 'translateY(-700%)',
                      marginLeft: '40px',
                      whiteSpace: 'pre-wrap',
                  }}>
                      GET FUJI CARE  <br/>
                      FUJICare+ for Headphones<br/>
                      $59.00or$9.83/mo.per month for 6 mo.monthsFootnote*<br/>
                      Get up to two years of unlimited repairs for accidental damage protection<br/>
                      and additional tech support
                  </p>
              </div>
          </div>
      </div>
    );
}