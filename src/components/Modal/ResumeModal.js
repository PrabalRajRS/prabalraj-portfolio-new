import { Dialog, Slide } from "@mui/material";
import React from "react";
import welcomeIcon from '../../files/welcome.jpeg';
import "./ResumeModal.css";

const ResumeModal = ({ isModalOpen, setIsModalOpen }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    return (
        <Dialog
            className="dialog"
            open={isModalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setIsModalOpen(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <div className="dialog-content">
                <img className="dialog-image" src={welcomeIcon} alt="welcome" />
                <div>
                    <h2>Hello!</h2>
                    <p>Thanks for stopping by.</p>
                    <h4 onClick={() => setIsModalOpen(false)}>Get Started</h4>
                </div>
            </div>
        </Dialog>
    )
}

export default ResumeModal;