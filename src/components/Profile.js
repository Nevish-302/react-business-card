import profile from "../assets/Profile.png"

export default function Profile () {
    return(
        <div className = "profile">
        <img className="profile-img" alt="ProfilePic" src ={profile}></img>
        </div>
    )
}