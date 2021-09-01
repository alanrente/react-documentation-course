import UserInfo from "../UserInfo";

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {console.log("Data formatada")}
        </div>
      </div>
    );
}

export default Comment;