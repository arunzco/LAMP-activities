import "./layout.css"
import React, { useEffect, useState } from "react";
import {Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import i18n from "../i18n";
import ModalPopup from './uielements/ModalPopup';
import { MazeComponent } from "./MazeComponent";

const Layout = ({...props} : any) =>{
    
    const [circles, setCircles] = useState(2)
    const [gameLevel, setGameLevel] = useState(1)
    const [footerMsg, setFooterMsg] = useState("")
    const [confirmModalShow, setConfirmModalShow] = useState(false)
    const [levelCompleted, setLevelCompleted] = useState(false)
    const [complete, setComplete] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const time = new Date().getTime()
    const [timeTaken, setTimeTaken] = useState(0)
    const [routes, setRoutes] = useState<any>([])
    const [startGame, setStartGame] = useState(false)
    const [showStartButton, setShowStartButton] = useState(false)

      useEffect(() => {  
        const configuration = props?.data?.configuration;
        i18n.changeLanguage(!!configuration ? configuration.language : "en-US");
        setFooterMsg(i18n.t<string>("LEVEL")+" "+gameLevel)
        if(gameLevel === 1) {
          if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )){
              setShowStartButton(false)
            }
            else {
              setShowStartButton(true)
            }
          
        }
      }, [])
    
      const showModal = () => {
        setConfirmModalShow(true)
       }
      
       const hideModal = () => {
        setConfirmModalShow(false)
       }       
      
       

       useEffect(()=>{
        if(levelCompleted){
          setFooterMsg(i18n.t<string>("YOU_WON"))
          const route = {
            "duration": timeTaken/1000,
            "item": circles,
            "level": gameLevel, 
            "type": levelCompleted,
            "value": timeTaken
        }
        setRoutes([...routes,route])
        if(gameLevel<12){
          showModal()
        }
        else {
          setIsGameOver(true)
        }
        }
       },[levelCompleted]) 

       useEffect(() => {
        if(isGameOver) {
          setTimeout(()=>{
            parent.postMessage(routes.length > 0 ? JSON.stringify({
              timestamp: new Date().getTime(),
              duration: new Date().getTime() - time,
              temporal_slices: JSON.parse(JSON.stringify(routes)),
              static_data: {},
             }) : null, "*") 
          }, 5000)     
    
        }
      }, [isGameOver])

      
       useEffect(() => {
        if(complete) {
          parent.postMessage(JSON.stringify({ completed: true }), "*")      
        }
      }, [complete])

      
    return(
        <div className="main-class">
          <ModalPopup
            show={confirmModalShow}
            onHide={(e : any) =>{
              hideModal()
              setTimeout(()=>{
                parent.postMessage(routes.length > 0 ? JSON.stringify({
                  timestamp: new Date().getTime(),
                  duration: new Date().getTime() - time,
                  temporal_slices: JSON.parse(JSON.stringify(routes)),
                  static_data: {},
                 }) : null, "*") 
              }, 5000)    
            }}
            message={i18n.t<string>("CONTINUE")}
            handleConfirm={(e: any) => {
              hideModal()

            if(gameLevel < 12) { 
              setFooterMsg(i18n.t<string>("LEVEL")+" "+(gameLevel+1).toString())
              setGameLevel(gameLevel+1)
              if(gameLevel=== 6){
                setCircles(2)
              }
              else  {
                setCircles(circles+1)
              }
              setLevelCompleted(false)
            }            
            }}
            action="mindLamp"
          />         
          <nav className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} onClick={() => setComplete(true)} />
            </nav>            
            <div className="heading">{i18n.t<string>("GAME")}</div>
            
          <Container>  
           {isGameOver && <Row>
              <Col>
                  <p className='error-class'>{i18n.t<string>("GAME_OVER")}</p>
              </Col>
            </Row> }       
            <Row>
              <Col>               
                <MazeComponent 
                  circles ={circles}
                  setFooterMsg={setFooterMsg}
                  gameLevel={gameLevel}
                  setLevelCompleted={setLevelCompleted}
                  setTimeTaken={setTimeTaken}
                  startGame={startGame}
                  setShowStartButton={setShowStartButton}
                />
              </Col>
            </Row>
           {showStartButton && <Row>
              <Col className="mt-150">               
              <Button variant="primary" className="start-button" size="sm" onClick={()=>{setStartGame(true); setShowStartButton(false)}}>
                {i18n.t<string>("START_GAME")}
             </Button>
              </Col>
            </Row>}
          </Container>         
          <div className="footer fixed_bottom">
                  {footerMsg}
          </div>
         </div>
      )
}
export default Layout
