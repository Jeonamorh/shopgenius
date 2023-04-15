import React , {useState} from 'react'
import Modal from 'react-modal';
import styled from "styled-components"
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate } from 'react-router-dom'
import BarIcon from "../imgs/barcode.png"
function BarCodeScannerModal() {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [data , setData] = useState("not found")
  const navigate = useNavigate()

  const openModal = () =>{
    setIsOpen(true);
  }

  const afterOpenModal = ()=> {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const  closeModal = ()=>{
    setIsOpen(false);
  }
  return (
    
    <div> 
    <BarBtn  onClick={openModal}>  
     
     <img src={BarIcon} alt="" />
  </BarBtn>
    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <Head>
        <h2>Bar Code Scanner</h2>
        <p>Please scan the item code below</p>
    </Head>
   <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            navigate(`/singleproduct/${result.text}`)
            closeModal()
        }
          else setData("Not Found");
        }}
      />
  </Modal>
  </div>
  )
}
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const BarBtn = styled.div`

  padding: 10px 20px;
  color: White;
  background-color: #6254F3;
  position: fixed;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
  border: none;
  border-radius: 3000px;
  box-shadow: 0px 1px 10px rgba(0 , 0 , 0,0.5);
  transition: all 0.5s ease-in-out;
  img{
    height: 3rem;
  }

  :hover{
    background-color: white;
  }

`

const Head = styled.div`

  text-align: center;
  p{
    margin-top: 5rem;
  }
`
export default BarCodeScannerModal