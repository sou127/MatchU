import { useEffect } from 'react'
import { VideoSDKMeeting } from '@videosdk.live/rtc-js-prebuilt'
import { useDocument } from '../../hooks/useDocument'
import { useParams } from "react-router-dom"
// import { useLocation } from 'react-router-dom'

export default function Meeting() {
    const { id } = useParams()
    const { document, error } = useDocument('projects', id)
  
    // if (error) {
    //   return <div className="error">{error}</div>
    // }
    // if (!document) {
    //   return <div className="loading">Loading...</div>
    // }
    // const location = useLocation();
    // // var chosenOne = location.pathname.split("/")[2]

    // const [chosenOne, setChosenOne] = useState("");

    useEffect(() => {
        const config = {
            name: "Saurabh Sharma", //to change
            meetingId: "Hi", //to change
            apiKey: "6ddab6d4-0004-418e-a92d-8ce50b9f7038",

            containerId: null,

            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,

            chatEnabled: true,
            screenShareEnabled: true,
            whiteboardEnabled: true,

            redirectOnLeave: "https://matchu.tech/",

            joinScreen: {
            visible: true, 
            title: "Saurabh Sharma", //to change
            meetingUrl: window.location.href, 
        },
    };
    
        const meeting = new VideoSDKMeeting();
        meeting.init(config);
    }, []);

    return (
    <div></div>
    )
}
