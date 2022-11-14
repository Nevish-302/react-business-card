import Twitter from "../assets/Twitter.png"
import Facebook from "../assets/Facebook.png"
import GitHub from "../assets/GitHub.png"
import Instagram from "../assets/Instagram.png"
export default function Footer () {
    return(
        <div className="footer" >
            <img alt ="Twitter" src = {Twitter} className = "footer-social"></img>
            <img alt ="Facebook" src = {Facebook} className ="footer-social"></img>
            <img alt ="Github" src = {GitHub} className ="footer-social"></img>
            <img alt ="Instagram" src = {Instagram} className ="footer-social"></img>
        </div>
    )
}