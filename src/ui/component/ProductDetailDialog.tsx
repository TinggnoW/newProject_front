import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton, Typography} from "@mui/material";
import QuantityButton from "./QuantityButton.tsx";
import CloseIcon from '@mui/icons-material/Close';
import "../../css/ProductDetails.css"

type Props = {
    open: boolean,
    handleClose: () => void,
}


export const DialogComponent = ({ open, handleClose }:Props) => {
    return (
        <div className="productDialog-container">
            <Dialog className="dialog" open={open} onClose={handleClose}
                    sx={{'& .MuiDialog-paper': {
                            backgroundColor: 'rgb(111,111,111,0.89)',
                            maxWidth: '70%',
                            width: '100%',
                            height: '80%',
                            borderRadius: '0px',
                            boxShadow: '0 0 13px rgba(255, 255, 255, 0.36)'
                        },
            }}>
                <DialogTitle className="DialogProductName">
                    「N」が象徴する知性、
                    常に進化を続けるスタンダード
                </DialogTitle>
                <DialogContent dividers
                   sx={{
                       display: 'flex',
                       alignItems: 'flex-start'
                }} >
                    <img
                        src="https://fujifilm-x.com/wp-content/uploads/2018/12/dimitris-paterakis_89_animal_01.jpg"
                        style={{
                            width:'50%',
                            marginRight: '10px'
                        }}
                    />
                    <DialogContentText gutterBottom>
                        多くのファッショニスタに愛される〈ニューバランス〉は、シンプルな「N」のロゴマークと圧倒的な履き心地で知られるスニーカーのスタンダード。その歴史は古く、1906年、アメリカ・ボストンで創業者であるウィリアム・J・ライリーによって、矯正用シューズメーカーとして創業。ブランド名は「履いた人に新しい（new）バランス(balance)感覚をもたらす」ことから付けられた。60年代には医学的知識に基づく矯正シューズのノウハウを生かし、世界で初めてカスタムメイドのランニングシューズを世に出す。転機が訪れたのは1972年。その品質に惚れ込んだジェームス・S・デービス（現・取締役会長）が会社を買い取り、本格的にランニングシューズの生産に着手。ランナーとしても知られていたデービスは、自らが履いて走ることで「インステップレーシング」というニューバランス独自の技術を確立する。さらにグローバル戦略によりブランドとして飛躍的な成長を遂げたのはご存知の通り。
                        <Typography gutterBottom></Typography>
                        <Typography gutterBottom></Typography>
                        <Typography gutterBottom></Typography>
                        <Typography gutterBottom>Price: 280000</Typography>
                        <Typography gutterBottom>Stock: 2</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <div className="ProductDetailQuantityButton">
                        <QuantityButton/>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
};

